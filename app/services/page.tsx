"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 relative z-10">
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--hz-border)] text-[var(--hz-accent-2)] text-xs font-bold tracking-widest uppercase mb-6">
            Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Nos <span className="text-gradient italic font-serif">Services</span>
          </h1>
          <p className="text-[var(--hz-text-muted)] text-lg max-w-2xl mx-auto">
            Des solutions technologiques de pointe conçues pour répondre à vos défis métiers spécifiques.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="flex flex-col gap-32">
          {SERVICES.map((service, index) => (
            <motion.div
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{service.title}</h2>
                <p className="text-[var(--hz-text-muted)] text-lg leading-relaxed mb-8">
                  {service.desc} Nous mettons en place des architectures robustes et évolutives qui grandissent avec votre entreprise.
                </p>
                
                <ul className="mb-8 space-y-4">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-[var(--hz-accent-1)]" />
                      Avantage stratégique et fonctionnalité {item}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  className="inline-flex items-center text-sm font-bold text-[var(--hz-accent-1)] pb-1 border-b border-[var(--hz-accent-1)] hover:text-white transition-colors group"
                  data-cursor="button"
                >
                  Demander un devis
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Visual/Mockup */}
              <div className="w-full lg:w-1/2">
                <div className="glass rounded-3xl aspect-[4/3] relative overflow-hidden group border border-[var(--hz-border)] transition-colors duration-500 hover:border-[var(--hz-accent-1)]">
                  <Image 
                    src={(service as any).image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-[var(--hz-accent-1)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
