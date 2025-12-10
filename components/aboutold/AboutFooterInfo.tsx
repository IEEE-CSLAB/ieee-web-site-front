import React from 'react';
import { IconMapPin, IconMail, IconPhone } from './Icons';

const AboutFooterInfo = () => {
  return (
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
  );
};

export default AboutFooterInfo;

