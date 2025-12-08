import React from 'react';
import CommitteesHeader from './CommitteesHeader';
import CommitteeCard from './CommitteeCard';
import JoinCard from './JoinCard';

const CommitteesSection = () => {
    const committees = [
        {
            name: "Computer Society",
            role: "Yazılım ve Teknoloji",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Robotics & Automation",
            role: "Robotik Sistemler",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Power & Energy",
            role: "Enerji Sistemleri",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "WIE",
            role: "Kadın Mühendisler",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Communications",
            role: "İletişim Teknolojileri",
            image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Educational Activities",
            role: "Eğitim Faaliyetleri",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Social Activities",
            role: "Sosyal Etkinlikler",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Promotion & Design",
            role: "Tanıtım ve Tasarım",
            image: "https://images.unsplash.com/photo-1581092160562-40aa926e5c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Yönetim Kurulu",
            role: "İdari Yönetim",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
    ];

    return (
        <section className="w-full bg-white py-20 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
                <CommitteesHeader />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {committees.slice(0, 2).map((committee, index) => (
                        <CommitteeCard key={index} {...committee} />
                    ))}
                    <JoinCard />
                    {committees.slice(2).map((committee, index) => (
                        <CommitteeCard key={index + 2} {...committee} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommitteesSection;
