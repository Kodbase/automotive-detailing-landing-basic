import { useLanguage } from "../../../../hooks/useLanguage";

/**
 * TestimonialCard
 *
 * Props:
 *   name    → string
 *   rating  → 1–5
 *   text    → { tr, en }
 *   index   → number – stagger için
 */
export default function TestimonialCard({ name, rating = 5, text, index = 0 }) {
  const { t } = useLanguage();

  return (
    <article
      className="tcard"
      style={{ "--stagger": index }}
    >
      {/* Tırnak işareti dekoratif */}
      <span className="tcard__quote" aria-hidden="true">"</span>

      {/* Yıldızlar */}
      <div className="tcard__stars" aria-label={`${rating} yıldız`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < rating} />
        ))}
      </div>

      {/* Yorum metni */}
      <p className="tcard__text">{t(text)}</p>

      {/* İsim */}
      <footer className="tcard__footer">
        <div className="tcard__avatar" aria-hidden="true">
          {name.charAt(0)}
        </div>
        <span className="tcard__name">{name}</span>
      </footer>
    </article>
  );
}

function StarIcon({ filled }) {
  return (
    <svg
      className={["tcard__star", filled ? "tcard__star--filled" : ""].join(" ")}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 1.2l1.75 3.54 3.91.57-2.83 2.75.67 3.89L8 10.08l-3.5 1.84.67-3.9L2.34 5.3l3.91-.57L8 1.2z" />
    </svg>
  );
}