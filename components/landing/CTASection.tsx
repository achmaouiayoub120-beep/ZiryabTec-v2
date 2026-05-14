"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CTASection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-[var(--bg)]">
      <div className="relative w-full max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="relative overflow-hidden rounded-[16px] p-10 md:p-16 text-center"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid var(--border)",
            boxShadow: "var(--card-shadow), inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          {/* Gradient border shimmer */}
          <div
            className="absolute inset-0 rounded-[16px] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(26,86,219,0.08), rgba(6,182,212,0.05), rgba(212,168,67,0.05))",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
              {t("about.cta.title")} <GradientText>{t("about.cta.titleAccent")}</GradientText> ?
            </h2>

            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed">
              {language === "fr" 
                ? "Contactez-nous pour un audit gratuit de votre infrastructure digitale." 
                : "Contact us for a free audit of your digital infrastructure."}
            </p>

            <div className="mb-8">
              <Button href="/contact" variant="primary" size="lg" magnetic className="animate-shimmer">
                {language === "fr" ? "Démarrer mon projet" : "Start my project"} <span className="ml-2">→</span>
              </Button>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-[var(--text-muted)]">
              {(language === "fr" 
                ? ["Audit gratuit", "Devis sous 48h", "Accompagnement sur mesure"] 
                : ["Free audit", "Quote in 48h", "Tailor-made support"]
              ).map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check size={14} className="text-[var(--success)]" />
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-8 text-sm text-[var(--text-muted)] italic">
              {language === "fr" ? "L'innovation au service de l'humain" : "Innovation for humanity"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
