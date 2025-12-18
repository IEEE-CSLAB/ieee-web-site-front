"use client";

import React, { useState } from 'react';

import Link from 'next/link';

interface EventCardProps {
    title: string;
    description?: string;
    tag?: string;
    image?: string;
    date?: string;
    location?: string;
    className?: string;
    link?: string;
}

const EventCard = ({ title, description, tag, image, date, location, className = '', link = '/events' }: EventCardProps) => {
    const [imageError, setImageError] = useState(false);

    return (
        <Link href={link} className={`group flex flex-col rounded-[2rem] overflow-hidden cursor-pointer bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[450px] ${className}`}>
            {/* Image Section - Top */}
            <div className="relative h-[240px] overflow-hidden bg-[#e2e8f0]">
                {image && !imageError && (
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImageError(true)}
                    />
                )}

                {/* Tag - Top Right */}
                {tag && (
                    <div className="absolute top-4 right-4 z-10">
                        <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-sm font-medium border border-white/50 shadow-sm">
                            {tag}
                        </span>
                    </div>
                )}
            </div>

            {/* Text Content Section - Bottom (Fixed) */}
            <div className="flex-1 bg-white p-6 flex flex-col border-t border-gray-100">
                {(date || location) && (
                    <div className="flex flex-col gap-1 mb-3 text-gray-600 text-sm">
                        {date && (
                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <span>{date}</span>
                            </div>
                        )}
                        {location && (
                            <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0 1 18 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>{location}</span>
                            </div>
                        )}
                    </div>
                )}

                <h3 className="text-2xl font-semibold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 text-base line-clamp-2 mb-4 flex-1">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="h-1 w-12 bg-gray-200 rounded-full group-hover:w-full group-hover:bg-blue-600 transition-all duration-500" />
                    <button className="bg-gray-900 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 hover:bg-black">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;
