import React from 'react';

const EventsHeader = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-muted-foreground border border-border">
                    Etkinlikler
                </span>
                <h2 className="heading-2 text-foreground">
                    Etkinliklerimizi Keşfedin
                </h2>
            </div>

            <div className="flex items-center justify-end w-full md:w-auto ml-auto">
                <div className="relative w-full md:w-80">
                    <input
                        type="text"
                        placeholder="Arama yapın..."
                        className="w-full pl-6 pr-12 py-3 rounded-full bg-card shadow-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 border border-border"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-secondary rounded-full text-muted-foreground hover:bg-accent transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventsHeader;

