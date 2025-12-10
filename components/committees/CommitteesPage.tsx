"use client";

import React, { useState } from 'react';
import CommitteesHeader from './CommitteesHeader';
import CommitteesGrid from './CommitteesGrid';
import CommitteeDetails from './CommitteeDetails';
import JoinUsSection from './JoinUsSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface Committee {
    name: string;
    description: string;
    members: number;
    projects: number;
    image: string;
    badge: string;
    accentColor: string;
    detailText?: string;
    detailImage?: string;
    memberList?: any[]; // Allow for member list presence
}

interface CommitteesPageProps {
    committees: Committee[];
}

const CommitteesPage = ({ committees }: CommitteesPageProps) => {
    const [selectedCommittee, setSelectedCommittee] = useState<string | null>(null);

    // Hardcoded data removed - now using props


    const handleCardClick = (committeeName: string) => {
        // Scroll to the specific committee details
        setTimeout(() => {
            const element = document.getElementById(`committee-details-${committeeName.replace(/\s+/g, '-').toLowerCase()}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white">
            {/* Navbar */}
            <div className="fixed top-8 left-8 z-50">
                <Navbar />
            </div>
            {/* Mobile Home Button (Removed as Navbar is now responsive) */}

            {/* Mobile only home button for now as the Navbar is hidden on mobile in this design pattern (same as HeroNavigation) */}
            <div className="fixed top-8 left-8 z-50 md:hidden">
                <a
                    href="/"
                    className="p-3 rounded-full text-gray-900 bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm flex items-center justify-center"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                </a>
            </div>

            {/* Intro & Grid Section */}
            <section className="snap-start w-full min-h-screen flex items-center justify-center pb-12 pt-32">
                <div className="container mx-auto px-4 bg-gray-100 rounded-2xl p-8 md:p-12 shadow-sm">
                    {/* Header */}
                    <CommitteesHeader />

                    {/* Intro Text */}
                    <div className="mb-12">
                        <p className="text-lg text-gray-600 max-w-3xl">
                            7 farklı teknik komitemiz ile çeşitli alanlarda projeler geliştiriyor, etkinlikler düzenliyor ve
                            öğrencilerimize deneyim kazandırıyoruz.
                        </p>
                    </div>

                    {/* Grid */}
                    <CommitteesGrid committees={committees} onCardClick={handleCardClick} />
                </div>
            </section>

            {/* Committee Details - All committees in order */}
            <div className="w-full">
                {committees.map((committee, index) => (
                    <div
                        key={committee.name}
                        id={`committee-details-${committee.name.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                        <CommitteeDetails
                            committeeName={committee.name}
                            detailText={committee.detailText || ""}
                            image={committee.detailImage || ""}
                            isFirst={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Footer */}
            <section className="snap-start w-full">
                <Footer />
            </section>
        </main>
    );
};

export default CommitteesPage;
