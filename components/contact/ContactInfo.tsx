import React from 'react';

const ContactInfo = () => {
    return (
        <div className="flex flex-col gap-8 w-full max-w-sm">
            {/* Address Card */}
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-blue-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Adres</h3>
                <p className="text-gray-600 leading-relaxed">
                    Akdeniz Üniversitesi<br />
                    Mühendislik Fakültesi<br />
                    Konyaaltı, Antalya
                </p>
            </div>

            {/* Email Card */}
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-blue-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">E-posta</h3>
                <p className="text-gray-600 mb-4">
                    Her türlü sorunuz için bize e-posta gönderebilirsiniz.
                </p>
                <a href="mailto:info@ieeeakdeniz.org" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    info@ieeeakdeniz.org
                </a>
            </div>

            {/* Social Card */}
            <div className="bg-gray-900 rounded-[2rem] p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Takipte Kalın</h3>
                <p className="text-gray-300 mb-6 text-sm">
                    Etkinliklerimizden ve duyurularımızdan haberdar olmak için bizi sosyal medyada takip edin.
                </p>
                <div className="flex gap-4">
                    {[
                        { icon: 'instagram', url: 'https://instagram.com/ieeeakdeniz' },
                        { icon: 'twitter', url: 'https://twitter.com/IeeeAkdeniz' },
                        { icon: 'linkedin', url: '#' }
                    ].map((social) => (
                        <a
                            key={social.icon}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            {social.icon === 'instagram' && (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            )}
                            {social.icon === 'twitter' && (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                            )}
                            {social.icon === 'linkedin' && (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
