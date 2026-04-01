import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../shared/i18n";
import WhatsAppButton from "./WhatsAppButton";

/**
 * PricingCard
 *
 * Props:
 *   title    → { tr, en }
 *   price    → string  ("1200")
 *   features → { tr: string[], en: string[] }
 *   popular  → boolean
 *   index    → number
 */
export default function PricingCard({ title, price, features, popular = false, index = 0 }) {
  const { t, lang } = useLanguage();
  const currency = t(translations.pricing.currency);
  const featureList = features[lang] ?? features.tr;

  return (
    <article
      className={["pcard", popular ? "pcard--popular" : ""].join(" ")}
      style={{ "--stagger": index }}
    >
      {popular && (
        <div className="pcard__badge">
          {lang === "tr" ? "En Popüler" : "Most Popular"}
        </div>
      )}

      <header className="pcard__header">
        <h3 className="pcard__title">{t(title)}</h3>
        <div className="pcard__price">
          <span className="pcard__currency">{currency}</span>
          <span className="pcard__amount">{price}</span>
        </div>
      </header>

      <ul className="pcard__features" role="list">
        {featureList.map((feature, i) => (
          <li key={i} className="pcard__feature">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pcard__cta">
        <WhatsAppButton
          variant={popular ? "primary" : "outline"}
          size="md"
          label={t(translations.pricing.ctaLabel)}
          fullWidth
          pulse={popular}
        />
      </div>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg
      className="pcard__check"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="3,8 6.5,11.5 13,5" />
    </svg>
  );
}