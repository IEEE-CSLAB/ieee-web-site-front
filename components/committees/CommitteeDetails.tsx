import React from 'react';
import Link from 'next/link';

interface CommitteeDetailsProps {
    committeeName: string;
    detailText: string;
    image?: string;
    isFirst?: boolean;
}

const CommitteeDetails: React.FC<CommitteeDetailsProps> = ({ committeeName, detailText, image, isFirst = false }) => {
    return (
        <section 
            id={`committee-details-${committeeName.replace(/\s+/g, '-').toLowerCase()}`}
            className="min-h-screen flex items-center justify-center py-12 md:py-20 border-b border-gray-100 last:border-0 snap-start bg-white"
        >
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <article className="w-full max-w-5xl mx-auto">
                    {/* Hero Image Section */}
                    {image && (
                        <div className="relative w-full h-64 md:h-96 mb-8 md:mb-12 rounded-2xl overflow-hidden shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                            
                            {/* Committee Badge */}
                            <div className="absolute top-6 left-6 z-10">
                                <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-bold border-2 border-white/50 shadow-lg backdrop-blur-sm">
                                    {committeeName.substring(0, 2).toUpperCase()}
                                </span>
                            </div>

                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
                                    {committeeName}
                                </h2>
                            </div>
                        </div>
                    )}

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl p-6 md:p-12 border border-gray-200 shadow-lg">
                        {/* Header (if no image) */}
                        {!image && (
                            <div className="mb-8 pb-8 border-b border-gray-200">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
                                    {committeeName}
                                </h2>
                                <div className="flex items-center gap-3">
                                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                        Komite
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Description */}
                        {detailText && (
                            <div className="space-y-6">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                                        {detailText}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8 md:mt-12 pt-8 border-t border-gray-200">
                            <Link
                                href="/committees"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-colors font-medium"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 12H5" />
                                    <path d="M12 19l-7-7 7-7" />
                                </svg>
                                Tüm Komiteler
                            </Link>

                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                            >
                                Hakkımızda
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default CommitteeDetails;

