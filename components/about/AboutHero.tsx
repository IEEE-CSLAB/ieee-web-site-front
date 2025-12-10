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

                {/* Mobile Home Button */}
                <div className="absolute top-8 left-8 z-20 md:hidden">
                    <a
                        href="/"
                        className="p-3 rounded-full text-white bg-white/10 backdrop-blur-md border border-white/20 
                         hover:bg-white/20 transition-all duration-300 shadow-sm flex items-center justify-center"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>
                    </a>
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-16 left-8 z-20 max-w-3xl text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 drop-shadow-lg">
                        Teknolojinin Kalbinde Bir Topluluk
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl drop-shadow-md">
                        IEEE Antalya Öğrenci Kolu olarak, mühendislik ve teknoloji alanında öğrencileri bir araya getiriyor, 
                        yenilikçi projeler geliştiriyor ve geleceğin teknolojilerini şekillendiriyoruz.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
