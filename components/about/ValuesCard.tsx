import React from "react";

const ValuesCard = () => {
  return (
    <div
      className="relative h-full min-h-[260px] rounded-3xl p-6 md:p-8 shadow-card overflow-hidden border border-border"
      style={{
        background:
          "radial-gradient(circle at top left, hsl(var(--primary) / 0.08), transparent 55%)," +
          "radial-gradient(circle at bottom right, hsl(var(--accent-blue) / 0.12), transparent 60%)," +
          "hsl(var(--card))",
      }}
    >
      {/* İnce grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:24px_24px]" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
            IEEE Akdeniz
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-foreground">
            Merhaba, biz IEEE Akdeniz Üniversitesi
            <br />
            Öğrenci Koluyuz.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-md">
            Mühendislik ve teknoloji odaklı etkinlikler, atölyeler ve projeler
            ile kampüste güçlü bir topluluk oluşturuyoruz; birlikte üretiyor,
            öğreniyor ve paylaşıyoruz.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-foreground bg-secondary">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Gelişim &amp; Networking
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span>• Proje takımları</span>
            <span>• Teknik geziler</span>
            <span>• Hackathonlar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesCard;
