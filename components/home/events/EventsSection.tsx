import React from 'react';
import EventsHeader from './EventsHeader';
import EventCard from './EventCard';
import EventsControls from './EventsControls';

const EventsSection = () => {
    const events = [
        {
            title: "Teknoloji Zirvesi 2024",
            description: "Sektörün öncü isimleriyle buluşun, en yeni teknolojileri keşfedin ve ağınızı genişletin.",
            tag: "Konferans",
            image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            className: "md:col-span-1"
        },
        {
            title: "Yapay Zeka Hackathonu",
            description: "48 saat sürecek kodlama maratonunda yeteneklerinizi sergileyin ve ödüller kazanın.",
            tag: "Yarışma",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25d46f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            className: "md:col-span-1"
        },
        {
            title: "Kariyer Günleri",
            description: "Staj ve iş imkanları için şirketlerle birebir görüşme fırsatını kaçırmayın.",
            tag: "Kariyer",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            className: "md:col-span-1"
        },
        {
            title: "Robotik Eğitim Serisi",
            description: "Temel seviyeden ileri seviyeye robotik kodlama ve tasarım eğitimleri.",
            tag: "Eğitim",
            image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            className: "md:col-span-1"
        }
    ];

    return (
        <section className="w-full bg-gray-50 py-20 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
                <EventsHeader />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            {...event}
                        />
                    ))}
                </div>

                <EventsControls />
            </div>
        </section>
    );
};

export default EventsSection;
