import React from 'react';

const ContactInfo = () => {
    return (
        <div className="w-full h-full">
            {/* Social Card */}
            <div className="relative w-full h-full rounded-[2rem] p-8 md:p-12 bg-gray-900 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -ml-16 -mb-16" />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">İletişim Bilgileri</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        {[
                            { icon: 'instagram', name: 'Instagram', url: 'https://instagram.com/ieeeakdeniz' },
                            { icon: 'linkedin', name: 'LinkedIn', url: '#' }
                        ].map((social) => (
                            <a
                                key={social.icon}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 px-4 py-3 bg-white/10 rounded-xl text-white hover:bg-white hover:text-gray-900 transition-all duration-300 border border-white/10"
                            >
                                <div className="w-10 h-10 flex items-center justify-center">
                                    {social.icon === 'instagram' && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    )}
                                    {social.icon === 'linkedin' && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    )}
                                </div>
                                <span className="font-semibold">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
