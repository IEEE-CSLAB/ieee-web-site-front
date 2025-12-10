"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import EventsHeader from './EventsHeader';
import EventsGrid from './EventsGrid';
import Footer from '@/components/Footer';

interface Event {
    id: number;
    title: string;
    description: string;
    tag: string;
    image: string;
    date: string;
    location: string;
    link: string;
    isImportant?: boolean;
}

interface EventsPageProps {
    events: Event[];
}

const EventsPage = ({ events }: EventsPageProps) => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Hardcoded events removed - passed as props


    const filteredEvents = selectedTag
        ? events.filter(event => event.tag === selectedTag)
        : events;

    const uniqueTags = Array.from(new Set(events.map(event => event.tag)));

    return (
        <div className="min-h-screen bg-white pb-12 pt-32 relative">
            {/* Ana Sayfaya Dön Butonu */}
            {/* Navbar */}
            <div className="fixed top-8 left-8 z-50">
                <Navbar />
            </div>

            {/* Mobile Home Button (Removed as Navbar is now responsive) */}
            <div className="fixed top-8 left-8 z-50 md:hidden">
                <a
                    href="/"
                    className="p-3 rounded-full text-gray-900 bg-white/90 backdrop-blur-md border border-gray-200 
                     hover:bg-gray-50 transition-all duration-300 shadow-sm flex items-center justify-center"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                </a>
            </div>

            {/* Content Box - Sağ ve soldan 32px boşluk, açık gri */}
            <div className="mx-8 bg-gray-100 rounded-2xl p-8 md:p-12">
                {/* Header */}
                <EventsHeader />

                {/* Intro Text */}
                <div className="mb-12">
                    <p className="body-lg text-muted-foreground max-w-3xl">
                        Yıl boyunca düzenlediğimiz konferanslar, workshoplar, hackathonlar ve networking etkinliklerine katılın.
                        Teknik becerilerinizi geliştirin ve sektör profesyonelleriyle tanışın.
                    </p>
                </div>

                {/* Filter Tags */}
                <div className="mb-8 flex flex-wrap gap-3">
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTag === null
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card text-foreground border border-border hover:bg-secondary'
                            }`}
                    >
                        Tümü
                    </button>
                    {uniqueTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-card text-foreground border border-border hover:bg-secondary'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <EventsGrid events={filteredEvents} />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default EventsPage;

