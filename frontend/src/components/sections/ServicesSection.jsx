import React from "react";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../shared/i18n";
import { SERVICE_IDS } from "../../../../shared/constants";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
  const { t } = useLanguage();
  const { services } = translations;

  return (
    <section className="services" id="services" aria-label={t(services.sectionTitle)}>
      <div className="services__container">

        <div className="services__header">
          <h2 className="services__title">{t(services.sectionTitle)}</h2>
          <p className="services__subtitle">{t(services.sectionSubtitle)}</p>
        </div>

        <div className="services__grid">
          {SERVICE_IDS.map((id, index) => {
            const item = services.items[id];
            if (!item) return null;
            return (
              <ServiceCard
                key={id}
                icon={item.icon}
                title={item.title}   /* { tr, en } – ServiceCard içinde t() çağırıyor */
                desc={item.desc}     /* { tr, en } – ServiceCard içinde t() çağırıyor */
                index={index}        /* --stagger animasyonu için */
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}