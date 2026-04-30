"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      // Reset after 3 seconds
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 relative z-10">
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--hz-border)] text-[var(--hz-accent-1)] text-xs font-bold tracking-widest uppercase mb-6">
              Contact
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Parlons de votre <span className="text-gradient italic font-serif">Projet</span>
            </h1>
            <p className="text-[var(--hz-text-muted)] text-lg mb-12">
              Vous avez un projet de transformation digitale ? Notre équipe d'experts est prête à relever le défi.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--hz-accent-1)] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Téléphone</h3>
                  <a href={`tel:${SITE_CONFIG.phone?.replace(/\s+/g, '')}`} className="text-[var(--hz-text-muted)] hover:text-[var(--hz-accent-1)] transition-colors" data-cursor="button">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--hz-accent-1)] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-[var(--hz-text-muted)] hover:text-[var(--hz-accent-1)] transition-colors" data-cursor="button">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--hz-accent-1)] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Bureaux</h3>
                  <p className="text-[var(--hz-text-muted)]">
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12 rounded-3xl overflow-hidden h-64 glass border border-[var(--hz-border)] relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.5600054366!2d-7.669394541793798!3d33.57240316491763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1683030281234!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 pointer-events-auto"
              />
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-8">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold text-[var(--hz-text-muted)]">Nom complet</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-[var(--hz-bg)]/50 border border-[var(--hz-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--hz-accent-1)] transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold text-[var(--hz-text-muted)]">Email professionnel</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-[var(--hz-bg)]/50 border border-[var(--hz-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--hz-accent-1)] transition-colors"
                      placeholder="jean@entreprise.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-bold text-[var(--hz-text-muted)]">Service souhaité</label>
                  <select 
                    id="service" 
                    required
                    defaultValue=""
                    className="w-full bg-[var(--hz-bg)]/50 border border-[var(--hz-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--hz-accent-1)] transition-colors appearance-none"
                  >
                    <option value="" disabled>Sélectionnez un service</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id} className="bg-[var(--hz-surface)]">{s.title}</option>)}
                    <option value="other" className="bg-[var(--hz-surface)]">Autre / Projet global</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold text-[var(--hz-text-muted)]">Détails du projet</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full bg-[var(--hz-bg)]/50 border border-[var(--hz-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--hz-accent-1)] transition-colors resize-none"
                    placeholder="Décrivez brièvement vos besoins et objectifs..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={formState !== "idle"}
                  className="w-full py-4 rounded-xl font-bold text-white relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                  data-cursor="button"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--hz-accent-1)] to-[var(--hz-accent-2)] transition-transform duration-300 group-hover:scale-105" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {formState === "idle" && "Envoyer le message"}
                    {formState === "submitting" && "Envoi en cours..."}
                    {formState === "success" && "Message envoyé ✓"}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
