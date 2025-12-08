import React from 'react';
import RecruitmentCard from './RecruitmentCard';

const WhyJoinSection = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-stretch about-animate-up about-delay-4">
      <div className="order-2 lg:order-1">
        <RecruitmentCard />
      </div>

      <div className="order-1 lg:order-2 about-story-card p-6 md:p-8">
        <h2 className="heading-3 mb-3 text-foreground">
          Neden IEEE&apos;de olmalısın?
        </h2>
        <p className="body-md text-muted-foreground mb-4">
          Gerçek projelerle deneyim kazanmak, yeni teknolojileri keşfetmek
          ve Türkiye&apos;nin dört bir yanındaki IEEE topluluklarıyla ortak
          çalışmalar yürütmek için güçlü bir ekosistem sunuyoruz.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="about-bullet" />
            <span>Teknik eğitimler, workshoplar ve sertifika programları.</span>
          </li>
          <li className="flex gap-2">
            <span className="about-bullet" />
            <span>Farklı komitelerde aktif rol alma ve liderlik deneyimi.</span>
          </li>
          <li className="flex gap-2">
            <span className="about-bullet" />
            <span>Ulusal / uluslararası etkinlik ve yarışmalara katılım.</span>
          </li>
          <li className="flex gap-2">
            <span className="about-bullet" />
            <span>Akademi ve sektör profesyonelleriyle networking imkânı.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyJoinSection;

