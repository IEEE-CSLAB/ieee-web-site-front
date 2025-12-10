import { notFound } from 'next/navigation';
import BlogDetail from '@/components/blog/BlogDetail';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import fs from 'fs/promises';
import path from 'path';

async function getBlogById(id: number) {
    try {
        const filePath = path.join(process.cwd(), 'data', 'blogs.json');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const blogs = JSON.parse(fileContent);
        return blogs.find((blog: any) => blog.id === id);
    } catch (error) {
        return undefined;
    }
}

interface BlogDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { id } = await params;
    const blogId = parseInt(id);
    const blog = await getBlogById(blogId);

    if (!blog) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white pb-12 pt-32 relative">
            {/* Ana Sayfaya Dön Butonu */}
            {/* Navbar */}
            <div className="fixed top-8 left-8 z-50">
                <Navbar />
            </div>

            {/* Mobile Home Button (Removed as Navbar is now responsive) */}
            <div className="fixed top-8 left-8 z-50 md:hidden">
                <a
                    href="/"
                    className="p-3 rounded-full text-gray-900 bg-white/90 backdrop-blur-md border border-gray-200 
                     hover:bg-gray-50 transition-all duration-300 shadow-sm flex items-center justify-center"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                </a>
            </div>

            {/* Content Box */}
            <div className="mx-8 bg-gray-100 rounded-2xl p-8 md:p-12">
                <BlogDetail blog={blog} />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
