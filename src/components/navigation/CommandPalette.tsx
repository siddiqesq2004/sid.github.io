'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { useToast } from '@/components/ui/Toast';
import {
  Search,
  ArrowRight,
  FileText,
  Copy,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Award,
  GraduationCap,
  Mail,
  Phone,
  Terminal,
  X,
} from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Social' | 'Projects';
  icon: React.ElementType;
  shortcut?: string;
  perform: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { showToast } = useToast();

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-home',
      title: 'Go to Hero / Home',
      category: 'Navigation',
      icon: Terminal,
      perform: () => {
        window.location.hash = '#home';
        onClose();
      },
    },
    {
      id: 'nav-about',
      title: 'Go to About & Summary',
      category: 'Navigation',
      icon: Code2,
      perform: () => {
        window.location.hash = '#about';
        onClose();
      },
    },
    {
      id: 'nav-work',
      title: 'Go to Featured Work (6 Production SaaS)',
      category: 'Navigation',
      icon: Layers,
      perform: () => {
        window.location.hash = '#work';
        onClose();
      },
    },
    {
      id: 'nav-ai',
      title: 'Go to AI & Data Engineering Systems',
      category: 'Navigation',
      icon: Cpu,
      perform: () => {
        window.location.hash = '#ai-engineering';
        onClose();
      },
    },
    {
      id: 'nav-arch',
      title: 'Go to Idea → Production Pipeline',
      category: 'Navigation',
      icon: Sparkles,
      perform: () => {
        window.location.hash = '#architecture';
        onClose();
      },
    },
    {
      id: 'nav-stack',
      title: 'Go to Interactive Tech Stack',
      category: 'Navigation',
      icon: Code2,
      perform: () => {
        window.location.hash = '#stack';
        onClose();
      },
    },
    {
      id: 'nav-exp',
      title: 'Go to Experience Timeline (RadInfo Tech & more)',
      category: 'Navigation',
      icon: Layers,
      perform: () => {
        window.location.hash = '#experience';
        onClose();
      },
    },
    {
      id: 'nav-awards',
      title: 'Go to Achievements & Awards (1st Prize Winners)',
      category: 'Navigation',
      icon: Award,
      perform: () => {
        window.location.hash = '#achievements';
        onClose();
      },
    },
    {
      id: 'nav-edu',
      title: 'Go to Education & Certifications',
      category: 'Navigation',
      icon: GraduationCap,
      perform: () => {
        window.location.hash = '#education';
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact & Inquiries Form',
      category: 'Navigation',
      icon: Mail,
      perform: () => {
        window.location.hash = '#contact';
        onClose();
      },
    },

    // Actions
    {
      id: 'act-resume',
      title: 'Download Resume PDF',
      category: 'Actions',
      icon: FileText,
      shortcut: 'PDF',
      perform: () => {
        const link = document.createElement('a');
        link.href = siteConfig.resumeUrl;
        link.download = 'Mohamed_Abupakkar_Siddiqe_Resume.pdf';
        link.click();
        showToast('Resume Download Initiated', 'Mohamed_Abupakkar_Siddiqe_Resume.pdf is downloading.', 'success');
        onClose();
      },
    },
    {
      id: 'act-copy-email',
      title: `Copy Email (${siteConfig.email})`,
      category: 'Actions',
      icon: Copy,
      perform: () => {
        navigator.clipboard.writeText(siteConfig.email);
        showToast('Email Copied to Clipboard', siteConfig.email, 'success');
        onClose();
      },
    },
    {
      id: 'act-copy-phone',
      title: `Copy Phone (${siteConfig.phone})`,
      category: 'Actions',
      icon: Phone,
      perform: () => {
        navigator.clipboard.writeText(siteConfig.phone);
        showToast('Phone Copied to Clipboard', siteConfig.phone, 'success');
        onClose();
      },
    },

    // Projects Live links
    {
      id: 'proj-neurohire',
      title: 'Open NeuroHire AI SaaS (Live)',
      category: 'Projects',
      icon: ExternalLink,
      perform: () => {
        window.open('https://neurohire.rademics.ai', '_blank');
        onClose();
      },
    },
    {
      id: 'proj-copilot',
      title: 'Open Research Copilot SaaS (Live)',
      category: 'Projects',
      icon: ExternalLink,
      perform: () => {
        window.open('https://copilot.rademics.com', '_blank');
        onClose();
      },
    },
    {
      id: 'proj-interview',
      title: 'Open AI Interview Agent (Live)',
      category: 'Projects',
      icon: ExternalLink,
      perform: () => {
        window.open('https://interview-agent.rademics.ai', '_blank');
        onClose();
      },
    },

    // Social Links
    {
      id: 'soc-github',
      title: 'View GitHub Profile',
      category: 'Social',
      icon: Github,
      perform: () => {
        window.open(siteConfig.socials.github, '_blank');
        onClose();
      },
    },
    {
      id: 'soc-linkedin',
      title: 'View LinkedIn Profile',
      category: 'Social',
      icon: Linkedin,
      perform: () => {
        window.open(siteConfig.socials.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
          setQuery('');
          setSelectedIndex(0);
        }
      }

      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].perform();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl bg-slate-950/95 border border-white/20 rounded-2xl shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl overflow-hidden z-10"
          >
            {/* Search Input Box */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a command, section, project, or action..."
                className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-slate-400">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 no-scrollbar">
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-sm">
                  No commands matching &quot;{query}&quot;
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {filteredCommands.map((item, idx) => {
                    const Icon = item.icon;
                    const isSelected = idx === selectedIndex;

                    return (
                      <button
                        key={item.id}
                        onClick={item.perform}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all ${
                          isSelected
                            ? 'bg-cyan-500/15 border border-cyan-500/30 text-white'
                            : 'text-slate-300 hover:bg-white/[0.04] border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`p-1.5 rounded-lg ${
                              isSelected ? 'bg-cyan-400/20 text-cyan-300' : 'bg-white/5 text-slate-400'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-sm font-medium truncate">{item.title}</span>
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                              {item.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {item.shortcut && (
                            <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-cyan-300">
                              {item.shortcut}
                            </span>
                          )}
                          <ArrowRight
                            className={`w-3.5 h-3.5 transition-transform ${
                              isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer info */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900/60 border-t border-white/[0.06] text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
              </div>
              <span className="text-cyan-400 font-medium">Mohamed Siddiqe OS v2.6</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
