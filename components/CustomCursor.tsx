"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isText, setIsText] = useState(false);
  
  // Track actual mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse position with spring physics
  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Offset by half the width/height of the cursor (16px) to center it
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if we are hovering a clickable element
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('data-cursor') === 'button';
        
      // Check if we are hovering text that should shrink the cursor
      const isTextNode = 
        target.tagName === 'P' || 
        target.tagName === 'H1' || 
        target.tagName === 'H2' || 
        target.tagName === 'H3' ||
        target.getAttribute('data-cursor') === 'text';

      setIsHovering(!!isClickable);
      setIsText(!!isTextNode && !isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Determine variants for animation
  const variants = {
    default: {
      scale: 1,
      opacity: 1,
      backgroundColor: "var(--hz-text-primary)",
      border: "0px solid transparent"
    },
    button: {
      scale: 2.5,
      opacity: 0.15,
      backgroundColor: "var(--hz-accent-1)",
      border: "1px solid var(--hz-accent-1)"
    },
    text: {
      scale: 0.5,
      opacity: 1,
      backgroundColor: "transparent",
      border: "2px solid var(--hz-text-primary)"
    }
  };

  const currentState = isHovering ? "button" : (isText ? "text" : "default");

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
        mixBlendMode: "difference",
      }}
      variants={variants}
      animate={currentState}
      transition={{ duration: 0.2 }}
      // Hide on mobile devices
      initial={{ opacity: 0 }}
      onViewportEnter={() => {
        // Only show if it's a device with a fine pointer (mouse)
        if (window.matchMedia("(pointer: fine)").matches) {
          variants.default.opacity = 1;
        }
      }}
    />
  );
}
