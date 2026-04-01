import React from "react";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../shared/i18n";
import { STATS } from "../../../../shared/constants";
import TestimonialCard from "../ui/TestimonialCard";

export default function TrustSection() {
  const { t } = useLanguage();
  const { trust } = translations;

  const stats = [
    { value: `${STATS.carsServiced}+`, label: trust.statsLabel1 },
    { value: `${STATS.yearsActive}`,   label: trust.statsLabel2 },
    { value: `%${STATS.happyClients}`, label: trust.statsLabel3 },
    { value: `${STATS.responseMinutes}`, label: trust.statsLabel4 },
  ];

  return (
    <section className="trust" id="trust" aria-label={t(trust.sectionTitle)}>
      {/* Arka plan atmosferi */}
      <div className="trust__bg" aria-hidden="true" />

      <div className="trust__container">

        {/* Başlık */}
        <div className="trust__header">
          <h2 className="trust__title">{t(trust.sectionTitle)}</h2>
        </div>

        {/* İstatistik şeridi */}
        <div className="trust__stats" role="list">
          {stats.map(({ value, label }, i) => (
            <div className="trust__stat" role="listitem" key={i} style={{ "--stagger": i }}>
              <span className="trust__stat-value">{value}</span>
              <span className="trust__stat-label">{t(label)}</span>
            </div>
          ))}
        </div>

        {/* Yorum kartları */}
        <div className="trust__grid">
          {trust.testimonials.map((item, i) => (
            <TestimonialCard
              key={i}
              name={item.name}
              rating={item.rating}
              text={item.text}   /* { tr, en } – TestimonialCard içinde t() çağırıyor */
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
}