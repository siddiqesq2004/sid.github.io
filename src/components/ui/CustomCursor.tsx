'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device has fine pointer and not touch
    const checkPointer = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsMobile(!hasFinePointer || prefersReduced);
    };

    checkPointer();
    window.addEventListener('resize', checkPointer);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [data-cursor], input, select, textarea');
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute('data-cursor-text') || '';
        setCursorText(customText);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', checkPointer);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Central precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.1 }}
      />

      {/* Outer fluid trailing ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center border transition-colors duration-200 ${
          cursorText
            ? 'bg-cyan-500/20 border-cyan-400 backdrop-blur-xs text-white'
            : isHovered
            ? 'bg-white/10 border-cyan-400/80 scale-125'
            : 'bg-transparent border-white/30'
        }`}
        animate={{
          x: cursorText ? mousePosition.x - 40 : mousePosition.y ? mousePosition.x - (isHovered ? 24 : 16) : -100,
          y: cursorText ? mousePosition.y - 40 : mousePosition.x ? mousePosition.y - (isHovered ? 24 : 16) : -100,
          width: cursorText ? 80 : isHovered ? 48 : 32,
          height: cursorText ? 80 : isHovered ? 48 : 32,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 280, mass: 0.3 }}
      >
        {cursorText && (
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-cyan-300">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
