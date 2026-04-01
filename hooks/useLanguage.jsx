import React from "react";
import { useState, useCallback, createContext, useContext } from "react";
import { translations } from "../shared/i18n";
import { WHATSAPP_MESSAGES, BUSINESS } from "../shared/constants";

// ─── Context ──────────────────────────────────────────────────────────────────
export const LanguageContext = createContext(null);

// ─── Provider ─────────────────────────────────────────────────────────────────
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    // localStorage'dan oku, yoksa tarayıcı diline bak, default TR
    const saved = typeof window !== "undefined" && localStorage.getItem("lang");
    if (saved === "en" || saved === "tr") return saved;
    const browser = navigator.language?.slice(0, 2);
    return browser === "en" ? "en" : "tr";
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "tr" ? "en" : "tr";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  const switchLang = useCallback((code) => {
    if (code === "tr" || code === "en") {
      localStorage.setItem("lang", code);
      setLang(code);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within <LanguageProvider>");

  const { lang, toggleLang, switchLang } = ctx;

  /**
   * Bir çeviri nesnesinden doğru dili döner.
   * t({ tr: "Merhaba", en: "Hello" }) → "Merhaba"  (lang=tr)
   * t(translations.hero.headline)     → string
   * t("hero.title")                   → dot-path lookup (opsiyonel)
   */
  const t = useCallback(
    (keyOrObj) => {
      if (!keyOrObj) return "";

      // Doğrudan { tr, en } objesi
      if (typeof keyOrObj === "object" && (keyOrObj.tr || keyOrObj.en)) {
        return keyOrObj[lang] ?? keyOrObj.tr ?? "";
      }

      // "hero.headline" gibi dot-path
      if (typeof keyOrObj === "string") {
        const parts = keyOrObj.split(".");
        let node = translations;
        for (const part of parts) {
          node = node?.[part];
          if (!node) return keyOrObj; // key bulunamazsa key'i döner
        }
        if (typeof node === "object" && (node.tr || node.en)) {
          return node[lang] ?? node.tr ?? "";
        }
      }

      return String(keyOrObj);
    },
    [lang]
  );

  /** WhatsApp URL'sini hazır döner */
  const whatsappUrl = useCallback(() => {
    const msg = encodeURIComponent(WHATSAPP_MESSAGES[lang] ?? WHATSAPP_MESSAGES.tr);
    return `https://wa.me/${BUSINESS.whatsapp}?text=${msg}`;
  }, [lang]);

  return { lang, toggleLang, switchLang, t, whatsappUrl };
}