import React from 'react';
import Link from 'next/link';
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
    content?: string; // Potential full content field
}

interface EventDetailProps {
    event: Event;
}

const EventDetail = ({ event }: EventDetailProps) => {
    // Normalization logic similar to EventsPage
    const rawImage =
        (event.coverImageUrl as string | undefined) ||
        (event.image as string | undefined) ||
        undefined;

    const imageUrl =
        rawImage && rawImage.startsWith('http')
            ? rawImage
            : rawImage
                ? `${API_URL}${rawImage}`
                : undefined;

    const startDate = event.startDate ? new Date(event.startDate) : null;
    const formattedDate = startDate
        ? startDate.toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            weekday: 'long',
            hour: '2-digit',
            minute: '2-digit',
        })
        : event.date;

    const location = event.location ?? 'Konum Belirtilmemiş';
    const description = event.description ?? '';
    const content = event.content || description; // Fallback to description if no separate content

    return (
        <article className="w-full max-w-4xl mx-auto">
            {/* Header Image */}
            {imageUrl && (
                <div className="relative w-full h-48 md:h-96 mb-6 md:mb-8 rounded-2xl overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Important Badge */}
                    {event.isImportant && (
                        <div className="absolute top-6 left-6 z-10">
                            <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold border-2 border-white/50 shadow-lg">
                                ⭐ ÖNEMLİ
                            </span>
                        </div>
                    )}
                </div>
            )}

            {/* Content */}
            <div className="bg-card rounded-2xl p-4 md:p-12 border border-border">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-border">
                    {event.tag && (
                        <span className="px-3 md:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium border border-primary/20">
                            {event.tag}
                        </span>
                    )}

                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                        {formattedDate && (
                            <div className="flex items-center gap-1.5">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <span>{formattedDate}</span>
                            </div>
                        )}

                        {location && (
                            <div className="flex items-center gap-1.5">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>{location}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:heading-1 text-foreground mb-6">
                    {event.title}
                </h1>

                {/* Description / Content */}
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                    <div className="text-foreground leading-relaxed whitespace-pre-line">
                        {/* reuse simple splitting logic from BlogDetail if content is markdown-like */}
                        {content.split('\n\n').map((paragraph, index) => {
                            if (paragraph.startsWith('## ')) {
                                return <h2 key={index} className="heading-2 text-foreground mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                            }
                            if (paragraph.startsWith('### ')) {
                                return <h3 key={index} className="heading-3 text-foreground mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                            }
                            return <p key={index} className="body-md text-foreground mb-6 leading-relaxed">{paragraph}</p>;
                        })}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-border">
                    <Link
                        href="/events"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background hover:bg-secondary text-foreground transition-colors"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>
                        Tüm Etkinlikler
                    </Link>

                    {event.link && (
                        <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors ml-auto"
                        >
                            Etkinliğe Kayıt Ol / Detaylı Bilgi
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default EventDetail;
