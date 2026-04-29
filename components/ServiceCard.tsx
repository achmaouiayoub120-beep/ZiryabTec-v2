"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
  index: number;
}

export default function ServiceCard({ id, title, icon, desc, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt angles (max 10 degrees)
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        ref={cardRef}
        className="glass rounded-2xl p-8 h-full flex flex-col relative group overflow-hidden transition-colors duration-500 hover:border-[var(--hz-accent-1)]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--hz-accent-1)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Icon */}
        <div 
          className="w-16 h-16 rounded-xl bg-[var(--hz-bg)] border border-[var(--hz-border)] flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:border-[var(--hz-accent-1)]/50 transition-colors"
          style={{ transform: "translateZ(30px)" }}
        >
          {icon}
        </div>
        
        {/* Content */}
        <div style={{ transform: "translateZ(20px)" }} className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-[var(--hz-text-muted)] text-sm leading-relaxed mb-8 flex-1">
            {desc}
          </p>
          
          <Link 
            href={`/services#${id}`}
            className="inline-flex items-center text-sm font-bold text-white group/link self-start mt-auto"
            data-cursor="button"
          >
            En savoir plus 
            <span className="ml-2 transform transition-transform group-hover/link:translate-x-1 text-[var(--hz-accent-1)]">
              →
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
