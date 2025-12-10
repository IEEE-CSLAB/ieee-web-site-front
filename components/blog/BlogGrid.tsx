import React from 'react';
import BlogCard from './BlogCard';

interface Blog {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    date: string;
    author?: string;
    link?: string;
    className?: string;
    isImportant?: boolean;
}

interface BlogGridProps {
    blogs: Blog[];
}

const BlogGrid = ({ blogs }: BlogGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-6">
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    title={blog.title}
                    description={blog.description}
                    category={blog.category}
                    image={blog.image}
                    date={blog.date}
                    author={blog.author}
                    link={blog.link}
                    className={blog.className}
                    isImportant={blog.isImportant}
                />
            ))}
        </div>
    );
};

export default BlogGrid;

