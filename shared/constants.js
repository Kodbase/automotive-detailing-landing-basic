// ─────────────────────────────────────────────
//  BUSINESS CONFIG  –  buraya gerçek bilgileri gir
// ─────────────────────────────────────────────

export const BUSINESS = {
  name: "AutoDetail Bursa",
  phone: "+90 XXX XXX XX XX",           // ← gerçek numara
  whatsapp: "905XXXXXXXXX",              // ← ülke kodu + numara, başında + yok
  instagram: "@autodetail.bursa",        // ← gerçek handle
  instagramUrl: "https://instagram.com/autodetail.bursa",
  googleMapsUrl: "https://maps.google.com/?q=Bursa",  // ← gerçek pin
  city: "Bursa",
};

// Hazır WhatsApp mesajları (dile göre)
export const WHATSAPP_MESSAGES = {
  tr: "Merhaba, araç detailing hizmeti hakkında bilgi almak istiyorum.",
  en: "Hello, I would like to get information about your car detailing services.",
};

// Rakamlar – güven bloğu için
export const STATS = {
  carsServiced: 100,
  yearsActive: 3,
  happyClients: 95,       // yüzde
  responseMinutes: 30,    // dakika içinde WhatsApp yanıtı
};

// Hizmet ID'leri – i18n ile eşleştirilir
export const SERVICE_IDS = [
  "interior",
  "exterior",
  "polishing",
  "ceramic",
  "full",
];

// Renk tokenları (CSS değişkenleriyle de sync tutulur)
export const THEME = {
  primary: "#1A1A2E",
  accent: "#E94560",
  gold: "#C9A84C",
  surface: "#16213E",
  text: "#F0F0F0",
};