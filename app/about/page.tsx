"use client";

import React, { useEffect, useRef, useState } from "react";
import ValuesCard from "./ValuesCard";
import RecruitmentCard from "./RecruitmentCard";

/* ------- Basit inline ikonlar ------- */

type IconProps = { className?: string };

const IconPeople: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M4 18c0-2.5 2-4.5 5-4.5s5 2 5 4.5" />
    <path d="M14.5 18c.3-1.7 1.7-3 3.5-3 2 0 3.5 1.5 3.5 3.5" />
  </svg>
);

const IconUsersGroup: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="8" cy="9" r="2.7" />
    <circle cx="16" cy="9" r="2.7" />
    <path d="M3.5 18c0-2.4 1.9-4.2 4.5-4.2s4.5 1.8 4.5 4.2" />
    <path d="M12.5 18c.3-2.1 2-3.7 4.3-3.7 2.7 0 4.2 2 4.2 4.2" />
  </svg>
);

const IconCalendar: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M4 9h16" />
    <path d="M9 3v4" />
    <path d="M15 3v4" />
    <circle cx="9" cy="13" r="1" />
    <circle cx="15" cy="13" r="1" />
    <circle cx="12" cy="17" r="1" />
  </svg>
);

const IconTrophy: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
    <path d="M10 18h4" />
    <path d="M9 22h6" />
    <path d="M10 18v-2.2" />
    <path d="M14 18v-2.2" />
    <path d="M4 6h3v2a4 4 0 0 1-4-4v-.5h2" />
    <path d="M20 6h-3v2a4 4 0 0 0 4-4v-.5h-2" />
  </svg>
);

const IconHandshake: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 8.5 8 5l4 2.5 4-2.5 5 3.5-2.5 3-3.5-2-3 2-3-2-3.5 2L3 8.5Z" />
    <path d="m8 15 2.2 1.7" />
    <path d="m11 14.2 2.2 1.8" />
    <path d="m14 13.8 2.2 1.7" />
  </svg>
);

const IconLightbulb: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="9" r="4.5" />
    <path d="M9.5 14.5c.3 1.3 1.3 2.5 2.5 2.5s2.2-1.2 2.5-2.5" />
    <path d="M10 19h4" />
    <path d="M10.5 21h3" />
  </svg>
);

const IconStarCircle: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="m12 7 1.4 3.1 3.1.4-2.4 2.2.7 3.2L12 14.7 9.2 16l.7-3.2L7.5 10.5l3.1-.4L12 7Z" />
  </svg>
);

const IconMapPin: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s-6-5.2-6-10A6 6 0 0 1 18 11c0 4.8-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.3" />
  </svg>
);

const IconMail: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m5 7 7 5 7-5" />
  </svg>
);

const IconPhone: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 4.5 9.5 4l1.8 3.2-1.7 1.4a10.5 10.5 0 0 0 5.8 5.8l1.4-1.7 3.2 1.8-.5 2.5c-.2 1-1 1.7-2 1.7A13 13 0 0 1 5.3 6.5c0-1 .7-1.8 1.7-2Z" />
  </svg>
);

/* ------- Rakamlarla IEEE verileri ------- */

type StatItem = {
  value: number;
  label: string;
  description: string;
  suffix?: string;
  Icon: React.FC<IconProps>;
};

const stats: StatItem[] = [
  {
    value: 7,
    label: "Aktif Komite",
    description: "Farklı ilgi alanlarına hitap eden öğrenci toplulukları.",
    Icon: IconPeople,
  },
  {
    value: 250,
    label: "Aktif Üye",
    suffix: "+",
    description: "IEEE çatısı altında üreten, öğrenen, paylaşan gençler.",
    Icon: IconUsersGroup,
  },
  {
    value: 50,
    label: "Yıllık Etkinlik",
    suffix: "+",
    description:
      "Teknik eğitimler, sosyal etkinlikler ve proje odaklı çalışmalar.",
    Icon: IconCalendar,
  },
  {
    value: 15,
    label: "Ödül",
    suffix: "+",
    description: "Ulusal ve yerel ölçekte alınan dereceler.",
    Icon: IconTrophy,
  },
];

/* ------- Değerlerimiz verileri ------- */

type ValueItem = {
  title: string;
  description: string;
  Icon: React.FC<IconProps>;
};

const values: ValueItem[] = [
  {
    title: "İşbirliği",
    description:
      "Farklı disiplinlerden öğrencileri bir araya getirerek takım ruhunu ön plana çıkarıyoruz.",
    Icon: IconHandshake,
  },
  {
    title: "Yenilikçilik",
    description:
      "Yeni teknolojileri takip eden ve üreten projelerle geleceğe hazırlıyoruz.",
    Icon: IconLightbulb,
  },
  {
    title: "Mükemmeliyet",
    description:
      "Her etkinlik ve projede yüksek kalite ve sürdürülebilir gelişimi hedefliyoruz.",
    Icon: IconStarCircle,
  },
];

/* ------- Sayaçlı kart ------- */

function AnimatedStatCard({
  value,
  suffix,
  label,
  description,
  Icon,
}: StatItem) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const duration = 2200; // daha yavaş sayaç

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasStartedRef.current) return;

          hasStartedRef.current = true;
          const startTime = performance.now();
          const start = 0;

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (value - start) * easeOut;

            setDisplayValue(Math.round(current));

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="about-stat-card group p-6 flex flex-col justify-between hover-lift"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="about-stat-icon-circle">
            <Icon className="about-stat-icon" />
          </div>
          <div className="about-stat-pill">{label}</div>
        </div>
        <div className="about-stat-tag">
          <span className="about-stat-tag-dot" />
        </div>
      </div>

      <div className="mb-1 text-4xl font-semibold tracking-tight text-foreground">
        {displayValue}
        {suffix}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default function About() {
  return (
    <section className="about-section">
      <div className="container-custom relative z-10 space-y-16 md:space-y-24">
        {/* HERO */}
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

        {/* RAKAMLARLA IEEE (üstte, sayaçlı) */}
        <div className="space-y-10 about-animate-up about-delay-1">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="section-eyebrow">Rakamlarla IEEE</span>
            <h2 className="heading-2 text-foreground">
              Başarılarımızı ve büyümemizi keşfet
            </h2>
            <p className="body-md text-muted-foreground">
              Her yıl onlarca etkinlik, yüzlerce katılımcı ve birçok ödülle
              sürekli gelişen bir öğrenci koluyuz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedStatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        {/* MİSYON & VİZYON */}
        <div className="space-y-6 about-animate-up about-delay-2">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Misyon &amp; Vizyon</span>
            <h2 className="heading-2 text-foreground mb-2">
              Neyi hedefliyoruz, nasıl ilerliyoruz?
            </h2>
            <p className="body-md text-muted-foreground">
              IEEE çatısı altında; öğrencilerin teknik ve kişisel gelişimini
              destekleyen, yenilikçi projelere imza atan ve geleceğin
              mühendislerini bugünden hazırlayan bir yapı kurmayı amaçlıyoruz.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="about-mission-card">
              <div className="about-mission-pill">Misyonumuz</div>
              <h3 className="heading-3 mb-2 text-foreground">
                Ne için çalışıyoruz?
              </h3>
              <p className="body-md text-muted-foreground mb-4">
                Öğrencilere teknik bilgi ve deneyim kazandırmak, yenilikçi
                projelere imza atmalarını sağlamak ve sektör profesyonelleriyle
                buluşturmak.
              </p>
              <ul className="about-mission-list">
                <li>Proje ve takım çalışması kültürü oluşturmak.</li>
                <li>Alanında uzman konuşmacılarla etkinlikler gerçekleştirmek.</li>
                <li>
                  Öğrencilerin kariyer yolculuğunu somut adımlarla desteklemek.
                </li>
              </ul>
            </div>

            <div className="about-vision-card">
              <div className="about-mission-pill about-mission-pill-alt">
                Vizyonumuz
              </div>
              <h3 className="heading-3 mb-2 text-foreground">
                Nereye ulaşmak istiyoruz?
              </h3>
              <p className="body-md text-muted-foreground mb-4">
                Türkiye&apos;nin en aktif ve başarılı IEEE öğrenci kollarından
                biri olarak, geleceğin mühendislerini yetiştiren öncü bir
                topluluk olmak.
              </p>
              <ul className="about-mission-list">
                <li>
                  Yerel ve ulusal ölçekte ses getiren etkinlikler düzenlemek.
                </li>
                <li>
                  IEEE ağında örnek gösterilen öğrenci kulüplerinden biri olmak.
                </li>
                <li>
                  Mezun olduktan sonra da devam eden güçlü bir network sağlamak.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DEĞERLERİMİZ + ikonlu kartlar */}
        <div className="space-y-6 about-animate-up about-delay-3">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="section-eyebrow">Değerlerimiz</span>
            <h2 className="heading-2 text-foreground">
              Topluluğumuzu şekillendiren temel ilkeler
            </h2>
            <p className="body-md text-muted-foreground">
              Tüm çalışmalarımızı işbirliği, yenilikçilik ve mükemmeliyet odağında
              yürütüyoruz.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="about-values-card hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="about-values-icon-circle">
                    <value.Icon className="about-values-icon" />
                  </div>
                  <div className="about-values-pill">{value.title}</div>
                </div>
                <p className="body-md text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TARİHÇEMİZ – Değerlerimizin hemen altında */}
        <div className="about-animate-up about-delay-3">
          <div className="about-story-card p-6 md:p-8 mt-2">
            <h2 className="heading-3 mb-3 text-foreground">Tarihçemiz</h2>
            <p className="body-md text-muted-foreground mb-3">
              Akdeniz Üniversitesi IEEE Öğrenci Kolu,
              <span className="text-primary font-semibold">
                {" "}
                2010 yılında kurulmuş{" "}
              </span>
              olup, o günden bu yana binlerce öğrenciye teknik ve sosyal gelişim
              fırsatları sunmuştur.
            </p>
            <p className="body-md text-muted-foreground">
              Yıllar içinde düzenlediğimiz atölyeler, seminerler, konferanslar ve
              yarışmalar ile öğrencilerimizin kariyer gelişimlerine katkıda
              bulunduk. Bugün{" "}
              <span className="text-primary font-semibold">7 aktif komitemiz</span>{" "}
              ve{" "}
              <span className="text-primary font-semibold">
                250&apos;den fazla üyemizle
              </span>{" "}
              Türkiye&apos;nin en dinamik IEEE öğrenci kollarından biriyiz.
            </p>
          </div>
        </div>

        {/* RECRUITMENT + STORY (mevcut blok) */}
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

        {/* IEEE HAKKINDA BİLGİ BLOĞU – ieeeiborep'teki footer-blok benzeri */}
        <div className="about-footer-info about-animate-up about-delay-5">
          <div className="about-footer-info-inner">
            <div className="about-footer-col">
              <div className="about-footer-logo-row">
                <div className="about-footer-logo-circle">
                  <span className="about-footer-logo-text">IEEE</span>
                </div>
                <div>
                  <div className="about-footer-title">Akdeniz Üniversitesi</div>
                  <div className="about-footer-subtitle">IEEE Öğrenci Kolu</div>
                </div>
              </div>
              <p className="about-footer-description">
                Mühendislik ve teknoloji alanında öğrencilere rehberlik eden,
                yenilikçi projelere imza atan öğrenci topluluğudur.
              </p>
            </div>

            <div className="about-footer-col">
              <div className="about-footer-col-title">Hızlı Bağlantılar</div>
              <div className="about-footer-links">
                <a href="/" className="about-footer-link">
                  Ana Sayfa
                </a>
                <a href="/about" className="about-footer-link">
                  Hakkımızda
                </a>
                <a href="/committees" className="about-footer-link">
                  Komiteler
                </a>
                <a href="/events" className="about-footer-link">
                  Etkinlik Takvimi
                </a>
              </div>
            </div>

            <div className="about-footer-col">
              <div className="about-footer-col-title">İletişim</div>
              <div className="about-footer-contact">
                <div className="about-footer-contact-item">
                  <div className="about-footer-contact-icon">
                    <IconMapPin className="about-footer-contact-icon-svg" />
                  </div>
                  <span>
                    Akdeniz Üniversitesi, Dumlupınar Bulvarı,
                    <br />
                    Konyaaltı / Antalya
                  </span>
                </div>
                <div className="about-footer-contact-item">
                  <div className="about-footer-contact-icon">
                    <IconMail className="about-footer-contact-icon-svg" />
                  </div>
                  <a href="mailto:ieee@akdeniz.edu.tr" className="about-footer-link">
                    ieee@akdeniz.edu.tr
                  </a>
                </div>
                <div className="about-footer-contact-item">
                  <div className="about-footer-contact-icon">
                    <IconPhone className="about-footer-contact-icon-svg" />
                  </div>
                  <a href="tel:+902421234567" className="about-footer-link">
                    +90 (242) 123 45 67
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="about-footer-divider" />
          <div className="about-footer-bottom">
            © 2024 Akdeniz Üniversitesi IEEE Öğrenci Kolu. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </section>
  );
}
