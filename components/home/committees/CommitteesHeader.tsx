import React from 'react';

const CommitteesHeader = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight text-center flex-1">
                Yönetim Kurulumuz ve Komitelerimiz
            </h2>

            <div className="flex items-center gap-4">
                <a href="#" className="flex items-center gap-2 text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors border-b border-black pb-0.5">
                    Daha Fazla
                    <span className="bg-black text-white rounded-full p-1 w-6 h-6 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default CommitteesHeader;
