import React from "react";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../shared/i18n";
import PricingCard from "../ui/PricingCard";

export default function PricingSection() {
  const { t } = useLanguage();
  const { pricing } = translations;

  return (
    <section className="pricing" id="pricing" aria-label={t(pricing.sectionTitle)}>
      <div className="pricing__bg" aria-hidden="true" />

      <div className="pricing__container">

        {/* Başlık */}
        <div className="pricing__header">
          <h2 className="pricing__title">{t(pricing.sectionTitle)}</h2>
          <p className="pricing__subtitle">{t(pricing.sectionSubtitle)}</p>
        </div>

        {/* Kartlar */}
        <div className="pricing__grid">
          {pricing.plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              title={plan.title}       /* { tr, en } – PricingCard içinde t() çağırıyor */
              price={plan.price}
              features={plan.features} /* { tr: [], en: [] } – PricingCard lang ile seçiyor */
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>

        {/* Alt not */}
        <p className="pricing__note">{t(pricing.note)}</p>

      </div>
    </section>
  );
}