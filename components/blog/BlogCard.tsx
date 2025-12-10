import React from 'react';

interface BlogCardProps {
    title: string;
    description: string;
    category: string;
    image: string;
    date: string;
    author?: string;
    className?: string;
    link?: string;
    isImportant?: boolean;
}

const BlogCard = ({ title, description, category, image, date, author, className = '', link = '/blog', isImportant = false }: BlogCardProps) => {
    return (
        <a href={link} className={`group flex flex-col md:flex-row items-stretch gap-4 md:gap-6 bg-card rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${className}`}>
            {/* Image Section */}
            <div className="relative flex-shrink-0 w-full md:w-72 h-48 md:h-auto overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image})` }}
                />
                {/* Important Badge */}
                {isImportant && (
                    <div className="absolute top-3 left-3 z-10">
                        <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold border-2 border-white/50 shadow-lg">
                            ⭐ ÖNEMLİ
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <span className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium border border-primary/20">
                            {category}
                        </span>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm">
                            <span>{date}</span>
                            {author && (
                                <>
                                    <span>•</span>
                                    <span>{author}</span>
                                </>
                            )}
                        </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                        <span>Devamını Oku</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default BlogCard;

