import React from 'react';

const HeroLogo = () => {
    return (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-white px-8 pt-4 pb-6 rounded-b-[2rem] shadow-lg">
            <div className="flex flex-col items-center">
                {/* IEEE Logo Placeholder - Replace with actual SVG/Image */}
                <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center mb-1">
                    <span className="font-bold text-xl">I</span>
                </div>
                <span className="font-bold text-black text-sm tracking-wide">IEEE Antalya</span>
            </div>
        </div>
    );
};

export default HeroLogo;
