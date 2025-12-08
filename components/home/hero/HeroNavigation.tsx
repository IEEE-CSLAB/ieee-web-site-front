import React from 'react';

const HeroNavigation = () => {
    const navItems = [
        { label: 'Hakkımızda', link: '/about' },
        { label: 'İletişim', link: '/contact' },
        { label: 'Komiteler', link: '/committees' },
        { label: 'Etkinlikler', link: '/events' },
        { label: 'Blog', link: '/blog' }
    ];

    return (
        <nav className="absolute top-8 left-8 z-20 hidden md:flex gap-4">
            {navItems.map((item) => (
                <a
                    key={item.label}
                    href={item.link}
                    className="px-6 py-2 rounded-full text-sm font-medium text-white 
                     bg-white/10 backdrop-blur-md border border-white/20 
                     hover:bg-white/20 transition-all duration-300 shadow-sm"
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
};

export default HeroNavigation;
