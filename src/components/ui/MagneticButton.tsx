'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  cursorText?: string;
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  download,
  target,
  rel,
  variant = 'primary',
  cursorText,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 border border-cyan-300/40',
    secondary:
      'bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 shadow-md',
    outline:
      'bg-transparent hover:bg-white/[0.04] text-slate-300 hover:text-white border border-white/15 hover:border-white/40',
    ghost:
      'bg-transparent hover:bg-white/[0.06] text-slate-400 hover:text-white border border-transparent',
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 18, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all duration-200 cursor-pointer overflow-hidden group ${variantStyles[variant]} ${className}`}
      data-cursor-text={cursorText}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Subtle hover gleam */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        download={download}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="inline-block">
      {content}
    </div>
  );
}
