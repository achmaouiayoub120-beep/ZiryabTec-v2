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
    <div className="relative min-h-screen bg-[var(--bg)] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <section className="pt-24 pb-20 relative z-10">
        <SectionWrapper>
          <FadeInChild className="text-center">
            <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
              {t("nav.services").toUpperCase()}
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 text-[var(--text-primary)]">
              {language === "fr" ? "Nos" : "Our"} <GradientText>{t("nav.services")}</GradientText>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed mb-16">
              {t("services.subtitle")}
            </p>
          </FadeInChild>

          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => {
                const isFormation = service.id === "formation";
                const href = isFormation ? "https://ziryab-for-v4.vercel.app/" : `/services/${service.id}`;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: index * 0.08, ease: [0, 0, 0.2, 1] }}
                  >
                    <Link 
                      href={href} 
                      className="block h-full relative"
                      {...(isFormation ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <div 
                        className={`group relative h-full min-h-[320px] p-8 md:p-10 flex flex-col justify-between overflow-hidden rounded-2xl transition-all duration-500 border bg-white hover:-translate-y-2 ${
                          isFormation 
                            ? 'border-[var(--card-accent)] shadow-[0_0_20px_var(--card-glow)]' 
                            : 'border-gray-100 hover:border-[var(--card-accent)] hover:shadow-[0_0_30px_var(--card-glow)] shadow-sm'
                        }`}
                        style={{
                          "--card-glow": (service as any).glowColor,
                          "--card-accent": (service as any).accentColor,
                        } as React.CSSProperties}
                      >
                        
                        {/* Gradient background overlay (Glow interne) */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${(service as any).gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[inherit]`}
                        />

                        {/* Contenu de la carte avec z-10 pour être au-dessus du glow */}
                        <div className="relative z-10 flex flex-col h-full">
                          
                          {/* Badge pour Formation */}
                          {isFormation && (
                            <span 
                              className="absolute -top-2 -right-2 text-white text-[10px] sm:text-xs px-3 py-1.5 rounded-full font-bold shadow-sm flex items-center gap-1.5"
                              style={{ background: (service as any).accentColor }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              Plateforme E-learning
                            </span>
                          )}

                          {/* Icon */}
                          <div 
                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm"
                            style={{ 
                              background: `linear-gradient(135deg, ${(service as any).accentColor}15, ${(service as any).accentColor}05)`,
                              color: (service as any).accentColor,
                              border: `1px solid ${(service as any).accentColor}30`
                            }}
                          >
                            {service.icon}
                          </div>

                          {/* Title */}
                          <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
                            {t(`services.items.${service.id}.title`)}
                          </h2>

                          {/* Description */}
                          <p className="text-gray-500 leading-relaxed mb-8 flex-1 group-hover:text-gray-700 transition-colors duration-300">
                            {t(`services.items.${service.id}.desc`)}
                          </p>

                          {/* Link indicator / CTA */}
                          {isFormation ? (
                            <div className="mt-auto">
                              <span 
                                className="inline-flex items-center justify-center px-4 py-3 mt-2 text-sm font-bold text-white rounded-xl transition-all duration-300 w-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                                style={{ background: `linear-gradient(135deg, ${(service as any).accentColor}, #f43f5e)` }}
                              >
                                Explorer les formations
                              </span>
                            </div>
                          ) : (
                            <div 
                              className="mt-auto flex items-center text-sm font-bold transition-all duration-300 group-hover:gap-3"
                              style={{ color: (service as any).accentColor }}
                            >
                              {t("services.more")}
                              <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
}
