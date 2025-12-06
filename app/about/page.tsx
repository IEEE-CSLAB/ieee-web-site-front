import React from "react";
import ValuesCard from "./ValuesCard";
import RecruitmentCard from "./RecruitmentCard";

const stats = [
  {
    count: "7",
    label: "Aktif Komite",
    description: "Farklı ilgi alanlarına hitap eden öğrenci toplulukları",
  },
  {
    count: "250+",
    label: "Aktif Üye",
    description: "IEEE çatısı altında üreten, öğrenen, paylaşan gençler",
  },
  {
    count: "50+",
    label: "Yıllık Etkinlik",
    description: "Eğitimler, seminerler, teknik geziler ve yarışmalar",
  },
  {
    count: "15+",
    label: "Ödül ve Başarı",
    description: "Ulusal ve yerel ölçekte alınan dereceler",
  },
];

export default function About() {
  return (
    <section className="about-section">
      <div className="container-custom relative z-10 space-y-16 md:space-y-24">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
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

          <div className="lg:pl-6">
            <ValuesCard />
          </div>
        </div>

        {/* RECRUITMENT + STORY */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-stretch">
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
                <span>Teknik eğitimler, workshoplar ve sertifika programları</span>
              </li>
              <li className="flex gap-2">
                <span className="about-bullet" />
                <span>Farklı komitelerde aktif rol alma ve liderlik deneyimi</span>
              </li>
              <li className="flex gap-2">
                <span className="about-bullet" />
                <span>Ulusal / uluslararası etkinlik ve yarışmalara katılım</span>
              </li>
              <li className="flex gap-2">
                <span className="about-bullet" />
                <span>Akademi ve sektör profesyonelleriyle networking imkânı</span>
              </li>
            </ul>
          </div>
        </div>

        {/* STATS */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="section-eyebrow">Rakamlarla IEEE Akdeniz</span>
            <h2 className="heading-2 text-foreground">
              Büyüyen bir topluluğun parçası ol
            </h2>
            <p className="body-md text-muted-foreground">
              Her yıl onlarca etkinlik, yüzlerce katılımcı ve birçok ödülle
              sürekli gelişen bir öğrenci koluyuz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="about-stat-card group p-6 transition-transform duration-300 hover-lift"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="about-stat-pill">{stat.label}</div>
                  <div className="about-stat-tag">IEEE</div>
                </div>
                <div className="mb-1 text-4xl font-semibold tracking-tight text-foreground">
                  {stat.count}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
