'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { certifications, educationData } from '@/data/certifications';
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle,
  ExternalLink,
  Cpu,
  Cloud,
} from 'lucide-react';

export function EducationCertifications() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="ACADEMIC & CREDENTIALS"
        title="Education & Certifications"
        subtitle="Formal Mechatronics engineering foundation alongside specialized cloud and AI credentials."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Education Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
                {educationData.period}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              {educationData.degree}
            </h3>
            <div className="text-sm font-semibold text-cyan-400 mb-4">
              {educationData.institution} • {educationData.location}
            </div>

            {/* GPA Callout */}
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">
                  Academic Performance
                </span>
                <span className="text-2xl font-mono font-extrabold text-white">
                  {educationData.gpa}
                </span>
              </div>
              <span className="text-xs font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/20">
                {educationData.gpaNote}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              {educationData.description}
            </p>

            {/* Schooling */}
            <div className="pt-4 border-t border-white/[0.08] space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Secondary Education
              </span>
              {educationData.schooling.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs text-slate-300 p-2 rounded-lg bg-white/[0.02]"
                >
                  <span>{item.level} — {item.school}</span>
                  <span className="font-mono text-cyan-400 font-bold">{item.score}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Certifications Strip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col gap-3.5"
        >
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Industry Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-4 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase">
                      {cert.issuer}
                    </span>
                    {cert.score && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        {cert.score}
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-white/[0.06] flex flex-wrap gap-1">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
