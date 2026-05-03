"use client";

import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { use } from "react";
import { SectionWrapper, FadeInChild } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { t } = useLanguage();
  const service = SERVICES.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link href="/services" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] font-medium mb-12 transition-colors">
          <ArrowLeft size={16} />
          {t("services.back")}
        </Link>

        {/* Hero Section of Service */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] mb-8">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-6 leading-tight">
              {t(`services.items.${service.id}.title`)}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              {t(`services.items.${service.id}.desc`)} {t("hero.subtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-bold rounded-[8px] transition-all bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] px-8 py-4 text-lg shadow-sm"
            >
              {t("services.startProject")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] w-full rounded-[24px] overflow-hidden shadow-xl"
          >
            <Image 
              src={service.image} 
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </motion.div>
        </div>

        {/* Features / Details */}
        <SectionWrapper className="bg-white rounded-[24px] p-10 md:p-16 border border-[var(--border)] shadow-sm">
          <FadeInChild>
            <h2 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-12 text-center">
              {t("services.whyUs")}
            </h2>
          </FadeInChild>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Qualité irréprochable",
              "Équipe dédiée et experte",
              "Suivi et maintenance",
              "Innovation technologique",
              "Sécurité des données",
              "Respect des délais"
            ].map((feature, idx) => (
              <FadeInChild key={idx}>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-[var(--success)] mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] mb-2">{feature}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Notre engagement qualité pour assurer la réussite de votre transformation digitale.</p>
                  </div>
                </div>
              </FadeInChild>
            ))}
          </div>
        </SectionWrapper>

      </div>
    </div>
  );
}
