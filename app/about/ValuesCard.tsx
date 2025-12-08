import React from "react";

const ValuesCard = () => {
  return (
    <div
      className="relative h-full min-h-[260px] rounded-3xl p-6 md:p-8 text-white shadow-glow overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, hsl(var(--primary) / 0.35), transparent 55%)," +
          "radial-gradient(circle at bottom right, hsl(var(--accent-blue) / 0.45), transparent 60%)," +
          "hsl(var(--primary-dark))",
      }}
    >
      {/* İnce grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/70">
            IEEE Akdeniz
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            Merhaba, biz IEEE Akdeniz Üniversitesi
            <br />
            Öğrenci Koluyuz.
          </h2>
          <p className="text-sm md:text-base text-white/85 max-w-md">
            Mühendislik ve teknoloji odaklı etkinlikler, atölyeler ve projeler
            ile kampüste güçlü bir topluluk oluşturuyoruz; birlikte üretiyor,
            öğreniyor ve paylaşıyoruz.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-full border border-white/25 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white/80">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Gelişim &amp; Networking
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/75">
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
