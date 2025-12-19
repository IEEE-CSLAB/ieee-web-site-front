"use client";

import React, { useState, useEffect } from 'react';
import { API_URL } from '@/lib/api';
import {
    adminFetchBlogs,
    adminCreateBlog,
    adminUpdateBlog,
    adminDeleteBlog,
    adminUploadBlogCover,
    AdminBlogInput,
} from '@/lib/services/adminBlogsApi';
import { fetchCommittees } from '@/lib/services/committeesApi';

interface BlogRow {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    author?: string;
    content?: string;
    committeeId: number;
}

export default function AdminBlogs() {
    const [blogs, setBlogs] = useState<BlogRow[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentBlog, setCurrentBlog] = useState<Partial<BlogRow>>({});
    const [coverFile, setCoverFile] = useState<File | null>(null);
    const [committees, setCommittees] = useState<{ id: number; name: string }[]>([]);

    const fetchBlogs = async () => {
        try {
            const data = await adminFetchBlogs();
            const mapped: BlogRow[] = data.map((b: any) => {
                const imageRaw: string | undefined = b.coverImageUrl || undefined;
                const image =
                    imageRaw && imageRaw.startsWith('http')
                        ? imageRaw
                        : imageRaw
                        ? `${API_URL}${imageRaw}`
                        : 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80';

                const content: string = b.content ?? '';
                const description =
                    content.length > 160 ? content.slice(0, 157) + '...' : content;

                const createdAt = b.createdAt ? new Date(b.createdAt) : null;
                const date = createdAt
                    ? createdAt.toLocaleDateString('tr-TR', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                      })
                    : '';

                return {
                    id: b.id,
                    title: b.title,
                    description,
                    image,
                    date,
                    author: 'IEEE Akdeniz',
                    content,
                    committeeId: b.committeeId,
                };
            });
            setBlogs(mapped);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch blogs', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const load = async () => {
            try {
                const [blogsData, committeesData] = await Promise.all([
                    adminFetchBlogs(),
                    fetchCommittees(),
                ]);

                const committeesMapped = committeesData.map((c: any) => ({
                    id: c.id,
                    name: c.name as string,
                }));
                setCommittees(committeesMapped);

                const mapped: BlogRow[] = blogsData.map((b: any) => {
                    const imageRaw: string | undefined = b.coverImageUrl || undefined;
                    const image =
                        imageRaw && imageRaw.startsWith('http')
                            ? imageRaw
                            : imageRaw
                            ? `${API_URL}${imageRaw}`
                            : 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80';

                    const content: string = b.content ?? '';
                    const description =
                        content.length > 160 ? content.slice(0, 157) + '...' : content;

                    const createdAt = b.createdAt ? new Date(b.createdAt) : null;
                    const date = createdAt
                        ? createdAt.toLocaleDateString('tr-TR', {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric',
                          })
                        : '';

                    return {
                        id: b.id,
                        title: b.title,
                        description,
                        image,
                        date,
                        author: 'IEEE Akdeniz',
                        content,
                        committeeId: b.committeeId,
                    };
                });
                setBlogs(mapped);
                setLoading(false);
            } catch (err) {
                console.error('Failed to load blogs or committees', err);
                setLoading(false);
            }
        };

        load();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const payload: AdminBlogInput = {
                title: currentBlog.title || '',
                content:
                    currentBlog.content ||
                    currentBlog.description ||
                    '',
                coverImageUrl: undefined, // File upload will handle this
                committeeId:
                    typeof currentBlog.committeeId === 'number'
                        ? currentBlog.committeeId
                        : committees[0]?.id ?? 1,
            };

            let blogId = currentBlog.id;

            if (currentBlog.id) {
                await adminUpdateBlog(currentBlog.id, payload);
            } else {
                const created = await adminCreateBlog(payload);
                blogId = created.id;
            }

            // Upload cover image if file is selected
            if (blogId && coverFile) {
                await adminUploadBlogCover(blogId, coverFile);
            }

            await fetchBlogs();
            setIsEditing(false);
            setCurrentBlog({});
            setCoverFile(null);
        } catch (error) {
            console.error('Failed to save blog', error);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Bu blog yazısını silmek istediğinize emin misiniz?')) return;

        try {
            await adminDeleteBlog(id);
            await fetchBlogs();
        } catch (error) {
            console.error('Failed to delete blog', error);
        }
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Blog Yönetimi</h1>
                <button
                    onClick={() => { setIsEditing(true); setCurrentBlog({}); setCoverFile(null); }}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                    Yeni Yazı Ekle
                </button>
            </div>

            {isEditing && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">{currentBlog.id ? 'Yazıyı Düzenle' : 'Yeni Yazı'}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Başlık</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 text-black"
                                    value={currentBlog.title || ''}
                                    onChange={e => setCurrentBlog({ ...currentBlog, title: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Komite</label>
                                    <select
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 text-black"
                                        value={
                                            currentBlog.committeeId ??
                                            committees[0]?.id ??
                                            ''
                                        }
                                        onChange={e =>
                                            setCurrentBlog({
                                                ...currentBlog,
                                                committeeId: Number(e.target.value),
                                            })
                                        }
                                    >
                                        {committees.map(c => (
                                            <option key={c.id} value={c.id}>
                                                {c.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Tarih</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Örn: 15 Mart 2024"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 text-black"
                                        value={currentBlog.date || ''}
                                        onChange={e => setCurrentBlog({ ...currentBlog, date: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Kısa Açıklama</label>
                                <textarea
                                    required
                                    rows={3}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 text-black"
                                    value={currentBlog.description || ''}
                                    onChange={e => setCurrentBlog({ ...currentBlog, description: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">İçerik (Markdown)</label>
                                <textarea
                                    required
                                    rows={10}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 text-black font-mono text-sm"
                                    value={currentBlog.content || ''}
                                    onChange={e => setCurrentBlog({ ...currentBlog, content: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Kapak Görseli</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="mt-1 block w-full text-sm text-gray-700"
                                    onChange={e => setCoverFile(e.target.files?.[0] || null)}
                                />
                                {currentBlog.image && !coverFile && (
                                    <p className="mt-2 text-xs text-gray-500">
                                        Mevcut görsel: <a href={currentBlog.image} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{currentBlog.image}</a>
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="isImportant"
                                    checked={currentBlog.isImportant || false}
                                    onChange={e => setCurrentBlog({ ...currentBlog, isImportant: e.target.checked })}
                                />
                                <label htmlFor="isImportant" className="text-sm font-medium text-gray-700">Önemli Yazı (Öne çıkar)</label>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => { setIsEditing(false); setCurrentBlog({}); setCoverFile(null); }}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                >
                                    İptal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                >
                                    Kaydet
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blog Yazısı</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Komite</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {blogs.map((blog) => (
                            <tr key={blog.id}>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full object-cover" src={blog.image} alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900 line-clamp-1">{blog.title}</div>
                                            <div className="text-sm text-gray-500 line-clamp-1">{blog.description}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {
                                            committees.find(
                                                c => c.id === blog.committeeId
                                            )?.name
                                        }
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {blog.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => { setCurrentBlog(blog); setCoverFile(null); setIsEditing(true); }}
                                        className="text-blue-600 hover:text-blue-900 mr-4"
                                    >
                                        Düzenle
                                    </button>
                                    <button
                                        onClick={() => handleDelete(blog.id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Sil
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
