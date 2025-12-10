import React from 'react';

const MissionVisionSection = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Misyon Kartı - KOYU (Görsel Arka Planlı, Beyaz Yazı) */}
                    <div className="group relative rounded-[2rem] overflow-hidden min-h-[450px] shadow-xl about-animate-up about-delay-0">
                        {/* Background Image */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url("/robotics-society.jpg")' }}
                        />
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
                        
                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                            <div className="mb-auto">
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-wider uppercase mb-4">
                                    Misyonumuz
                                </span>
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Topluluğumuzun Amacı
                            </h2>
                            <p className="text-lg text-gray-200 mb-8 leading-relaxed font-light">
                                IEEE Antalya Öğrenci Kolu olarak, mühendislik öğrencilerinin teknik ve profesyonel 
                                gelişimlerini desteklemek, inovasyonu teşvik etmek ve teknoloji alanında farkındalık 
                                yaratmak için çalışıyoruz.
                            </p>
                            
                            <ul className="space-y-4">
                                {[
                                    "Teknik becerilerin geliştirilmesi",
                                    "Profesyonel ağ oluşturma",
                                    "Yenilikçi projeler geliştirme",
                                    "Toplumsal sorunlara çözüm üretme"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-white">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        <span className="text-base font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Vizyon Kartı - AÇIK (Görsel Arka Planlı + Beyaz Overlay, Siyah Yazı) */}
                    <div className="group relative rounded-[2rem] overflow-hidden min-h-[450px] shadow-xl border border-gray-100 bg-white about-animate-up about-delay-1">
                        {/* Background Image */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"
                            style={{ backgroundImage: 'url("/computer-society.jpg")' }}
                        />
                        
                        {/* White Gradient Overlay - Yazıların okunması için */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60" />
                        
                        {/* Soft Gradient Blob (Opsiyonel estetik için) */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none mix-blend-multiply" />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                            <div className="mb-auto">
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4">
                                    Vizyonumuz
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Geleceğe Bakışımız
                            </h2>
                            <p className="text-lg text-gray-800 mb-8 leading-relaxed font-medium">
                                Türkiye'nin önde gelen IEEE öğrenci kollarından biri olarak, teknoloji ve mühendislik 
                                alanında liderlik yapmak, uluslararası platformlarda temsil edilmek ve sektöre nitelikli 
                                mühendisler kazandırmak hedefimizdir.
                            </p>
                            
                            <ul className="space-y-4">
                                {[
                                    "Uluslararası tanınırlık",
                                    "Sektör liderliği",
                                    "Sürdürülebilir büyüme",
                                    "Global etki yaratma"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-900 font-semibold">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        <span className="text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;
