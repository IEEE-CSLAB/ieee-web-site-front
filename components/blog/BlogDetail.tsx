import React from 'react';
import Link from 'next/link';

export interface BlogDetailViewModel {
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

interface BlogDetailProps {
    blog: BlogDetailViewModel;
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
    return (
        <article className="w-full max-w-4xl mx-auto">
            {/* Header Image */}
            <div className="relative w-full h-48 md:h-96 mb-6 md:mb-8 rounded-2xl overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${blog.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Important Badge */}
                {blog.isImportant && (
                    <div className="absolute top-6 left-6 z-10">
                        <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold border-2 border-white/50 shadow-lg">
                            ⭐ ÖNEMLİ
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="bg-card rounded-2xl p-4 md:p-12 border border-border">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-border">
                    <span className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium border border-primary/20">
                        {blog.category}
                    </span>
                    <div className="flex items-center gap-1 md:gap-2 text-muted-foreground text-xs md:text-sm">
                        <span>{blog.date}</span>
                        {blog.author && (
                            <>
                                <span>•</span>
                                <span>{blog.author}</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:heading-1 text-foreground mb-4 md:mb-6">
                    {blog.title}
                </h1>

                {/* Description */}
                <p className="text-sm md:body-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                    {blog.description}
                </p>

                {/* Content */}
                {blog.content && (
                    <div className="prose prose-lg max-w-none">
                        <div className="text-foreground leading-relaxed whitespace-pre-line">
                            {blog.content.split('\n\n').map((paragraph, index) => {
                                // Check if paragraph is a heading
                                if (paragraph.startsWith('## ')) {
                                    return (
                                        <h2 key={index} className="heading-2 text-foreground mt-8 mb-4">
                                            {paragraph.replace('## ', '')}
                                        </h2>
                                    );
                                }
                                if (paragraph.startsWith('### ')) {
                                    return (
                                        <h3 key={index} className="heading-3 text-foreground mt-6 mb-3">
                                            {paragraph.replace('### ', '')}
                                        </h3>
                                    );
                                }
                                // Check if paragraph is a list
                                if (paragraph.includes('- **')) {
                                    const lines = paragraph.split('\n');
                                    return (
                                        <ul key={index} className="list-disc list-inside space-y-2 my-4 text-foreground">
                                            {lines.map((line, lineIndex) => {
                                                const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
                                                if (match) {
                                                    return (
                                                        <li key={lineIndex} className="mb-2">
                                                            <strong className="text-foreground">{match[1]}</strong>: {match[2]}
                                                        </li>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </ul>
                                    );
                                }
                                // Regular paragraph
                                return (
                                    <p key={index} className="body-md text-foreground mb-6 leading-relaxed">
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Back to Blog Button */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-primary text-primary-foreground text-sm md:text-base font-medium hover:bg-primary-dark transition-colors"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>
                        Blog&apos;a Dön
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogDetail;
