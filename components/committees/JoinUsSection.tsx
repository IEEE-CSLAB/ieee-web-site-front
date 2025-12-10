import React from 'react';

const JoinUsSection = () => {
    return (
        <div className="w-full h-full">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-white h-full flex flex-col">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Aramıza Katılmak İster Misin?
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                    IEEE Öğrenci Kolu'na üye olarak komitelerimizden birinde yer alabilir, teknik becerilerini geliştirebilir ve yeni arkadaşlıklar kurabilirsin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <a href="/contact" className="px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors text-center">
                        Üye Ol
                    </a>
                    <a href="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-center">
                        İletişime Geç
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JoinUsSection;

