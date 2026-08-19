'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { skillsData, skillCategories } from '@/data/skills';
import { SkillNode } from '@/types';
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Database,
  Terminal,
  Zap,
  CheckCircle,
  ExternalLink,
  Bot,
  Filter,
} from 'lucide-react';

const categoryColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  'AI & Automation': {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    text: 'text-cyan-300',
    dot: 'bg-cyan-400',
  },
  Frameworks: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-300',
    dot: 'bg-blue-400',
  },
  Languages: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    text: 'text-indigo-300',
    dot: 'bg-indigo-400',
  },
  'Cloud & SaaS': {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-300',
    dot: 'bg-purple-400',
  },
  'Data Integration': {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-300',
    dot: 'bg-emerald-400',
  },
  Databases: {
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/30',
    text: 'text-teal-300',
    dot: 'bg-teal-400',
  },
  'Hardware & Tools': {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-300',
    dot: 'bg-amber-400',
  },
};

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(null);

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="stack" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="TECHNOLOGY ECOSYSTEM"
        title="The Stack"
        subtitle="A proven toolkit refined through shipping multi-tenant SaaS, autonomous AI agents, and data integration pipelines."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
              selectedCategory === category
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        <AnimatePresence>
          {filteredSkills.map((skill, idx) => {
            const colors = categoryColors[skill.category] || {
              bg: 'bg-white/5',
              border: 'border-white/10',
              text: 'text-slate-300',
              dot: 'bg-slate-400',
            };

            const isHovered = hoveredSkill?.name === skill.name;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`p-4 rounded-2xl bg-slate-950/80 border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isHovered
                    ? `${colors.border} ${colors.bg} shadow-lg shadow-cyan-500/10 -translate-y-1`
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {skill.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${colors.bg} ${colors.border} ${colors.text}`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Connected Projects */}
                {skill.projects && skill.projects.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                      Shipped In
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {skill.projects.map((p) => (
                        <span
                          key={p}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Bottom Technology Ecosystem Note */}
      <div className="mt-12 p-6 rounded-2xl bg-slate-950/60 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Full Lifecycle Engineering</h4>
            <p className="text-xs text-slate-400">
              Proficient in delivering end-to-end solutions from UI/UX frontends to isolated SQL databases and autonomous AI microservices.
            </p>
          </div>
        </div>
        <a
          href="#architecture"
          className="shrink-0 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-300 border border-white/10 transition-colors"
        >
          View Process Pipeline →
        </a>
      </div>
    </section>
  );
}
