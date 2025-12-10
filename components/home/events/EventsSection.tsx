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
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "15 Mart 2024",
            className: "md:col-span-1",
            link: "/events"
        },
        {
            title: "Yapay Zeka Hackathonu",
            description: "48 saat sürecek kodlama maratonunda yeteneklerinizi sergileyin ve ödüller kazanın.",
            tag: "Yarışma",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "22-24 Mart 2024",
            className: "md:col-span-1",
            link: "/events"
        },
        {
            title: "Kariyer Günleri",
            description: "Staj ve iş imkanları için şirketlerle birebir görüşme fırsatını kaçırmayın.",
            tag: "Kariyer",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "5 Nisan 2024",
            className: "md:col-span-1",
            link: "/events"
        },
        {
            title: "Robotik Eğitim Serisi",
            description: "Temel seviyeden ileri seviyeye robotik kodlama ve tasarım eğitimleri.",
            tag: "Eğitim",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            date: "10-12 Nisan 2024",
            className: "md:col-span-1",
            link: "/events"
        }
    ];

    return (
        <section className="w-full bg-white py-20 px-4 md:px-8">
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
