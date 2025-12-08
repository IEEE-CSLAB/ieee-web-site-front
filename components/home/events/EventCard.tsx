import React from 'react';

interface EventCardProps {
    title: string;
    description: string;
    tag: string;
    image: string;
    className?: string;
    link?: string;
}

const EventCard = ({ title, description, tag, image, className = '', link = '/events' }: EventCardProps) => {
    return (
        <a href={link} className={`group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer block ${className}`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-end">
                    <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/30">
                        {tag}
                    </span>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-semibold text-white mb-2 leading-tight">
                        {title}
                    </h3>
                    <p className="text-white/80 text-lg line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {description}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="h-1 w-12 bg-white/50 rounded-full group-hover:w-full transition-all duration-500" />
                        <button className="bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default EventCard;
