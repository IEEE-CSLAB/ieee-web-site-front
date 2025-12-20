"use client";

import React, { useState } from 'react';
import NavbarWrapper from '@/components/NavbarWrapper';
import CommitteesHeader from './CommitteesHeader';
import CommitteesGrid from './CommitteesGrid';
import CommitteeDetails from './CommitteeDetails';
import JoinUsSection from './JoinUsSection';
import Footer from '@/components/Footer';

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
        <main className="w-full md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth bg-white relative">
            <NavbarWrapper />

            {/* Intro & Grid Section */}
            <section className="snap-start w-full min-h-screen pb-12 pt-32">
                <div className="mx-8 bg-gray-100 rounded-2xl p-8 md:p-12">
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
                    <CommitteeDetails
                        key={committee.name}
                        committeeName={committee.name}
                        detailText={committee.detailText || ""}
                        image={committee.detailImage || ""}
                        isFirst={index === 0}
                    />
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
