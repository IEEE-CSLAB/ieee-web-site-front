"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import AboutHero from './AboutHero';
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
        <main className="min-h-screen bg-white">
            {/* Navbar */}
            <div className="fixed top-8 left-8 z-50">
                <Navbar />
            </div>

            {/* Hero Section */}
            <AboutHero />

            {/* Mission & Vision Section */}
            <MissionVisionSection />

            {/* Stats Section */}
            <StatsSection />

            {/* Committees Showcase */}
            <CommitteesShowcase committees={committees} />

            {/* CTA Section */}
            <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <JoinUsSection />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default AboutPage;
