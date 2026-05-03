"use client";

import { motion } from "framer-motion";
import { ReactNode, MouseEvent, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  magnetic?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  magnetic = false,
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!magnetic || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Limit the magnetic effect to a fraction of the distance (15%)
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-[0_0_20px_rgba(26,86,219,0.3)]",
    secondary: "bg-transparent border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
    ghost: "bg-transparent text-[var(--text-primary)] hover:text-[var(--accent)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const commonClasses = cn(
    "inline-flex items-center justify-center font-bold rounded-[8px] transition-colors duration-300",
    variants[variant],
    sizes[size],
    className
  );

  const MotionLink = motion.create(Link);

  if (href) {
    return (
      <MotionLink
        href={href}
        ref={buttonRef as any}
        className={commonClasses}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.96 }}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        onMouseMove={handleMouseMove as any}
        onMouseLeave={handleMouseLeave}
        onClick={onClick as any}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      ref={buttonRef as any}
      className={commonClasses}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.96 }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove as any}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
