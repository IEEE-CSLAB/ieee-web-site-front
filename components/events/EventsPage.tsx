"use client";

import React, { useState } from 'react';
import NavbarWrapper from '@/components/NavbarWrapper';
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

    // Helper function to parse Turkish date format
    const parseTurkishDate = (dateStr: string): Date => {
        const months: { [key: string]: number } = {
            'Ocak': 0, 'Şubat': 1, 'Mart': 2, 'Nisan': 3, 'Mayıs': 4, 'Haziran': 5,
            'Temmuz': 6, 'Ağustos': 7, 'Eylül': 8, 'Ekim': 9, 'Kasım': 10, 'Aralık': 11
        };
        
        // Handle date ranges like "22-24 Mart 2024"
        const datePart = dateStr.split(' ')[0];
        const day = parseInt(datePart.split('-')[0]);
        const monthName = dateStr.split(' ').find(part => months.hasOwnProperty(part)) || 'Ocak';
        const month = months[monthName] ?? 0;
        const year = parseInt(dateStr.split(' ').find(part => /^\d{4}$/.test(part)) || '2024');
        return new Date(year, month, day);
    };

    // Sort events by date (newest first)
    const sortedEvents = [...events].sort((a, b) => {
        const dateA = parseTurkishDate(a.date);
        const dateB = parseTurkishDate(b.date);
        return dateB.getTime() - dateA.getTime(); // Newest first
    });

    const filteredEvents = selectedTag
        ? sortedEvents.filter(event => event.tag === selectedTag)
        : sortedEvents;

    const uniqueTags = Array.from(new Set(events.map(event => event.tag)));

    return (
        <div className="min-h-screen bg-white pb-12 pt-32 relative">
            <NavbarWrapper />

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

