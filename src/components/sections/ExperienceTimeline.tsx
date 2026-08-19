'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { experiences } from '@/data/experience';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Building,
} from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeader
        badge="CAREER PROGRESSION"
        title="Experience Timeline"
        subtitle="A track record of engineering production SaaS platforms, AI systems, and enterprise data solutions."
      />

      <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 ml-4 sm:ml-8 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Node Bullet */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-4 transition-transform group-hover:scale-125 ${
                exp.current
                  ? 'bg-cyan-400 border-slate-950 shadow-lg shadow-cyan-400/50 ring-4 ring-cyan-400/20 animate-pulse'
                  : 'bg-slate-800 border-slate-950 ring-2 ring-white/10 group-hover:bg-cyan-400'
              }`}
            />

            {/* Experience Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition-all shadow-xl">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">
                        CURRENT ROLE
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300 mt-0.5">
                    <span className="font-semibold text-cyan-400">{exp.company}</span>
                    <span>•</span>
                    <span className="text-slate-400 text-xs font-mono">{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="mt-4 space-y-2">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies strip */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
