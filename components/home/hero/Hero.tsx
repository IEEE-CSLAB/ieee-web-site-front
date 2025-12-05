import React from 'react';
import HeroNavigation from './HeroNavigation';
import HeroSocials from './HeroSocials';
import HeroHeading from './HeroHeading';
import HeroLogo from './HeroLogo';

const Hero = () => {
    return (
        <section className="w-full h-screen bg-white p-6 md:p-2">
            <div className="relative w-full h-full overflow-hidden rounded-[1rem] bg-gray-900 shadow-2xl">
                {/* Background Image Placeholder */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80")',
                        filter: 'brightness(0.85)'
                    }}
                >
                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </div>

                {/* Components */}
                <HeroNavigation />
                <HeroLogo />
                <HeroSocials />
                <HeroHeading />
            </div>
        </section>
    );
};

export default Hero;
