import React from 'react';
import NavbarWrapper from '@/components/NavbarWrapper';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import JoinUsSection from '@/components/committees/JoinUsSection';

const ContactPage = () => {
    return (
        <main className="w-full min-h-screen bg-white">
            <div className="relative">
                <NavbarWrapper />
                <ContactHero />
            </div>

            <section className="w-full py-16 px-6 md:px-10">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        {/* Social Media Card */}
                        <div className="w-full h-full">
                            <ContactInfo />
                        </div>
                        
                        {/* Join Us Section */}
                        <div className="w-full h-full">
                            <JoinUsSection />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
