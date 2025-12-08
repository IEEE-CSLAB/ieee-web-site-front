import React from 'react';

const HistorySection = () => {
  return (
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
  );
};

export default HistorySection;

