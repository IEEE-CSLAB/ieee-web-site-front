import React from 'react';
import { getLatestBlogs } from '@/data/blogs';
import BlogCard from '@/components/blog/BlogCard';

const BlogSection = () => {
    const blogs = getLatestBlogs().slice(0, 4); // En son 4 blog yazısını al

    return (
        <section className="w-full bg-white py-20 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                            Blog
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                            Son Yazılarımız
                        </h2>
                    </div>
                    <a
                        href="/blog"
                        className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                        Tümünü Gör
                    </a>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            title={blog.title}
                            description={blog.description}
                            category={blog.category}
                            image={blog.image}
                            date={blog.date}
                            author={blog.author}
                            link={`/blog/${blog.id}`}
                            isImportant={blog.isImportant}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
