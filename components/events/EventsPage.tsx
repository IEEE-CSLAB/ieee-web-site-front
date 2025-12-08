"use client";

import React, { useState } from 'react';
import EventsHeader from './EventsHeader';
import EventsGrid from './EventsGrid';
import Footer from '@/components/Footer';

const EventsPage = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const events = [
        {
            id: 1,
            title: "Teknoloji Zirvesi 2024",
            description: "Sektörün öncü isimleriyle buluşun, en yeni teknolojileri keşfedin ve ağınızı genişletin.",
            tag: "Konferans",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "15 Mart 2024",
            location: "Akdeniz Üniversitesi",
            link: "/events"
        },
        {
            id: 2,
            title: "Yapay Zeka Hackathonu",
            description: "48 saat sürecek kodlama maratonunda yeteneklerinizi sergileyin ve ödüller kazanın.",
            tag: "Yarışma",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "22-24 Mart 2024",
            location: "Online",
            link: "/events"
        },
        {
            id: 3,
            title: "Kariyer Günleri",
            description: "Staj ve iş imkanları için şirketlerle birebir görüşme fırsatını kaçırmayın.",
            tag: "Kariyer",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "5 Nisan 2024",
            location: "Akdeniz Üniversitesi",
            link: "/events"
        },
        {
            id: 4,
            title: "Robotik Eğitim Serisi",
            description: "Temel seviyeden ileri seviyeye robotik kodlama ve tasarım eğitimleri.",
            tag: "Eğitim",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "10-12 Nisan 2024",
            location: "Akdeniz Üniversitesi",
            link: "/events"
        },
        {
            id: 5,
            title: "IEEE Günleri",
            description: "IEEE'nin tarihçesi, misyonu ve gelecek vizyonu hakkında kapsamlı bir etkinlik.",
            tag: "Konferans",
            image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "20 Nisan 2024",
            location: "Akdeniz Üniversitesi",
            link: "/events"
        },
        {
            id: 6,
            title: "Web Geliştirme Workshop",
            description: "Modern web teknolojileri ve framework'ler üzerine hands-on eğitim.",
            tag: "Eğitim",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "28 Nisan 2024",
            location: "Online",
            link: "/events"
        },
        {
            id: 7,
            title: "Startup Pitch Yarışması",
            description: "Girişimcilik fikirlerinizi sunun, yatırımcılarla buluşun ve ödüller kazanın.",
            tag: "Yarışma",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "8 Mayıs 2024",
            location: "Akdeniz Üniversitesi",
            link: "/events"
        },
        {
            id: 8,
            title: "Networking Etkinliği",
            description: "Sektör profesyonelleri ve öğrencilerle networking fırsatı.",
            tag: "Kariyer",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "15 Mayıs 2024",
            location: "Akdeniz Üniversitesi",
            link: "/events"
        }
    ];

    const filteredEvents = selectedTag 
        ? events.filter(event => event.tag === selectedTag)
        : events;

    const uniqueTags = Array.from(new Set(events.map(event => event.tag)));

    return (
        <div className="min-h-screen bg-white py-12 relative">
            {/* Ana Sayfaya Dön Butonu */}
            <div className="absolute top-8 left-8 z-20">
                <a
                    href="/"
                    className="px-6 py-2 rounded-full text-sm font-medium text-gray-900 
                     bg-white/90 backdrop-blur-md border border-gray-200 
                     hover:bg-gray-50 transition-all duration-300 shadow-sm flex items-center gap-2"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                    Ana Sayfa
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
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedTag === null
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
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedTag === tag
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

