"use client";

import React, { useState } from 'react';
import NavbarWrapper from '@/components/NavbarWrapper';
import EventsHeader from './EventsHeader';
import EventsGrid from './EventsGrid';
import Footer from '@/components/Footer';
import { API_URL } from '@/lib/api';

interface Event {
    id: number;
    title: string;
    description?: string | null;
    tag?: string;
    image?: string | null;
    date?: string;
    location?: string | null;
    link?: string;
    isImportant?: boolean;

    // Fields coming from backend DTO
    startDate?: string;
    endDate?: string;
    coverImageUrl?: string;
}

interface EventsPageProps {
    events: Event[];
}

const EventsPage = ({ events }: EventsPageProps) => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Normalize events with proper image URL (from backend coverImageUrl if available)
    const normalizedEvents = events.map((event) => {
        const rawImage =
            (event.coverImageUrl as string | undefined) ||
            (event.image as string | undefined) ||
            undefined;

        const image =
            rawImage && rawImage.startsWith('http')
                ? rawImage
                : rawImage
                ? `${API_URL}${rawImage}`
                : undefined;

        const startDate = event.startDate ? new Date(event.startDate) : null;
        const date = startDate
            ? startDate.toLocaleDateString('tr-TR', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
              })
            : event.date;

        const tag =
            event.isImportant
                ? 'Önemli'
                : event.tag ||
                  (Array.isArray((event as any).committees) &&
                      (event as any).committees[0]?.name) ||
                  'Etkinlik';

        const location = event.location ?? undefined;
        const description = (event.description as string | null) ?? '';

        return {
            ...event,
            image,
            date,
            tag,
            location,
            description,
        };
    });

    // Helper function to get a usable Date for sorting
    const getEventDate = (event: Event): Date => {
        // Prefer backend StartDate if available (ISO string)
        if (event.startDate) {
            const d = new Date(event.startDate);
            if (!isNaN(d.getTime())) return d;
        }

        const dateStr = event.date;
        if (!dateStr) {
            // Fallback far in the past if no date info
            return new Date(0);
        }

        // Parse Turkish date format from legacy JSON data
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
    const sortedEvents = [...normalizedEvents].sort((a, b) => {
        const dateA = getEventDate(a);
        const dateB = getEventDate(b);
        return dateB.getTime() - dateA.getTime(); // Newest first
    });

    const filteredEvents = selectedTag
        ? sortedEvents.filter(event => event.tag === selectedTag)
        : sortedEvents;

    const uniqueTags = Array.from(
        new Set(normalizedEvents.map(event => event.tag).filter(Boolean) as string[])
    );

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

