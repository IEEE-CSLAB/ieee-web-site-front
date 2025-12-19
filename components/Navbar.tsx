"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavbarProps {
    variant?: 'light' | 'dark' | 'transparent';
    className?: string;
}

const Navbar = ({ className = '' }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: 'Hakkımızda', link: '/about' },
        { label: 'Komiteler', link: '/committees' },
        { label: 'Etkinlikler', link: '/events' },
        { label: 'Blog', link: '/blog' }
    ];

    return (
        <div className={`relative ${className}`}>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center gap-1.5 p-1.5 pl-2 bg-white rounded-full border border-black/5 shadow-2xl max-w-full">
                {/* Logo / Icon */}
                <Link href="/" className="flex items-center justify-center w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 transition-colors text-black flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                </Link>

                {/* Links */}
                <div className="flex items-center px-2 gap-1.5 overflow-hidden">
                    {navItems.map((item) => {
                        const isActive = pathname === item.link || (item.link !== '/' && pathname?.startsWith(item.link));
                        return (
                            <Link
                                key={item.label}
                                href={item.link}
                                className={`px-3 md:px-4 lg:px-4 py-2 md:py-2.5 text-xs md:text-sm font-medium rounded-full transition-colors whitespace-nowrap ${isActive
                                        ? 'bg-black text-white'
                                        : 'text-gray-700 hover:text-black'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Button (Contact) */}
                <Link
                    href="/contact"
                    className={`px-4 md:px-4 lg:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold rounded-full transition-colors whitespace-nowrap flex-shrink-0 ${pathname === '/contact'
                            ? 'bg-black text-white hover:bg-gray-800'
                            : 'text-gray-700 hover:text-black'
                        }`}
                >
                    İletişim
                </Link>
            </nav>

            {/* Mobile Navbar Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-3 bg-white rounded-full text-black border border-black/5 shadow-2xl"
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
                    <div className="absolute top-14 left-0 w-56 max-w-[calc(100vw-4rem)] bg-white rounded-2xl border border-black/5 shadow-2xl overflow-hidden md:hidden flex flex-col p-2 z-50">
                        <Link
                            href="/"
                            className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${pathname === '/'
                                    ? 'bg-black text-white'
                                    : 'text-gray-700 hover:text-black hover:bg-black/10'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Ana Sayfa
                        </Link>
                        {navItems.map((item) => {
                            const isActive = pathname === item.link || (item.link !== '/' && pathname?.startsWith(item.link));
                            return (
                                <Link
                                    key={item.label}
                                    href={item.link}
                                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${isActive
                                            ? 'bg-black text-white'
                                            : 'text-gray-700 hover:text-black hover:bg-black/10'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            className={`mt-2 px-4 py-3 text-sm font-bold rounded-xl transition-colors text-center ${pathname === '/contact'
                                    ? 'bg-black text-white hover:bg-gray-800'
                                    : 'text-gray-700 hover:text-black hover:bg-black/10'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            İletişim
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
