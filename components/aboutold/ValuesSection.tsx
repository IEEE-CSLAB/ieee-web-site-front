import React from 'react';
import { IconHandshake, IconLightbulb, IconStarCircle, IconProps } from './Icons';

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

const ValuesSection = () => {
  return (
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
  );
};

export default ValuesSection;

