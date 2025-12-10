"use client";

import React, { useState } from 'react';

interface NavbarProps {
    variant?: 'light' | 'dark' | 'transparent';
    className?: string;
}

const Navbar = ({ className = '' }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Hakkımızda', link: '/about' },
        { label: 'Komiteler', link: '/committees' },
        { label: 'Etkinlikler', link: '/events' },
        { label: 'Blog', link: '/blog' }
    ];

    return (
        <div className={`relative ${className}`}>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center gap-1 p-1 pl-2 bg-[#1C1C1C] rounded-full border border-white/5 shadow-2xl max-w-full">
                {/* Logo / Icon */}
                <a href="/" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                </a>

                {/* Links */}
                <div className="flex items-center px-2 gap-1 overflow-hidden">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.link}
                            className="px-2 md:px-3 lg:px-4 py-2 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Right Button (Contact) */}
                <a
                    href="/contact"
                    className="px-3 md:px-4 lg:px-5 py-2 md:py-2.5 bg-white text-black text-xs md:text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap flex-shrink-0"
                >
                    İletişim
                </a>
            </nav>

            {/* Mobile Navbar Button */}
            <div className="md:hidden">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-3 bg-[#1C1C1C] rounded-full text-white border border-white/5 shadow-2xl"
                >
                    {isMenuOpen ? (
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                             <line x1="18" y1="6" x2="6" y2="18"></line>
                             <line x1="6" y1="6" x2="18" y2="18"></line>
                         </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/20 z-40 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="absolute top-14 left-0 w-56 max-w-[calc(100vw-4rem)] bg-[#1C1C1C] rounded-2xl border border-white/5 shadow-2xl overflow-hidden md:hidden flex flex-col p-2 z-50">
                         <a 
                            href="/" 
                            className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Ana Sayfa
                        </a>
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.link}
                                className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="/contact"
                            className="mt-2 px-4 py-3 text-sm font-bold text-black bg-white hover:bg-gray-200 rounded-xl transition-colors text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            İletişim
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
