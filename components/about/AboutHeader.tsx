import React from 'react';
import ValuesCard from './ValuesCard';

const AboutHeader = () => {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center about-animate-up about-delay-0">
      <div className="space-y-6">
        <span className="section-eyebrow">Hakkımızda</span>
        <h1 className="heading-1 text-foreground">
          Teknoloji ve mühendislikte
          <span className="text-gradient block">
            sınırları zorlayan öğrenci topluluğu
          </span>
        </h1>
        <p className="body-lg text-muted-foreground max-w-xl">
          Akdeniz Üniversitesi IEEE Öğrenci Kolu olarak; mühendislik, yazılım
          ve yenilikçi teknolojiler alanında etkinlikler düzenleyen, projeler
          geliştiren ve öğrencileri sektörle buluşturan bir topluluğuz.
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="about-chip">
            <span className="about-chip-dot" />
            IEEE Akdeniz University Student Branch
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <a href="/events" className="btn btn-primary hover-lift">
            Etkinliklerimizi incele
          </a>
          <a href="/committees" className="btn btn-outline hover-lift">
            Komitelerimizi keşfet
          </a>
        </div>
      </div>

      <div className="lg:pl-6 about-animate-up about-delay-1">
        <ValuesCard />
      </div>
    </div>
  );
};

export default AboutHeader;

