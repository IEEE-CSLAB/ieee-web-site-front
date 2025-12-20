import React from 'react';
import eventsData from '@/data/events.json';

interface Event {
    id: number;
    title: string;
    description: string;
    tag: string;
    image: string;
    date: string;
    location: string;
    link: string;
    isImportant: boolean;
}

const ImportantEventBox = () => {
    // Önemli etkinlikleri filtrele - Performans için useMemo kullanıyoruz
    const importantEvents = React.useMemo(() => {
        return (eventsData as Event[]).filter(event => event.isImportant);
    }, []);

    // Eğer önemli etkinlik yoksa hiçbir şey gösterme
    if (importantEvents.length === 0) {
        return null;
    }

    // İlk önemli etkinliği göster
    const event = importantEvents[0];

    return (
        <a
            href={event.link}
            className="hidden md:block absolute top-auto bottom-8 right-8 z-20 w-[calc(100%-2rem)] md:w-full max-w-[280px] md:max-w-xs bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden group hover:bg-black/50 transition-all duration-300 border border-white/10"
            style={{ bottom: '2rem', right: '2rem' }}
        >
            <div className="p-5">
                {/* Event Image - Resim tam sığacak şekilde */}
                <div
                    className="w-full h-32 rounded-2xl overflow-hidden mb-4 bg-transparent"
                    style={{
                        backgroundImage: `url(${event.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                {/* Event Info */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-colors">
                            {event.tag}
                        </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 tracking-tight">
                        {event.title}
                    </h3>

                    <p className="text-xs text-gray-300 mb-3 line-clamp-2 leading-relaxed font-light">
                        {event.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="line-clamp-1">{event.location}</span>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
                        <span>Detayları Gör</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ImportantEventBox;

