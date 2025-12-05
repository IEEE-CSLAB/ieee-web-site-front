
import React from 'react';

const JoinCard = () => {
    return (
        <div className="aspect-square w-full rounded-[2rem] bg-black p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

            {/* Top Right Icons */}
            <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-8 max-w-[200px]">
                IEEE Antalya ailesine katılın.
            </h3>

            <button className="flex items-center gap-2 text-white border border-white/30 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 group-hover:border-white">
                Bize Ulaşın
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                </svg>
            </button>
        </div>
    );
};

export default JoinCard;
