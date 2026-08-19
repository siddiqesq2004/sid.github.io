'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { Cpu, Server, Database, Bot, Sparkles, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

const domainIcons: Record<string, React.ElementType> = {
  saas: Server,
  ai: Bot,
  data: Database,
  embedded: Cpu,
};

export function SystemSignature() {
  const [activeDomainId, setActiveDomainId] = useState<string>('ai');

  const activeDomain =
    siteConfig.domains.find((d) => d.id === activeDomainId) || siteConfig.domains[0];

  return (
    <div className="w-full max-w-5xl mx-auto mt-16 p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
      {/* Top subtle ambient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-cyan-500/15 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping-slow" />
          <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
            SYSTEM ARCHITECTURE // MOHAMED.S.MATRIX
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
            RADINFO TECH INTERN
          </span>
          <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
            6 SHIPPED PLATFORMS
          </span>
        </div>
      </div>

      {/* Node selector tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6">
        {siteConfig.domains.map((domain) => {
          const Icon = domainIcons[domain.id] || Sparkles;
          const isActive = domain.id === activeDomainId;

          return (
            <button
              key={domain.id}
              onClick={() => setActiveDomainId(domain.id)}
              className={`relative flex flex-col items-start p-3.5 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                isActive
                  ? 'bg-white/[0.08] border-cyan-400/50 shadow-lg shadow-cyan-500/10'
                  : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <div
                  className={`p-2 rounded-xl ${
                    isActive ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30' : 'bg-white/5 text-slate-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                )}
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
                {domain.tagline}
              </span>
              <span className="text-sm font-bold text-white mt-0.5 truncate w-full">
                {domain.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Domain Deep-Dive Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDomain.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{activeDomain.name}</h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {activeDomain.tagline}
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {activeDomain.description}
              </p>
            </div>

            <div className="shrink-0 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-right">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Key Metric</span>
              <span className="text-xs font-semibold text-cyan-300">{activeDomain.metrics}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
            {/* Core Skills Chips */}
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                Engineered Capabilities
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeDomain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200"
                  >
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Associated Flagship Platforms */}
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                Production Implementations
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDomain.projects.map((proj) => (
                  <a
                    key={proj}
                    href="#work"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 transition-colors group/link"
                  >
                    <span>{proj}</span>
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
