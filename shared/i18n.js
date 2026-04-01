// ─────────────────────────────────────────────
//  i18n  –  Tüm UI string'leri burada yaşar
//  Kullanım: t('hero.title')
// ─────────────────────────────────────────────

export const translations = {

  // ── NAVBAR ────────────────────────────────
  nav: {
    services:  { tr: "Hizmetler",  en: "Services"  },
    trust:     { tr: "Yorumlar",   en: "Reviews"   },
    pricing:   { tr: "Fiyatlar",   en: "Pricing"   },
    contact:   { tr: "İletişim",   en: "Contact"   },
    cta:       { tr: "Randevu Al", en: "Book Now"  },
  },

  // ── HERO ──────────────────────────────────
  hero: {
    headline:    { tr: "Aracını 1 Günde Sıfır Gibi Yapıyoruz",          en: "We Make Your Car Look Brand New in 1 Day"         },
    subheadline: { tr: "Profesyonel detailing hizmeti – Bursa",           en: "Professional detailing service – Bursa, Turkey"   },
    badge:       { tr: "🏆 100+ memnun müşteri",                          en: "🏆 100+ happy customers"                          },
    ctaWhatsapp: { tr: "WhatsApp ile Yaz",                                en: "Message on WhatsApp"                              },
    ctaCall:     { tr: "Hemen Ara",                                       en: "Call Now"                                         },
    beforeLabel: { tr: "Önce",                                            en: "Before"                                           },
    afterLabel:  { tr: "Sonra",                                           en: "After"                                            },
  },

  // ── HİZMETLER ─────────────────────────────
  services: {
    sectionTitle:    { tr: "Ne Yapıyoruz?",               en: "What We Do"                   },
    sectionSubtitle: { tr: "Her araç, her bütçe için.",   en: "For every car, every budget." },
    items: {
      interior: {
        title:    { tr: "İç Temizlik",                       en: "Interior Cleaning"                },
        desc:     { tr: "Döşeme, tavan, torpido – derine kadar temizlik.", en: "Upholstery, ceiling, dashboard – deep clean." },
        icon:     "🪑",
      },
      exterior: {
        title:    { tr: "Dış Yıkama",                        en: "Exterior Wash"                    },
        desc:     { tr: "Elle yıkama, jant temizliği, kurulama.", en: "Hand wash, rim cleaning, drying." },
        icon:     "💧",
      },
      polishing: {
        title:    { tr: "Pasta & Cila",                      en: "Polishing & Wax"                  },
        desc:     { tr: "Ince çizikler gider, boya parlar.", en: "Removes fine scratches, paint gleams." },
        icon:     "✨",
      },
      ceramic: {
        title:    { tr: "Seramik Kaplama",                   en: "Ceramic Coating"                  },
        desc:     { tr: "Uzun ömürlü koruma, 2+ yıl dayanım.", en: "Long-lasting protection, 2+ years durability." },
        icon:     "🛡️",
      },
      full: {
        title:    { tr: "Full Detailing",                    en: "Full Detailing"                   },
        desc:     { tr: "İç + dış + pasta. Araç sıfırlanır.", en: "Interior + exterior + polish. Complete reset." },
        icon:     "🚗",
      },
    },
  },

  // ── GÜVEN BLOĞU ───────────────────────────
  trust: {
    sectionTitle:    { tr: "Müşteriler Ne Diyor?",          en: "What Our Customers Say"     },
    statsLabel1:     { tr: "Temizlenen Araç",               en: "Cars Serviced"              },
    statsLabel2:     { tr: "Yıllık Deneyim",                en: "Years of Experience"        },
    statsLabel3:     { tr: "Müşteri Memnuniyeti",           en: "Customer Satisfaction"      },
    statsLabel4:     { tr: "Dakika İçinde Yanıt",           en: "Min. WhatsApp Reply"        },
    testimonials: [
      {
        name:   "Ahmet Y.",
        rating: 5,
        text: {
          tr: "Arabam yıllardır bu kadar temiz olmamıştı. Seramik kaplama sonrası yağmur suyunu siliyorum gibi görünüyor.",
          en: "My car hasn't been this clean in years. After the ceramic coating, water just beads right off.",
        },
      },
      {
        name:   "Merve K.",
        rating: 5,
        text: {
          tr: "Full detailing aldım, içerisi neredeyse sıfır gibi. Fiyat kalitesine göre çok uygun.",
          en: "Got the full detailing, interior looks almost brand new. Great value for money.",
        },
      },
      {
        name:   "Burak D.",
        rating: 5,
        text: {
          tr: "WhatsApp'tan sordum, 10 dakikada cevap geldi. Ertesi gün arabayı teslim ettim, aynı gün aldım.",
          en: "Asked on WhatsApp, got a reply in 10 minutes. Dropped the car next morning, picked it up same day.",
        },
      },
    ],
  },

  // ── FİYATLAR ──────────────────────────────
  pricing: {
    sectionTitle:    { tr: "Fiyatlar",                      en: "Pricing"                    },
    sectionSubtitle: { tr: "Net fiyat, sürpriz yok.",       en: "Clear pricing, no surprises." },
    currency:        { tr: "₺",                             en: "₺"                          },
    ctaLabel:        { tr: "WhatsApp'tan Al",               en: "Order on WhatsApp"          },
    note:            { tr: "* Araç büyüklüğüne göre fiyat değişebilir. Kesin fiyat için yazın.", en: "* Price may vary by vehicle size. Write us for exact quote." },
    plans: [
      {
        id:       "basic",
        title:    { tr: "Temel",          en: "Basic"        },
        price:    "500",
        popular:  false,
        features: {
          tr: ["Dış yıkama", "İç süpürge", "Cam temizliği", "Jant temizliği"],
          en: ["Exterior wash", "Interior vacuum", "Glass cleaning", "Rim cleaning"],
        },
      },
      {
        id:       "detail",
        title:    { tr: "Detailing",      en: "Detailing"    },
        price:    "1200",
        popular:  true,
        features: {
          tr: ["Temel paket +", "Döşeme temizliği", "Torpido detay", "Pasta & cila"],
          en: ["Basic package +", "Upholstery cleaning", "Dashboard detail", "Polish & wax"],
        },
      },
      {
        id:       "ceramic",
        title:    { tr: "Seramik",        en: "Ceramic"      },
        price:    "3500",
        popular:  false,
        features: {
          tr: ["Full detailing +", "Seramik kaplama", "2 yıl garanti", "Ücretsiz check-up"],
          en: ["Full detailing +", "Ceramic coating", "2-year warranty", "Free check-up"],
        },
      },
    ],
  },

  // ── WHATSAPP CTA ──────────────────────────
  whatsapp: {
    floatingTooltip: { tr: "Hemen Yaz!",                    en: "Chat Now!"                  },
    bannerText:      { tr: "Ücretsiz fiyat al – 30 dk'da yanıt", en: "Get a free quote – reply in 30 min" },
    bannerCta:       { tr: "WhatsApp'a Geç",                en: "Open WhatsApp"              },
  },

  // ── FOOTER ────────────────────────────────
  footer: {
    tagline:    { tr: "Bursa'nın detailing uzmanı.",         en: "Bursa's detailing specialist." },
    phone:      { tr: "Telefon",                             en: "Phone"                       },
    location:   { tr: "Konum",                               en: "Location"                    },
    locationVal:{ tr: "Bursa, Türkiye",                      en: "Bursa, Turkey"               },
    mapLink:    { tr: "Haritada Gör →",                      en: "View on Map →"               },
    follow:     { tr: "Takip Et",                            en: "Follow Us"                   },
    rights:     { tr: "Tüm haklar saklıdır.",                en: "All rights reserved."        },
  },

};