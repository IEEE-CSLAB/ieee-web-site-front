import React from 'react';
import Link from 'next/link';

const EventsHeader = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-600 border border-gray-200">
                    Etkinlikler
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                    Etkinliklerimizi Keşfedin
                </h2>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                    <input
                        type="text"
                        placeholder="Arama yapın..."
                        className="w-full pl-6 pr-12 py-3 rounded-full bg-white border border-gray-100 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </button>
                </div>

                <Link href="/events" className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                    Tümünü Gör
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default EventsHeader;
