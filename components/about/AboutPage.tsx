"use client";

import React from 'react';
import NavbarWrapper from '@/components/NavbarWrapper';
import MissionVisionSection from './MissionVisionSection';
import StatsSection from './StatsSection';
import CommitteesShowcase from './CommitteesShowcase';
import JoinUsSection from '@/components/committees/JoinUsSection';
import Footer from '@/components/Footer';

interface Committee {
    name: string;
    description: string;
    members: number;
    projects: number;
    image: string;
    badge?: string;
    accentColor?: string;
}

interface AboutPageProps {
    committees: Committee[];
}

const AboutPage = ({ committees }: AboutPageProps) => {
    return (
        <main className="w-full md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth bg-white relative">
            <NavbarWrapper />

            {/* Mission & Vision Section */}
            <section className="snap-start w-full min-h-screen flex items-center">
                <MissionVisionSection />
            </section>

            {/* Stats Section */}
            <section className="snap-start w-full min-h-screen flex items-center">
                <StatsSection />
            </section>

            {/* Committees Showcase */}
            <section className="snap-start w-full min-h-screen flex items-center">
                <CommitteesShowcase committees={committees} />
            </section>

            {/* CTA Section */}
            <section className="snap-start w-full min-h-screen flex items-center bg-white py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full">
                    <JoinUsSection />
                </div>
            </section>

            {/* Footer */}
            <section className="snap-start w-full">
                <Footer />
            </section>
        </main>
    );
};

export default AboutPage;
