"use client";

import React, { useState } from 'react';
import BlogHeader from './BlogHeader';
import BlogGrid from './BlogGrid';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 8;

    // Add link to each blog
    const blogsWithLinks = blogs.map(blog => ({
        ...blog,
        link: `/blog/${blog.id}`
    }));

    const filteredBlogs = selectedCategory 
        ? blogsWithLinks.filter(blog => blog.category === selectedCategory)
        : blogsWithLinks;

    const uniqueCategories = Array.from(new Set(blogsWithLinks.map(blog => blog.category)));

    // Pagination logic
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

    // Reset to page 1 when category changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-white py-12 relative">
            {/* Ana Sayfaya Dön Butonu */}
            <div className="absolute top-8 left-8 z-20">
                <a
                    href="/"
                    className="px-6 py-2 rounded-full text-sm font-medium text-gray-900 
                     bg-white/90 backdrop-blur-md border border-gray-200 
                     hover:bg-gray-50 transition-all duration-300 shadow-sm flex items-center gap-2"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                    Ana Sayfa
                </a>
            </div>

            {/* Content Box - Sağ ve soldan 32px boşluk, açık gri */}
            <div className="mx-8 bg-gray-100 rounded-2xl p-8 md:p-12">
                {/* Header */}
                <BlogHeader />

                {/* Intro Text */}
                <div className="mb-12">
                    <p className="body-lg text-muted-foreground max-w-3xl">
                        Teknoloji, mühendislik, kariyer ve IEEE dünyasından en güncel yazılar, haberler ve içgörüler. 
                        Bilgi paylaşımı ve öğrenme topluluğumuzun bir parçası olun.
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="mb-8 flex flex-wrap gap-3">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedCategory === null
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-card text-foreground border border-border hover:bg-secondary'
                        }`}
                    >
                        Tümü
                    </button>
                    {uniqueCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategory === category
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-card text-foreground border border-border hover:bg-secondary'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <BlogGrid blogs={currentBlogs} />

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-lg bg-card text-foreground border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    currentPage === page
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-card text-foreground border border-border hover:bg-secondary'
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-lg bg-card text-foreground border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default BlogPage;

