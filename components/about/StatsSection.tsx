"use client";

import React, { useEffect, useRef, useState } from "react";
import { IconPeople, IconUsersGroup, IconCalendar, IconTrophy, IconProps } from "./Icons";

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

    const duration = 2200;

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

const StatsSection = () => {
  return (
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
  );
};

export default StatsSection;

