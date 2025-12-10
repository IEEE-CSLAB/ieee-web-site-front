import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSocials from './HeroSocials';
import HeroHeading from './HeroHeading';
import ImportantEventBox from './ImportantEventBox';

const Hero = () => {
    return (
        <section className="w-full h-screen bg-white p-6 md:p-2">
            <div className="relative w-full h-full overflow-hidden rounded-[1rem] bg-gray-900 shadow-2xl">
                {/* Background Image Placeholder */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: 'url("/d8bcf3886bea331b947ac08a4c801105.jpg")',
                        filter: 'brightness(0.85)'
                    }}
                >
                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </div>

                {/* Components */}
                <div className="absolute top-8 left-8 z-20">
                    <Navbar />
                </div>
                <HeroSocials />
                <HeroHeading />
                <ImportantEventBox />
            </div>
        </section>
    );
};

export default Hero;
