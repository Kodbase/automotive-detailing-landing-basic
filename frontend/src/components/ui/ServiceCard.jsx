import { useLanguage } from "../../../../hooks/useLanguage";

/**
 * ServiceCard
 *
 * Props:
 *   icon     → emoji string  ("🪑")
 *   title    → { tr, en }
 *   desc     → { tr, en }
 *   index    → number – stagger animasyonu için (0,1,2...)
 */
export default function ServiceCard({ icon, title, desc, index = 0 }) {
  const { t } = useLanguage();

  return (
    <article
      className="service-card"
      style={{ "--stagger": index }}
    >
      <div className="service-card__icon-wrap" aria-hidden="true">
        <span className="service-card__icon">{icon}</span>
        <span className="service-card__icon-glow" />
      </div>
      <h3 className="service-card__title">{t(title)}</h3>
      <p className="service-card__desc">{t(desc)}</p>
    </article>
  );
}