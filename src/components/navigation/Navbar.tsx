'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { Command, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'AI & Data', href: '#ai-engineering' },
  { name: 'Process', href: '#architecture' },
  { name: 'Stack', href: '#stack' },
  { name: 'Experience', href: '#experience' },
  { name: 'Awards', href: '#achievements' },
];

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'work', 'ai-engineering', 'architecture', 'stack', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 border ${
            scrolled
              ? 'bg-slate-950/85 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/80 max-w-5xl w-full'
              : 'bg-slate-900/60 backdrop-blur-md border-white/10 max-w-6xl w-full'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo & Status */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-full"
            aria-label="Mohamed Siddiqe Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 font-mono text-xs font-bold text-slate-950 shadow-md group-hover:scale-105 transition-transform">
              <span>{siteConfig.initials}</span>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-100 tracking-tight group-hover:text-cyan-300 transition-colors">
                {siteConfig.shortName}
              </span>
              <span className="text-[10px] font-mono text-slate-400 hidden sm:inline-block">
                Full-Stack & AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-xs font-mono transition-all duration-200 group"
              title="Open Command Palette (Ctrl+K)"
              aria-label="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span className="text-slate-400">Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-300 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 group overflow-hidden"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors border border-white/10"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        onOpenCommandPalette={() => {
          setMobileMenuOpen(false);
          onOpenCommandPalette();
        }}
      />
    </>
  );
}
