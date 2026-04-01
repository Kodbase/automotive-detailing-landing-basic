import React from "react";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../shared/i18n";
import { BUSINESS } from "../../../../shared/constants";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function FooterSection() {
  const { t, lang, toggleLang } = useLanguage();
  const { footer, nav } = translations;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer" aria-label="Footer">
      <div className="footer__bg" aria-hidden="true" />

      <div className="footer__container">

        {/* ── Üst satır ── */}
        <div className="footer__top">

          {/* Marka + tagline */}
          <div className="footer__brand">
            <span className="footer__logo">{BUSINESS.name}</span>
            <p className="footer__tagline">{t(footer.tagline)}</p>
            <div className="footer__wa">
              <WhatsAppButton variant="primary" size="sm" pulse />
            </div>
          </div>

          {/* İletişim */}
          <div className="footer__col">
            <h3 className="footer__col-title">{t(footer.phone)}</h3>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="footer__link"
              aria-label={BUSINESS.phone}
            >
              {BUSINESS.phone}
            </a>
          </div>

          {/* Konum */}
          <div className="footer__col">
            <h3 className="footer__col-title">{t(footer.location)}</h3>
            <span className="footer__text">{t(footer.locationVal)}</span>
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link footer__link--accent"
            >
              {t(footer.mapLink)}
            </a>
          </div>

          {/* Sosyal */}
          <div className="footer__col">
            <h3 className="footer__col-title">{t(footer.follow)}</h3>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link footer__social"
              aria-label="Instagram"
            >
              <InstagramIcon />
              {BUSINESS.instagram}
            </a>
          </div>

        </div>

        {/* ── Alt çizgi ── */}
        <div className="footer__bottom">
          <p className="footer__rights">
            © {currentYear} {BUSINESS.name}. {t(footer.rights)}
          </p>

          {/* Dil geçiş butonu */}
          <button
            className="footer__lang"
            onClick={toggleLang}
            aria-label="Switch language"
          >
            <span className={lang === "tr" ? "footer__lang-active" : ""}>TR</span>
            <span className="footer__lang-sep">|</span>
            <span className={lang === "en" ? "footer__lang-active" : ""}>EN</span>
          </button>
        </div>

      </div>
    </footer>
  );
}

/* ── Instagram SVG ── */
function InstagramIcon() {
  return (
    <svg
      className="footer__social-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}