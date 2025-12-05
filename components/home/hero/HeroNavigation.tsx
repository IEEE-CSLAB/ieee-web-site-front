import React from 'react';

const HeroNavigation = () => {
    const navItems = ['Hakkımızda', 'İletişim', 'Komiteler', 'Etkinlikler'];

    return (
        <nav className="absolute top-8 left-8 z-20 hidden md:flex gap-4">
            {navItems.map((item) => (
                <button
                    key={item}
                    className="px-6 py-2 rounded-full text-sm font-medium text-white 
                     bg-white/10 backdrop-blur-md border border-white/20 
                     hover:bg-white/20 transition-all duration-300 shadow-sm"
                >
                    {item}
                </button>
            ))}
        </nav>
    );
};

export default HeroNavigation;
