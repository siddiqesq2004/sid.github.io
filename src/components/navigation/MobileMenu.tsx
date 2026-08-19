'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { X, ArrowUpRight, FileText, Mail, Phone, Command, Sparkles } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  onOpenCommandPalette: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  onOpenCommandPalette,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 lg:hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 font-mono text-xs font-bold text-slate-950">
                {siteConfig.initials}
              </div>
              <span className="text-sm font-bold text-white tracking-tight">
                {siteConfig.shortName}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav List */}
          <div className="flex flex-col gap-3 my-auto py-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 + 0.1 }}
                className="text-2xl font-bold text-slate-300 hover:text-cyan-400 transition-colors flex items-center justify-between py-1 border-b border-white/[0.06]"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
              </motion.a>
            ))}

            <motion.button
              onClick={onOpenCommandPalette}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-between text-base font-mono text-cyan-400 py-2 mt-4"
            >
              <span className="flex items-center gap-2">
                <Command className="w-4 h-4" /> Open Command Menu
              </span>
              <kbd className="px-2 py-0.5 rounded bg-white/10 text-xs">⌘K</kbd>
            </motion.button>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={siteConfig.resumeUrl}
                download="Mohamed_Abupakkar_Siddiqe_Resume.pdf"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-slate-400 pt-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.email}
                className="hover:text-white transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.phone}
                className="hover:text-white transition-colors"
                aria-label="Call Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
