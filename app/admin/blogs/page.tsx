"use client";

import React, { useState, useEffect } from 'react';

interface Blog {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    date: string;
    author?: string;
    isImportant?: boolean;
    content?: string;
}

export default function AdminBlogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentBlog, setCurrentBlog] = useState<Partial<Blog>>({});

    const fetchBlogs = async () => {
        try {
            const res = await fetch('/api/blogs');
            const data = await res.json();
            setBlogs(data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch blogs', error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let updatedBlogs;
        if (currentBlog.id) {
            // Update existing
            updatedBlogs = blogs.map(b => b.id === currentBlog.id ? { ...b, ...currentBlog } as Blog : b);
        } else {
            // Add new
            const newId = Math.max(...blogs.map(b => b.id), 0) + 1;
            updatedBlogs = [...blogs, { ...currentBlog, id: newId, author: "IEEE Akdeniz" } as Blog];
        }

        try {
            await fetch('/api/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedBlogs)
            });
            setBlogs(updatedBlogs);
            setIsEditing(false);
            setCurrentBlog({});
        } catch (error) {
            console.error('Failed to save blog', error);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Bu blog yazısını silmek istediğinize emin misiniz?')) return;

        const updatedBlogs = blogs.filter(b => b.id !== id);
        try {
            await fetch('/api/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedBlogs)
            });
            setBlogs(updatedBlogs);
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
                    onClick={() => { setIsEditing(true); setCurrentBlog({}); }}
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
                                    <label className="block text-sm font-medium text-gray-700">Kategori</label>
                                    <select
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 text-black"
                                        value={currentBlog.category || 'Teknoloji'}
                                        onChange={e => setCurrentBlog({ ...currentBlog, category: e.target.value })}
                                    >
                                        <option>Teknoloji</option>
                                        <option>Mühendislik</option>
                                        <option>Kariyer</option>
                                        <option>Etkinlik</option>
                                        <option>Girişimcilik</option>
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
                                <label className="block text-sm font-medium text-gray-700">Resim URL</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 border p-2 text-black"
                                    value={currentBlog.image || ''}
                                    onChange={e => setCurrentBlog({ ...currentBlog, image: e.target.value })}
                                />
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
                                    onClick={() => setIsEditing(false)}
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
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
                                        {blog.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {blog.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => { setCurrentBlog(blog); setIsEditing(true); }}
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
