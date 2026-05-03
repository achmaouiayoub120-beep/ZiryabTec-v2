"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";
import { SectionWrapper, FadeInChild } from "@/components/ui/SectionWrapper";
import { GradientText } from "@/components/ui/GradientText";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <section className="pt-24 pb-20">
        <SectionWrapper>
          <FadeInChild className="text-center">
            <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
              {t("nav.services").toUpperCase()}
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
              {language === "fr" ? "Nos" : "Our"} <GradientText>{t("nav.services")}</GradientText>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed mb-16">
              {t("services.subtitle")}
            </p>
          </FadeInChild>

          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: [0, 0, 0.2, 1] }}
                >
                  <Link href={`/services/${service.id}`} className="block h-full">
                    <div className="elite-card p-8 h-full flex flex-col group hover:border-[var(--accent)] transition-colors duration-300 bg-white">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-4">
                        {t(`services.items.${service.id}.title`)}
                      </h2>

                      {/* Description */}
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-8 flex-1">
                        {t(`services.items.${service.id}.desc`)}
                      </p>

                      {/* Link indicator */}
                      <div className="mt-auto flex items-center text-sm font-bold text-[var(--accent)] group-hover:gap-2 transition-all duration-300">
                        {t("services.more")}
                        <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
}
