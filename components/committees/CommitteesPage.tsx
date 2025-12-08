"use client";

import React, { useState } from 'react';
import CommitteesHeader from './CommitteesHeader';
import CommitteesGrid from './CommitteesGrid';
import CommitteeDetails from './CommitteeDetails';
import JoinUsSection from './JoinUsSection';
import Footer from '@/components/Footer';

const CommitteesPage = () => {
    const [selectedCommittee, setSelectedCommittee] = useState<string | null>(null);

    const committees = [
        {
            name: "Computer Society",
            description: "Yazılım geliştirme, yapay zeka, veri bilimi ve modern programlama teknolojileri üzerine çalışmalar yapan komitemiz.",
            members: 45,
            projects: 12,
            image: "/computer-society.jpg",
            badge: "Yazılım",
            accentColor: "blue"
        },
        {
            name: "Power & Energy Society",
            description: "Enerji sistemleri, yenilenebilir enerji kaynakları ve güç elektroniği alanlarında araştırma ve projeler yürüten komitemiz.",
            members: 38,
            projects: 8,
            image: "/powerenergy-society.jpg",
            badge: "Enerji",
            accentColor: "yellow"
        },
        {
            name: "Robotics & Automation Society",
            description: "Robotik sistemler, otomasyon teknolojileri ve akıllı kontrol sistemleri üzerine odaklanan komitemiz.",
            members: 42,
            projects: 10,
            image: "/robotics-society.jpg",
            badge: "Robotik",
            accentColor: "green"
        },
        {
            name: "Women in Engineering",
            description: "Mühendislik alanında kadınların görünürlüğünü artırmak ve desteklemek için çalışan komitemiz.",
            members: 35,
            projects: 6,
            image: "/women-society.jpg",
            badge: "WIE",
            accentColor: "pink"
        },
        {
            name: "SIGHT (Special Interest Group on Humanitarian Technology)",
            description: "Toplumsal sorunlara teknolojik çözümler üreten, insani yardım odaklı projeler geliştiren komitemiz.",
            members: 28,
            projects: 7,
            image: "/sight.jpg",
            badge: "SIGHT",
            accentColor: "orange"
        },
        {
            name: "Engineering in Medicine & Biology Society",
            description: "Biyomedikal mühendisliği, sağlık teknolojileri ve tıbbi cihaz tasarımı alanlarında çalışan komitemiz.",
            members: 32,
            projects: 9,
            image: "/medicine.jpg",
            badge: "EMBS",
            accentColor: "purple"
        },
        {
            name: "Industry Applications Society",
            description: "Endüstriyel otomasyon, üretim teknolojileri ve sanayi 4.0 uygulamaları üzerine odaklanan komitemiz.",
            members: 30,
            projects: 8,
            image: "/industry.jpg",
            badge: "IAS",
            accentColor: "primary"
        }
    ];

    const committeeDetails: Record<string, { text: string; detailImage: string }> = {
        "Computer Society": {
            text: "Yazılım mühendisliği, yapay zeka, veri bilimi ve siber güvenlik alanlarında derinlemesine teknik eğitimler sunuyoruz. Düzenlediğimiz hackathonlar ve kodlama atölyeleriyle teorik bilgiyi pratiğe döküyor, sektörün önde gelen isimleriyle buluşarak teknolojinin geleceğine yön veriyoruz.",
            detailImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        "Power & Energy Society": {
            text: "Sürdürülebilir bir dünya için yenilenebilir enerji kaynakları, akıllı şebekeler ve güç elektroniği üzerine odaklanıyoruz. Teknik geziler ve proje tabanlı çalışmalarla enerji sektöründeki küresel dönüşümü yakından takip ederken, verimli enerji kullanımı konusunda farkındalık yaratmayı hedefliyoruz.",
            detailImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        "Robotics & Automation Society": {
            text: "Endüstriyel otomasyondan insansız hava araçlarına kadar geniş bir yelpazede robotik sistemler geliştiriyoruz. Mekatronik ve gömülü sistemler üzerine düzenlediğimiz Ar-Ge faaliyetleri ile üyelerimizi ulusal ve uluslararası robotik yarışmalarına hazırlıyor, mühendislik becerilerini zirveye taşıyoruz.",
            detailImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        "Women in Engineering": {
            text: "STEM alanlarında kadınların görünürlüğünü artırmak ve liderlik becerilerini geliştirmek en büyük önceliğimiz. İlham veren kariyer sohbetleri, teknik eğitimler ve güçlü mentorluk ağımızla, cinsiyet eşitliğini destekleyen ve önyargıları yıkan küresel bir dayanışma ortamı oluşturuyoruz.",
            detailImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        "SIGHT (Special Interest Group on Humanitarian Technology)": {
            text: "Teknolojik yetkinliklerimizi toplumsal faydaya dönüştürmek için bir araya geliyoruz. İnsani yardım odaklı projelerimizle; temiz su, sağlık ve eğitim gibi temel ihtiyaçlara yönelik düşük maliyetli ve sürdürülebilir mühendislik çözümleri üreterek dünyada pozitif bir iz bırakmayı amaçlıyoruz.",
            detailImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        "Engineering in Medicine & Biology Society": {
            text: "Mühendislik prensiplerini tıp bilimleriyle birleştirerek sağlık teknolojilerindeki inovasyonları keşfediyoruz. Biyosinyal işleme, tıbbi cihaz tasarımı ve biyoinformatik alanlarında düzenlediğimiz seminer ve projelerle, insan sağlığını iyileştirecek teknolojilerin geliştirilmesine katkı sağlıyoruz.",
            detailImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        "Industry Applications Society": {
            text: "Teorik mühendislik bilgisini endüstriyel sahadaki pratik uygulamalarla buluşturuyoruz. Endüstri 4.0, üretim otomasyonu ve fabrika sistemleri konularında sektör profesyonelleriyle iş birliği yaparak, üyelerimizi iş hayatına hazırlayan köklü bir gelişim platformu sunuyoruz.",
            detailImage: "https://images.unsplash.com/photo-1581092160562-40aa926e5c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }
    };

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
        <div className="min-h-screen bg-white py-12 relative">
            {/* Ana Sayfaya Dön Butonu */}
            <div className="absolute top-8 left-8 z-20">
                <a
                    href="/"
                    className="px-6 py-2 rounded-full text-sm font-medium text-gray-900 
                     bg-white/90 backdrop-blur-md border border-gray-200 
                     hover:bg-gray-50 transition-all duration-300 shadow-sm flex items-center gap-2"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                    Ana Sayfa
                </a>
            </div>
            {/* Content Box - Sağ ve soldan 32px boşluk, açık gri */}
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

            {/* Committee Details - All committees in order (Outside the box) */}
            <div className="mx-8 mt-8">
                {committees.map((committee, index) => (
                    <div 
                        key={committee.name}
                        id={`committee-details-${committee.name.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                        <CommitteeDetails 
                            committeeName={committee.name} 
                            detailText={committeeDetails[committee.name].text} 
                            image={committeeDetails[committee.name].detailImage}
                            isFirst={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Join Us Section (Outside the box) */}
            <div className="mx-8 mt-8">
                <JoinUsSection />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default CommitteesPage;

