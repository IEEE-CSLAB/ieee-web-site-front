"use client";

import React, { useRef, useState, useEffect } from 'react';
import CommitteeCard from './CommitteeCard';

interface Committee {
    name: string;
    description: string;
    members: number;
    projects: number;
    image: string;
    badge?: string;
    accentColor?: string;
}

interface CommitteesGridProps {
    committees: Committee[];
    onCardClick?: (committeeName: string) => void;
}

const CommitteesGrid: React.FC<CommitteesGridProps> = ({ committees, onCardClick }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollability = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScrollability();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollability);
            window.addEventListener('resize', checkScrollability);
            return () => {
                container.removeEventListener('scroll', checkScrollability);
                window.removeEventListener('resize', checkScrollability);
            };
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
            const scrollTo = direction === 'left' 
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;
            
            scrollContainerRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
            
            // Check scrollability after scroll animation completes
            setTimeout(() => {
                checkScrollability();
            }, 500);
        }
    };

    return (
        <div className="w-full">
            {/* Scrollable Grid Container */}
            <div className="relative">
                {/* Navigation Buttons - Left (inside container, not overlapping images) */}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary text-white hover:bg-primary-dark flex items-center justify-center transition-colors shadow-lg"
                        aria-label="Önceki"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                )}

                {/* Scrollable Grid */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth pl-4 pr-24"
                >
                    {committees.map((committee, index) => (
                        <div key={committee.name} className="flex-shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                            <CommitteeCard {...committee} onMoreClick={() => onCardClick?.(committee.name)} />
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons - Right (inside container, not overlapping images) */}
                {canScrollRight && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary text-white hover:bg-primary-dark flex items-center justify-center transition-colors shadow-lg"
                        aria-label="Sonraki"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default CommitteesGrid;

