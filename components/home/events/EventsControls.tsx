import React from 'react';
import Link from 'next/link';

const EventsControls = () => {
    return (
        <div className="flex items-center justify-between mt-12">
            <div className="flex gap-4">
                <Link href="/events" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                </Link>
                <Link href="/events" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <Link href="/events" className="text-gray-500 text-sm max-w-md text-right hidden md:block hover:text-gray-900 transition-colors">
                Yaklaşan workshop, seminer ve etkinliklerimiz için yerinizi ayırtın.
            </Link>
        </div>
    );
};

export default EventsControls;
