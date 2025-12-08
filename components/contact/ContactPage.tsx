"use client";

import React from 'react';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import Footer from '@/components/Footer';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white py-12 relative">
            {/* Ana Sayfaya Dön Butonu */}
            <div className="absolute top-8 left-8 z-20">
                <a
                    href="/"
                    className="px-6 py-2 rounded-full text-sm font-medium text-gray-900 
                     bg-white/90 backdrop-blur-md border border-gray-200 
                     hover:bg-gray-50 transition-all duration-300 shadow-sm flex items-center gap-2"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                    Ana Sayfa
                </a>
            </div>

            {/* Content Box - Sağ ve soldan 32px boşluk, açık gri */}
            <div className="mx-8 bg-gray-100 rounded-2xl p-8 md:p-12">
                {/* Header */}
                <ContactHeader />

                {/* Contact Info and Form Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>

            {/* Map Section (Outside the box) */}
            <div className="mx-8 mt-8 mb-8">
                <ContactMap />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ContactPage;

