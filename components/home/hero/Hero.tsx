"use client";

import React from 'react';
import HeroSocials from './HeroSocials';
import HeroHeading from './HeroHeading';
import ImportantEventBox from './ImportantEventBox';

const Hero = () => {
    return (
        <section className="w-full h-screen bg-white p-6 md:p-2">
            <div className="relative w-full h-full overflow-hidden rounded-[1rem] bg-gray-900 shadow-2xl">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ filter: 'brightness(0.85)' }}
                    >
                        <source src="/hero-video.mov" type="video/quicktime" />
                    </video>
                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </div>

                {/* Components */}
                <HeroSocials />
                <HeroHeading />
                <ImportantEventBox />
            </div>
        </section>
    );
};

export default Hero;
