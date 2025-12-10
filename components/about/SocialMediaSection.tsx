import React from 'react';

const SocialMediaSection = () => {
    return (
        <div className="relative w-full rounded-[2rem] p-8 bg-gray-900 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -ml-16 -mb-16" />
            
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">Takipte Kalın</h3>
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
                            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 border border-white/10"
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

export default SocialMediaSection;
