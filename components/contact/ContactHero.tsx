import React from 'react';

const ContactHero = () => {
    return (
        <section className="w-full bg-white p-6 md:p-2">
            <div className="relative w-full h-[50vh] overflow-hidden rounded-[1rem] bg-gray-900 shadow-2xl">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f14d7045b5cc?q=80&w=2074&auto=format&fit=crop")',
                        filter: 'brightness(0.7)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        İletişime Geçin
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                        Sorularınız, önerileriniz veya işbirlikleri için bize ulaşın. Sizi dinlemekten memnuniyet duyarız.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
