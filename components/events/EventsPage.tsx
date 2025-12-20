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
    committeeId?: number;
}

interface EventsPageProps {
    events: Event[];
    committees: { id: number; name: string }[];
}

const EventsPage = ({ events, committees }: EventsPageProps) => {
    const [selectedCommitteeId, setSelectedCommitteeId] = useState<number | null>(null);

    const committeeMap = new Map<number, string>(
        committees.map(c => [c.id, c.name])
    );

    // Normalize events with proper image URL (from backend coverImageUrl if available)
    const normalizedEvents = events.map((event) => {
        const rawImage =
            (event.coverImageUrl as string | undefined) ||
            (event.image as string | undefined) ||
            undefined;

        let image: string | undefined;
        if (!rawImage) {
            image = undefined;
        } else if (rawImage.startsWith('http')) {
            // Already a full URL
            image = rawImage;
        } else if (rawImage.startsWith('/http')) {
            // Remove leading slash from full URL (e.g., "/https://...")
            image = rawImage.substring(1);
        } else {
            // Relative path, prepend API_URL
            image = `${API_URL}${rawImage}`;
        }

        const startDate = event.startDate ? new Date(event.startDate) : null;
        const date = startDate
            ? startDate.toLocaleDateString('tr-TR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            })
            : event.date;

        const committeesArr = Array.isArray((event as any).committees)
            ? ((event as any).committees as any[])
            : [];
        const committeeId = committeesArr.length > 0 ? committeesArr[0].id as number : undefined;
        const committeeName = committeeId
            ? committeeMap.get(committeeId) ?? 'Etkinlik'
            : 'Etkinlik';

        const tag = committeeName;

        const location = event.location ?? undefined;
        const description = (event.description as string | null) ?? '';

        return {
            ...event,
            image,
            date,
            tag,
            location,
            description,
            link: `/events/${event.id}`,
            committeeId,
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

    const filteredEvents = selectedCommitteeId
        ? sortedEvents.filter(event => event.committeeId === selectedCommitteeId)
        : sortedEvents;

    const uniqueCommittees = committees.filter(c =>
        normalizedEvents.some(e => e.committeeId === c.id)
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

                {/* Filter by committee */}
                <div className="mb-8 flex flex-wrap gap-3">
                    <button
                        onClick={() => setSelectedCommitteeId(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCommitteeId === null
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card text-foreground border border-border hover:bg-secondary'
                            }`}
                    >
                        Tümü
                    </button>
                    {uniqueCommittees.map((committee) => (
                        <button
                            key={committee.id}
                            onClick={() => setSelectedCommitteeId(committee.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCommitteeId === committee.id
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-card text-foreground border border-border hover:bg-secondary'
                                }`}
                        >
                            {committee.name}
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

