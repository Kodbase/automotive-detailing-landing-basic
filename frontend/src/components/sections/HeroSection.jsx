import React from "react";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../shared/i18n";
import { BUSINESS } from "../../../../shared/constants";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function HeroSection() {
  const { t } = useLanguage();

  const handleCall = () => {
    window.location.href = `tel:${BUSINESS.phone}`;
  };

  return (
    <section className="hero" id="hero" aria-label="Hero">
      {/* ── Arkaplan katmanları ── */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-grid" />
        <div className="hero__bg-glow" />
      </div>

      {/* ── İçerik ── */}
      <div className="hero__container">

        {/* Sol: metin bloğu */}
        <div className="hero__text">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            {t(translations.hero.badge)}
          </span>

          <h1 className="hero__headline">
            {t(translations.hero.headline)}
          </h1>

          <p className="hero__sub">
            {t(translations.hero.subheadline)}
          </p>

          <div className="hero__actions">
            <WhatsAppButton variant="primary" size="lg" pulse />
            <button
              className="hero__call-btn"
              onClick={handleCall}
              aria-label={t(translations.hero.ctaCall)}
            >
              <PhoneIcon />
              {t(translations.hero.ctaCall)}
            </button>
          </div>

          {/* Küçük güven sinyalleri */}
          <div className="hero__trust">
            <TrustItem icon="⚡" label={t({ tr: "Aynı gün teslim", en: "Same-day delivery" })} />
            <TrustItem icon="🛡️" label={t({ tr: "Garantili hizmet", en: "Guaranteed service" })} />
            <TrustItem icon="📍" label={t({ tr: "Bursa merkez", en: "Bursa city center" })} />
          </div>
        </div>

        {/* Sağ: önce/sonra görsel */}
        {/* Önce/sonra görseli: Şu an SVG placeholder — gerçek fotoğraf gelince 
        <BeforeCarSVG /> ve <AfterCarSVG /> bileşenlerini <img src="..." /> ile değiştirmen yeterli. */}
        <div className="hero__visual">
          <div className="hero__compare">
            {/* BEFORE */}
            <div className="hero__compare-panel hero__compare-panel--before">
              <div className="hero__compare-img">
                <BeforeCarSVG />
              </div>
              <span className="hero__compare-label">
                {t(translations.hero.beforeLabel)}
              </span>
            </div>

            {/* Divider */}
            <div className="hero__compare-divider" aria-hidden="true">
              <div className="hero__compare-line" />
              <div className="hero__compare-handle">
                <ArrowsIcon />
              </div>
            </div>

            {/* AFTER */}
            <div className="hero__compare-panel hero__compare-panel--after">
              <div className="hero__compare-img">
                <AfterCarSVG />
              </div>
              <span className="hero__compare-label">
                {t(translations.hero.afterLabel)}
              </span>
            </div>
          </div>

          {/* Dekoratif köşe çerçevesi */}
          <div className="hero__visual-frame" aria-hidden="true" />
        </div>

      </div>

      {/* Aşağı kaydır işareti */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

/* ── Yardımcı bileşenler ──────────────────────────────────────────────── */

function TrustItem({ icon, label }) {
  return (
    <div className="hero__trust-item">
      <span className="hero__trust-icon" aria-hidden="true">{icon}</span>
      <span className="hero__trust-label">{label}</span>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" width="18" height="18">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 8.81 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function ArrowsIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      width="16" height="16" aria-hidden="true">
      <path d="M7 4l-4 4 4 4M13 4l4 4-4 4" />
    </svg>
  );
}

/* ── Placeholder görseller – gerçek fotoğrafla değiştir ── */
function BeforeCarSVG() {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-label="Temizlik öncesi araç">
      <rect width="320" height="200" fill="#0d1117" />
      <rect y="150" width="320" height="50" fill="#0a0a0f" />
      <ellipse cx="160" cy="150" rx="130" ry="12" fill="rgba(0,0,0,0.5)" />
      <path d="M40 140 Q50 110 80 100 L100 85 Q130 72 160 72 Q190 72 220 85 L240 100 Q270 110 280 140 Z"
        fill="#1e1e2e" stroke="#2a2a3e" strokeWidth="1.5" />
      <path d="M100 85 L115 72 Q145 62 175 62 Q200 62 225 72 L240 85 Z"
        fill="#141e2a" stroke="#1e2a3a" strokeWidth="1" />
      <circle cx="80" cy="122" r="14" fill="rgba(90,70,30,0.4)" />
      <circle cx="195" cy="117" r="9" fill="rgba(90,70,30,0.35)" />
      <circle cx="148" cy="132" r="17" fill="rgba(70,55,20,0.35)" />
      <circle cx="248" cy="126" r="11" fill="rgba(90,70,30,0.3)" />
      <circle cx="95" cy="145" r="20" fill="#12121e" stroke="#1e1e2e" strokeWidth="2" />
      <circle cx="95" cy="145" r="11" fill="#0a0a12" stroke="#1a1a28" strokeWidth="1" />
      <circle cx="225" cy="145" r="20" fill="#12121e" stroke="#1e1e2e" strokeWidth="2" />
      <circle cx="225" cy="145" r="11" fill="#0a0a12" stroke="#1a1a28" strokeWidth="1" />
      <text x="160" y="178" textAnchor="middle" fill="rgba(255,255,255,0.15)"
        fontSize="9" fontFamily="monospace" letterSpacing="2">kirli araç</text>
    </svg>
  );
}

function AfterCarSVG() {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-label="Temizlik sonrası araç">
      <rect width="320" height="200" fill="#0d1117" />
      <ellipse cx="160" cy="158" rx="128" ry="10" fill="rgba(233,69,96,0.1)" />
      <path d="M40 140 Q50 110 80 100 L100 85 Q130 72 160 72 Q190 72 220 85 L240 100 Q270 110 280 140 Z"
        fill="#b91c1c" stroke="#e94560" strokeWidth="1.5" />
      <path d="M85 102 Q160 84 235 102"
        stroke="rgba(255,255,255,0.22)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M100 85 L115 72 Q145 62 175 62 Q200 62 225 72 L240 85 Z"
        fill="#1a3550" stroke="#2a5570" strokeWidth="1" />
      <path d="M108 83 Q155 67 232 84"
        stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="125" cy="110" rx="28" ry="9"
        fill="rgba(255,255,255,0.05)" transform="rotate(-18,125,110)" />
      <circle cx="95" cy="145" r="20" fill="#0f0f1e" stroke="#e94560" strokeWidth="2" />
      <circle cx="95" cy="145" r="11" fill="#070710" stroke="#2a2a3e" strokeWidth="1" />
      <circle cx="95" cy="145" r="4" fill="#e94560" />
      <line x1="95" y1="124" x2="95" y2="128" stroke="#444" strokeWidth="1.5" />
      <line x1="95" y1="162" x2="95" y2="166" stroke="#444" strokeWidth="1.5" />
      <line x1="74" y1="145" x2="78" y2="145" stroke="#444" strokeWidth="1.5" />
      <line x1="112" y1="145" x2="116" y2="145" stroke="#444" strokeWidth="1.5" />
      <circle cx="225" cy="145" r="20" fill="#0f0f1e" stroke="#e94560" strokeWidth="2" />
      <circle cx="225" cy="145" r="11" fill="#070710" stroke="#2a2a3e" strokeWidth="1" />
      <circle cx="225" cy="145" r="4" fill="#e94560" />
      <line x1="225" y1="124" x2="225" y2="128" stroke="#444" strokeWidth="1.5" />
      <line x1="225" y1="162" x2="225" y2="166" stroke="#444" strokeWidth="1.5" />
      <line x1="204" y1="145" x2="208" y2="145" stroke="#444" strokeWidth="1.5" />
      <line x1="242" y1="145" x2="246" y2="145" stroke="#444" strokeWidth="1.5" />
      <text x="160" y="178" textAnchor="middle" fill="rgba(233,69,96,0.6)"
        fontSize="9" fontFamily="monospace" letterSpacing="2">temiz araç</text>
    </svg>
  );
}