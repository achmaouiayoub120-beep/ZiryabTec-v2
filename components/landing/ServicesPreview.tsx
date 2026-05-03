"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";
import { SectionWrapper, FadeInChild } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ServicesPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-[var(--bg)]">
      <SectionWrapper>
        {/* Section Header */}
        <FadeInChild className="text-center mb-16">
          <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
            {t("nav.services").toUpperCase()}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            {t("services.title")}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            {t("services.subtitle")}
          </p>
        </FadeInChild>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0, 0, 0.2, 1] }}
              className={index < 2 ? "md:col-span-2" : "md:col-span-1"}
            >
              <Link href={`/services/${service.id}`} className="block h-full">
                <div className="elite-card p-8 h-full group hover:border-[var(--accent)] transition-colors duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] mb-5 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-3">
                    {t(`services.items.${service.id}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {t(`services.items.${service.id}.desc`)}
                  </p>

                  {/* Link indicator */}
                  <span className="inline-flex items-center text-sm font-bold text-[var(--accent)] group-hover:gap-2 transition-all duration-300">
                    {t("services.more")}
                    <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
