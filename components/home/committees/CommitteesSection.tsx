import React from 'react';
import CommitteesHeader from './CommitteesHeader';
import CommitteeCard from './CommitteeCard';
import JoinCard from './JoinCard';

const CommitteesSection = () => {
    const committees = [
        {
            name: "Computer Society",
            role: "Yazılım ve Teknoloji",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Robotics & Automation",
            role: "Robotik Sistemler",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Power & Energy",
            role: "Enerji Sistemleri",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "WIE",
            role: "Kadın Mühendisler",
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Communications",
            role: "İletişim Teknolojileri",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Educational Activities",
            role: "Eğitim Faaliyetleri",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Social Activities",
            role: "Sosyal Etkinlikler",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Promotion & Design",
            role: "Tanıtım ve Tasarım",
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        },
        {
            name: "Yönetim Kurulu",
            role: "İdari Yönetim",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
