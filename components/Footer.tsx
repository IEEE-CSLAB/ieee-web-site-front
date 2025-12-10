import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-6 px-8 mt-12">
            <div className="mx-auto max-w-[1600px] bg-gray-200 rounded-[2rem] px-6 py-8 md:px-10 md:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr_1fr] gap-8 lg:gap-10 mb-8">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 border-2 border-gray-900 rounded-full flex items-center justify-center">
                                <span className="font-bold text-lg text-gray-900">I</span>
                            </div>
                            <span className="font-semibold text-lg tracking-tight text-gray-900">IEEE Antalya</span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-semibold leading-[1.1] tracking-tight text-gray-900">
                            <span className="inline-block bg-blue-600 text-white px-2 py-0.5 rounded-full -rotate-2 transform origin-center">Teknoloji,</span> İnovasyon<br />
                            ve Kariyer İçin <span className="inline-block bg-blue-800 text-white px-2 py-0.5 rounded-full -rotate-1 transform origin-center">Buluşma Noktası</span>
                        </h2>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 text-gray-900">Komiteler</h3>
                            <ul className="flex flex-col gap-2">
                                {['Computer Society', 'Robotics & Automation', 'Power & Energy', 'WIE', 'Communications', 'Educational Activities', 'Social Activities', 'Promotion & Design'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 text-gray-900">Hakkımızda</h3>
                            <ul className="flex flex-col gap-2">
                                {['Misyonumuz', 'Vizyonumuz', 'Yönetim Kurulu', 'Tüzük', 'S.S.S.'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 text-gray-900">Sosyal Medya</h3>
                            <div className="flex flex-col gap-2">
                                {[
                                    { name: 'Instagram', url: 'https://instagram.com/ieeeakdeniz' },
                                    { name: 'Twitter', url: 'https://twitter.com/IeeeAkdeniz' },
                                    { name: 'Linkedin', url: '#' },
                                    { name: 'Youtube', url: '#' }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-between px-4 py-1.5 border border-gray-300 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 w-full max-w-[180px] text-sm"
                                    >
                                        <span>{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Join Us Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold text-gray-900">Bize Katılın</h3>
                        <a
                            href="https://sks.akdeniz.edu.tr/kayit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-white text-gray-900 border border-gray-900 rounded-full p-1.5 pl-5 flex items-center justify-between hover:bg-gray-900 hover:text-white group transition-all duration-300"
                        >
                            <span className="font-bold text-xs tracking-wide uppercase">KAYIT OL</span>
                            <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-gray-900 transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14m-7-7 7 7-7 7" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-500 text-xs">

                    <div>
                        Tüm hakları saklıdır © 2025 IEEE Antalya
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
