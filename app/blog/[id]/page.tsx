import { notFound } from 'next/navigation';
import NavbarWrapper from '@/components/NavbarWrapper';
import BlogDetail from '@/components/blog/BlogDetail';
import Footer from '@/components/Footer';
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
        <div className="min-h-screen bg-white pb-12 pt-24 md:pt-32 relative">
            <NavbarWrapper />

            {/* Content Box */}
            <div className="mx-4 md:mx-auto md:max-w-7xl bg-gray-100 rounded-2xl p-4 md:p-12">
                <BlogDetail blog={blog} />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
