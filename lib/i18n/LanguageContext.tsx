"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language } from "./dictionaries";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
  dict: typeof dictionaries.fr;
  isMounted: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "fr" || savedLang === "en")) {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  // On the first render (SSR and first Client pass), always use "fr" 
  // to avoid hydration mismatch with the server.
  const activeLanguage = isMounted ? language : "fr";
  const dict = dictionaries[activeLanguage];

  const t = (path: string) => {
    const keys = path.split(".");
    let result: any = dict;
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language: activeLanguage, setLanguage, t, dict, isMounted }}>
      <div className={!isMounted ? "invisible" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
