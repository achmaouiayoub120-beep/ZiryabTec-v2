"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    
    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    // Mouse tracking
    const mouse = { x: -1000, y: -1000 };
    
    // Config
    const isMobile = window.innerWidth < 768;
    const NUM_NODES = isMobile ? 20 : 35;
    const CONNECTION_DISTANCE = 180;
    const MOUSE_ATTRACTION_DISTANCE = 150;
    const NODE_COLOR = "#6366F1"; // Accent 1
    
    const nodes: Node[] = [];
    
    // Initialize canvas size
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener("resize", resize);
    resize();
    
    // Create nodes
    for (let i = 0; i < NUM_NODES; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 1.5,
      });
    }
    
    // Render loop
    const render = () => {
      // Clear with solid dark background for performance (alpha: false)
      ctx.fillStyle = "#080B14"; // hz-bg
      ctx.fillRect(0, 0, width, height);
      
      // Update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Move
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        
        // Mouse attraction
        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distMouse < MOUSE_ATTRACTION_DISTANCE) {
          const force = (MOUSE_ATTRACTION_DISTANCE - distMouse) / MOUSE_ATTRACTION_DISTANCE;
          node.x += (dxMouse / distMouse) * force * 1.5;
          node.y += (dyMouse / distMouse) * force * 1.5;
        }
        
        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = node.x - nodeB.x;
          const dy = node.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.6;
            
            // Create gradient
            const gradient = ctx.createLinearGradient(node.x, node.y, nodeB.x, nodeB.y);
            gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity})`); // hz-accent-1
            gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity})`); // hz-accent-2
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, 0.8)`;
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    // Mouse event listeners
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full"
      style={{ willChange: "transform" }}
      aria-hidden="true"
      role="presentation"
    />
  );
}
