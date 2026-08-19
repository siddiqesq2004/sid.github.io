'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { ParticleNetwork } from '@/components/canvas/ParticleNetwork';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SystemSignature } from './SystemSignature';
import {
  ArrowRight,
  Sparkles,
  FileText,
  Mail,
  Terminal,
  Layers,
  Bot,
  Database,
  Cpu,
} from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

export function Hero() {
  const { showToast } = useToast();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = siteConfig.resumeUrl;
    link.download = 'Mohamed_Abupakkar_Siddiqe_Resume.pdf';
    link.click();
    showToast(
      'Resume Download Started',
      'Mohamed_Abupakkar_Siddiqe_Resume.pdf is downloading.',
      'success'
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden bg-grid-pattern"
    >
      {/* Interactive Particle Network Canvas */}
      <ParticleNetwork />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xl shadow-cyan-500/5 mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-wide uppercase font-semibold">
            {siteConfig.availability}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl"
        >
          Building{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            intelligent software
          </span>{' '}
          that moves ideas into production.
        </motion.h1>

        {/* Professional Positioning */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal"
        >
          <span className="text-white font-semibold">{siteConfig.name}</span> —{' '}
          <span className="text-cyan-300 font-medium">Full-Stack SaaS Developer</span>,{' '}
          <span className="text-blue-300 font-medium">AI Integration Engineer</span>, and{' '}
          <span className="text-emerald-300 font-medium">Data Integration Specialist</span>.
          Architected and shipped <span className="text-white font-semibold">6+ production platforms</span> spanning multi-tenant ERPs, conversational AI interview agents, and LLM publishing copilots.
        </motion.p>

        {/* Action Buttons / CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#work"
            variant="primary"
            className="px-7 py-3 text-sm font-bold shadow-cyan-500/25"
            cursorText="EXPLORE"
          >
            <span>View Selected Work</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            variant="secondary"
            className="px-6 py-3 text-sm font-semibold"
            cursorText="CONNECT"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Let&apos;s Connect</span>
          </MagneticButton>

          <MagneticButton
            onClick={handleDownloadResume}
            variant="outline"
            className="px-5 py-3 text-sm font-medium"
            cursorText="RESUME"
          >
            <FileText className="w-4 h-4 text-slate-300" />
            <span>Download Resume</span>
          </MagneticButton>
        </motion.div>

        {/* Quick Credentials Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Agents & LLM RAG</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Multi-Tenant Cloud SaaS</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span>Data Pipelines & REST APIs</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>B.E. Mechatronics (CGPA 8.5)</span>
          </div>
        </motion.div>

        {/* Interactive "MOHAMED.S" Architecture Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
        >
          <SystemSignature />
        </motion.div>
      </div>
    </section>
  );
}
