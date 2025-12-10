import React from 'react';
import Navbar from '@/components/Navbar';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactPage = () => {
    return (
        <main className="w-full min-h-screen bg-white">
            {/* Navbar */}
            <div className="fixed top-8 left-8 z-50">
                <Navbar />
            </div>

            <ContactHero />

            <section className="w-full py-16 px-6 md:px-10">
                <div className="mx-auto max-w-[1400px]">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-center items-start">
                        {/* Left Side: Form */}
                        <div className="w-full lg:w-3/5">
                            <ContactForm />
                        </div>

                        {/* Right Side: Info */}
                        <div className="hidden lg:block w-px bg-gray-100 h-[600px] self-center mx-4" /> {/* Divider */}

                        <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
