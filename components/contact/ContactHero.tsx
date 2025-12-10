import React from 'react';

const ContactHero = () => {
    return (
        <section className="w-full bg-white p-6 md:p-2">
            <div className="relative w-full h-[50vh] overflow-hidden rounded-[1rem] bg-gray-900 shadow-2xl">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: 'url("/d8bcf3886bea331b947ac08a4c801105.jpg")',
                        filter: 'brightness(0.7)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/20 mb-6">
                        Bize Ulaşın
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        İletişime Geçin
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                        Sorularınız, önerileriniz veya işbirlikleri için bize ulaşın. Sizi dinlemekten memnuniyet duyarız.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
