"use client";

import React, { useState } from 'react';
import NavbarWrapper from '@/components/NavbarWrapper';
import BlogHeader from './BlogHeader';
import BlogGrid from './BlogGrid';
import Footer from '@/components/Footer';

interface Blog {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    date: string;
    author?: string;
    link?: string;
    isImportant?: boolean;
    content?: string;
}

interface BlogPageProps {
    blogs: Blog[];
}

const BlogPage = ({ blogs }: BlogPageProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 8;

    // Helper function to parse Turkish date format
    const parseTurkishDate = (dateStr: string): Date => {
        const months: { [key: string]: number } = {
            'Ocak': 0, 'Şubat': 1, 'Mart': 2, 'Nisan': 3, 'Mayıs': 4, 'Haziran': 5,
            'Temmuz': 6, 'Ağustos': 7, 'Eylül': 8, 'Ekim': 9, 'Kasım': 10, 'Aralık': 11
        };
        
        const parts = dateStr.split(' ');
        if (parts.length >= 3) {
            const day = parseInt(parts[0]);
            const month = months[parts[1]] ?? 0;
            const year = parseInt(parts[2]);
            return new Date(year, month, day);
        }
        return new Date(0);
    };

    // Add link to each blog and sort by date (newest first)
    const blogsWithLinks = blogs
        .map(blog => ({
            ...blog,
            link: `/blog/${blog.id}`
        }))
        .sort((a, b) => {
            const dateA = parseTurkishDate(a.date);
            const dateB = parseTurkishDate(b.date);
            return dateB.getTime() - dateA.getTime(); // Newest first
        });

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
        <div className="min-h-screen bg-white pb-12 pt-24 md:pt-32 relative">
            <NavbarWrapper />

            {/* Content Box - Sağ ve soldan 32px boşluk, açık gri */}
            <div className="mx-4 md:mx-auto md:max-w-7xl bg-gray-100 rounded-2xl p-4 md:p-12">
                {/* Header */}
                <BlogHeader />

                {/* Intro Text */}
                <div className="mb-8 md:mb-12">
                    <p className="text-sm md:body-lg text-muted-foreground max-w-3xl">
                        Teknoloji, mühendislik, kariyer ve IEEE dünyasından en güncel yazılar, haberler ve içgörüler.
                        Bilgi paylaşımı ve öğrenme topluluğumuzun bir parçası olun.
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="mb-6 md:mb-8 flex flex-wrap gap-2 md:gap-3">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${selectedCategory === null
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
                            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${selectedCategory === category
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
                    <div className="mt-8 md:mt-12 flex items-center justify-center gap-1 md:gap-2 flex-wrap">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-card text-foreground border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${currentPage === page
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
                            className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-card text-foreground border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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

