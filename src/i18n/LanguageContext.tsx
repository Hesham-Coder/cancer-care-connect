import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { Language, Direction, TranslationSet } from "./types";
import { en } from "./en";
import { ar } from "./ar";

interface LanguageContextValue {
  lang: Language;
  dir: Direction;
  t: TranslationSet;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const translations: Record<Language, TranslationSet> = { en, ar };

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ccc-lang";

function getInitialLang(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") return saved;
  } catch {}
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLang);

  const dir: Direction = lang === "ar" ? "rtl" : "ltr";
  const t = translations[lang];

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "ar" : "en");
  }, [lang, setLang]);

  // Sync HTML attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    // Add/remove font for Arabic
    if (lang === "ar") {
      document.documentElement.classList.add("font-arabic");
    } else {
      document.documentElement.classList.remove("font-arabic");
    }
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, dir, t, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
