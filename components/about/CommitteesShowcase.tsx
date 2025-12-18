"use client";

import React from 'react';
import CommitteesGrid from '@/components/committees/CommitteesGrid';

interface Committee {
    name: string;
    description: string;
    members: number;
    projects: number;
    image: string;
    badge?: string;
    accentColor?: string;
}

interface CommitteesShowcaseProps {
    committees: Committee[];
}

const CommitteesShowcase = ({ committees }: CommitteesShowcaseProps) => {
    const handleCardClick = (committeeName: string) => {
        // Navigate to committees page
        window.location.href = '/committees';
    };

    return (
        <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 about-animate-up about-delay-0">
                    <div className="section-eyebrow mb-4">Yapımız</div>
                    <h2 className="heading-2 mb-4 text-foreground">
                        Komitelerimiz
                    </h2>
                    <p className="body-lg text-muted-foreground max-w-3xl">
                        Farklı teknik alanlarda uzmanlaşmış komitelerimiz ile çeşitli projeler geliştiriyor, 
                        etkinlikler düzenliyor ve öğrencilerimize deneyim kazandırıyoruz.
                    </p>
                </div>

                <div className="about-animate-up about-delay-1">
                    <CommitteesGrid committees={committees} onCardClick={handleCardClick} />
                </div>
            </div>
        </section>
    );
};

export default CommitteesShowcase;




