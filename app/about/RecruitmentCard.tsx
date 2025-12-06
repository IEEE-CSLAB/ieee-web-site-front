import React from "react";

const RecruitmentCard = () => {
  return (
    <div
      className="relative h-full min-h-[220px] rounded-3xl p-6 md:p-7 overflow-hidden shadow-card"
      style={{
        background:
          "radial-gradient(circle at top, hsl(var(--accent-blue) / 0.22), transparent 55%)," +
          "linear-gradient(135deg, hsl(var(--background)), hsl(var(--secondary)))",
      }}
    >
      {/* Dekoratif halkalar */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-primary opacity-20" />
      <div className="pointer-events-none absolute -right-20 top-6 h-40 w-40 rounded-full border-primary opacity-20" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-4">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Katıl &amp; Üret
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            Aramıza katılmak ister misin?
          </h3>
          <p className="body-md text-muted-foreground">
            Her dönem farklı komitelerimize yeni üyeler alıyoruz. Teknik veya
            sosyal hiçbir deneyimin olmasa bile; öğrenme motivasyonun bizim
            için yeterli.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>• Online başvuru formu</p>
            <p>• Mülakat &amp; tanışma oturumu</p>
            <p>• Komiteye özel orientasyon süreci</p>
          </div>

          <a href="#" className="btn btn-primary text-xs px-4 py-2">
            Başvuru formu yakında
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCard;
