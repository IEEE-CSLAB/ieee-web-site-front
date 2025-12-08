import React from 'react';

const HeroHeading = () => {
    return (
        <div className="absolute bottom-16 left-8 z-20 max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6 drop-shadow-lg">
                Teknolojiyi Keşfet, Geleceği Şekillendir
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg drop-shadow-md">
                IEEE Antalya ile inovasyonun kalbinde yer al, kariyerine yön ver ve global bir ağın parçası ol.
            </p>

            <div className="flex items-center gap-4">
                <a href="/committees" className="group flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition-all duration-300">
                    Bize Katılın
                    <span className="bg-white text-black rounded-full p-1 w-6 h-6 flex items-center justify-center group-hover:translate-x-1 transition-transform">
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

export default HeroHeading;
