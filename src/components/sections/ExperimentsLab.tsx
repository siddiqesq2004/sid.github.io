'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { labExperiments } from '@/data/projects';
import {
  Mic,
  HandMetal,
  Bot,
  Car,
  Navigation,
  ShoppingCart,
  Award,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Mic: Mic,
  HandMetal: HandMetal,
  Bot: Bot,
  Car: Car,
  Navigation: Navigation,
  ShoppingCart: ShoppingCart,
};

export function ExperimentsLab() {
  return (
    <section id="experiments" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="INNOVATION & HARDWARE"
        title="Experiments & Robotics Lab"
        subtitle="Applied Mechatronics, award-winning robotics prototypes, and autonomous simulations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {labExperiments.map((exp, idx) => {
          const Icon = iconMap[exp.iconName] || Sparkles;
          const isWinner = exp.status === 'Prize Winner';

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-6 rounded-2xl bg-slate-950/80 border transition-all duration-300 flex flex-col justify-between group ${
                isWinner
                  ? 'border-amber-500/30 hover:border-amber-400 shadow-lg shadow-amber-500/5 hover:shadow-amber-500/15'
                  : 'border-white/10 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2.5 rounded-xl ${
                      isWinner
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-white/5 text-slate-300 border border-white/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-bold ${
                      isWinner
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        : 'bg-white/5 text-slate-400 border border-white/10'
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>

                {/* Award Badge if Winner */}
                {exp.award && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono mb-3">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-semibold">{exp.award}</span>
                  </div>
                )}

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {exp.title}
                </h3>
                <span className="text-[11px] font-mono text-slate-400 block mt-0.5 mb-3">
                  {exp.category}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="mt-5 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
