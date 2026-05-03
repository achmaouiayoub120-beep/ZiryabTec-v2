import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientText({
  children,
  className,
  gradient = "linear-gradient(135deg, var(--accent), #06B6D4)",
}: GradientTextProps) {
  return (
    <span
      className={cn("inline-block bg-clip-text text-transparent", className)}
      style={{ backgroundImage: gradient }}
    >
      {children}
    </span>
  );
}
