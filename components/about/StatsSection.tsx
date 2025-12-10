"use client";

import React, { useEffect, useState } from 'react';

interface StatItem {
    value: number;
    label: string;
    image: string; // Background image for the card
}

const StatsSection = () => {
    const [counters, setCounters] = useState({
        members: 0,
        events: 0,
        committees: 0,
        projects: 0
    });

    const stats: StatItem[] = [
        {
            value: 500,
            label: 'Aktif Üye',
            image: '/industry.jpg'
        },
        {
            value: 50,
            label: 'Etkinlik',
            image: '/women-society.jpg'
        },
        {
            value: 10,
            label: 'Komite',
            image: '/sight.jpg'
        },
        {
            value: 100,
            label: 'Proje',
            image: '/powerenergy-society.jpg'
        }
    ];

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const animateCounter = (target: number, key: keyof typeof counters) => {
            let current = 0;
            const increment = target / steps;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setCounters(prev => ({ ...prev, [key]: target }));
                    clearInterval(timer);
                } else {
                    setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
                }
            }, interval);
        };

        // Start animations
        setTimeout(() => animateCounter(stats[0].value, 'members'), 100);
        setTimeout(() => animateCounter(stats[1].value, 'events'), 200);
        setTimeout(() => animateCounter(stats[2].value, 'committees'), 300);
        setTimeout(() => animateCounter(stats[3].value, 'projects'), 400);
    }, []);

    const displayValues = [
        counters.members,
        counters.events,
        counters.committees,
        counters.projects
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 about-animate-up about-delay-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        Sayılarla IEEE
                    </div>
                    <h2 className="heading-2 mb-4 text-foreground">
                        Büyüyen Topluluğumuz
                    </h2>
                    <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                        Başarılarımızın somut göstergeleri ve her geçen gün büyüyen ailemiz.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 about-animate-up"
                            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                        >
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${stat.image})` }}
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:via-black/60 transition-colors duration-500" />
                            
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                                    +{displayValues[index]}
                                </div>
                                <div className="text-sm md:text-base font-medium opacity-90 uppercase tracking-widest border-t border-white/30 pt-2 mt-2">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

