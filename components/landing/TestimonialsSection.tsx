"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionWrapper, FadeInChild } from "@/components/ui/SectionWrapper";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return TESTIMONIALS.length - 1;
      if (next >= TESTIMONIALS.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      filter: "blur(10px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    }),
  };

  // Generate initials from name
  const initials = current.name.split(" ").map((n) => n[0]).join("");

  return (
    <section className="py-20 md:py-32 bg-[var(--bg-alt)]">
      <SectionWrapper>
        {/* Header */}
        <FadeInChild className="text-center mb-16">
          <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
            TÉMOIGNAGES
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            La confiance de nos clients est notre plus belle récompense.
          </p>
        </FadeInChild>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden relative min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <div className="elite-card p-8 md:p-12 text-center">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    style={{ background: "linear-gradient(135deg, var(--accent), #06B6D4)" }}
                  >
                    {initials}
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        className="text-[var(--gold)] fill-[var(--gold)]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl italic text-[var(--text-secondary)] mb-8 leading-relaxed max-w-2xl mx-auto">
                    &ldquo;{current.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-display font-bold text-[var(--text-primary)] text-lg">
                      {current.name}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      {current.role}, {(current as any).company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-[var(--accent)] w-8"
                      : "bg-[var(--border)] hover:bg-[var(--border-hover)]"
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
