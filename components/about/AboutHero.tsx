import React from 'react';

const AboutHero = () => {
    return (
        <section className="w-full h-[70vh] md:h-[80vh] bg-white p-6 md:p-2 relative">
            <div className="relative w-full h-full overflow-hidden rounded-[1rem] bg-gray-900 shadow-2xl">
                {/* Background Image with blur effect */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: 'url("/d8bcf3886bea331b947ac08a4c801105.jpg")',
                        filter: 'brightness(0.7) blur(2px)'
                    }}
                >
                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                </div>

                {/* Abstract 3D-like overlay effect */}
                <div className="absolute inset-0 z-10 opacity-20">
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
