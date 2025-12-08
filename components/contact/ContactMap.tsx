import React from 'react';

const ContactMap = () => {
    return (
        <div className="bg-card rounded-2xl overflow-hidden border border-border card">
            <div className="p-6 md:p-8 border-b border-border">
                <span className="section-eyebrow block mb-2">Konum</span>
                <h3 className="heading-3 text-foreground mb-2">Konumumuz</h3>
                <p className="text-muted-foreground">Akdeniz Üniversitesi Kampüsü</p>
            </div>
            <div className="w-full h-[400px] bg-secondary relative">
                {/* Google Maps Embed */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.1234567890123!2d30.5533!3d36.8969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYsNTQsNTMuNiJOIDMwLDMzLDExLjkiRQ!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                />
            </div>
            <div className="p-6 bg-secondary">
                <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Akdeniz Üniversitesi, Dumlupınar Bulvarı, Konyaaltı / Antalya</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;

