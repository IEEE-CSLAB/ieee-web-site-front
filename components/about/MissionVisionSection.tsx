import React from 'react';

const MissionVisionSection = () => {
  return (
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
  );
};

export default MissionVisionSection;

