import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* Animation tokens pour Framer Motion */
export const transitions = {
  spring: { type: "spring", stiffness: 400, damping: 30 },
  smooth: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  enter:  { duration: 0.4, ease: [0, 0, 0.2, 1] },
  exit:   { duration: 0.2, ease: [0.4, 0, 1, 1] },
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.05 } },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: [0, 0, 0.2, 1] } },
};
