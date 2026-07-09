/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

/** Particle network — mounted only after idle so it does not hurt LCP. */
export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const pageBg = isDark ? '#070b14' : '#f4f7fb';
    const nodeColor = isDark ? 'rgba(45, 212, 191, 0.35)' : 'rgba(13, 148, 136, 0.4)';
    const lineBase = isDark ? '45, 212, 191' : '13, 148, 136';
    const mouseLine = isDark ? '129, 140, 248' : '99, 102, 241';

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let running = true;

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    let mouse = { x: -1000, y: -1000, radius: 120 };

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    resize();

    const count = Math.min(width < 640 ? 18 : 32, Math.floor((width * height) / 22000));
    particles.length = 0;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
      });
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', resize, { passive: true });
    canvas.addEventListener('mousemove', onMove, { passive: true });
    canvas.addEventListener('mouseleave', onLeave);

    const draw = () => {
      if (!running) return;
      ctx.fillStyle = pageBg;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineBase}, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        const mouseDist = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
        if (mouseDist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${mouseLine}, ${0.2 * (1 - mouseDist / mouse.radius)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      running = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      id="hero-interactive-canvas"
      className="absolute inset-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
}
