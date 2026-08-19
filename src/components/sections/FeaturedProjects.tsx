'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { featuredProjects } from '@/data/projects';
import { Project } from '@/types';
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Bot,
  Database,
  Cpu,
  ArrowUpRight,
  SlidersHorizontal,
  GraduationCap,
  Shield,
  Activity,
  Zap,
} from 'lucide-react';

/* Custom interactive project visual preview mockups */
function ProjectVisualMockup({ project }: { project: Project }) {
  if (project.id === 'neurohire') {
    return (
      <div className="w-full h-full min-h-[280px] p-4 bg-slate-950/90 rounded-2xl border border-cyan-500/20 flex flex-col justify-between relative overflow-hidden font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-400 font-bold">NEUROHIRE // AI INTERVIEW STREAM</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[10px]">
            ACTIVE SESSION
          </span>
        </div>

        {/* Dynamic Candidate Evaluation Waveform */}
        <div className="my-4 space-y-3">
          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
            <div className="flex justify-between text-[11px] text-slate-300 mb-1.5 font-sans">
              <span>Technical & Algorithmic Fit</span>
              <span className="text-cyan-400 font-mono font-bold">94%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '94%' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              />
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
            <div className="flex justify-between text-[11px] text-slate-300 mb-1.5 font-sans">
              <span>Conversational Fluency & Behavioral</span>
              <span className="text-emerald-400 font-mono font-bold">91%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '91%' }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
          <span>AI EVALUATOR: v2.4 Multi-Agent</span>
          <span className="text-emerald-400 font-bold">● SHORTLISTED</span>
        </div>
      </div>
    );
  }

  if (project.id === 'research-copilot') {
    return (
      <div className="w-full h-full min-h-[280px] p-4 bg-slate-950/90 rounded-2xl border border-indigo-500/20 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-bold">RESEARCH COPILOT // MANUSCRIPT ENGINE</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300">
            IEEE / APA / MLA
          </span>
        </div>

        <div className="my-3 space-y-2 text-[11px]">
          <div className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-slate-200">
            <span className="text-indigo-400 block font-bold mb-0.5">Section 3.2 — System Architecture</span>
            <span className="text-slate-400 text-[10px]">
              &quot;The distributed LLM pipeline structures academic citations through automated cross-referencing...&quot;
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
              18 Citations Linked
            </span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
              LaTeX Ready
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
          <span>LATENCY: 42ms Streamed</span>
          <span className="text-indigo-400 font-bold">PEER-REVIEW COMPLIANT</span>
        </div>
      </div>
    );
  }

  if (project.id === 'interview-ai-agent') {
    return (
      <div className="w-full h-full min-h-[280px] p-4 bg-slate-950/90 rounded-2xl border border-cyan-500/20 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-bold">MOCK AGENT // RESUME PARSER</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300">
            MATCH: 96.8%
          </span>
        </div>

        <div className="my-3 space-y-2">
          <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 font-sans">
            <span className="text-cyan-400 font-mono text-[10px] block font-bold">
              AI INTERVIEWER QUESTION:
            </span>
            &quot;How do you ensure data isolation across multi-tenant schemas in MySQL?&quot;
          </div>
          <div className="flex items-center justify-center gap-1 h-8 bg-slate-900/80 rounded-lg p-2">
            {[40, 75, 55, 90, 100, 70, 85, 45, 60, 95, 80, 50].map((h, i) => (
              <motion.span
                key={i}
                animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08 }}
                className="w-1 bg-cyan-400/80 rounded-full inline-block"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
          <span>AUDIO ENGINE: WebRTC Waveform</span>
          <span className="text-cyan-400 font-bold">REAL-TIME FEEDBACK</span>
        </div>
      </div>
    );
  }

  if (project.id === 'school-erp') {
    return (
      <div className="w-full h-full min-h-[280px] p-4 bg-slate-950/90 rounded-2xl border border-blue-500/20 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-bold">MULTI-TENANT ERP // TENANT_042</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/15 text-blue-300">
            ISOLATED SCHEMA
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-3 text-center">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-[10px] text-slate-400 block font-sans">Role</span>
            <span className="text-xs font-bold text-white mt-1 block">Super Admin</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-[10px] text-slate-400 block font-sans">Billing</span>
            <span className="text-xs font-bold text-emerald-400 mt-1 block">Active Tier</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-[10px] text-slate-400 block font-sans">Modules</span>
            <span className="text-xs font-bold text-cyan-300 mt-1 block">12 Enabled</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
          <span>STACK: Laravel + MySQL Multi-DB</span>
          <span className="text-blue-400 font-bold">RBAC ENFORCED</span>
        </div>
      </div>
    );
  }

  if (project.id === 'lms-platform') {
    return (
      <div className="w-full h-full min-h-[280px] p-4 bg-slate-950/90 rounded-2xl border border-teal-500/20 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 font-bold">LMS COHORT PORTAL</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/15 text-teal-300">
            LIVE EXAMS
          </span>
        </div>

        <div className="my-3 space-y-2 font-sans">
          <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
            <span className="text-xs text-slate-200">Placement Training Curriculum</span>
            <span className="text-[11px] font-mono text-teal-400 font-bold">100% Tracked</span>
          </div>
          <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
            <span className="text-xs text-slate-200">Live Exam & Assessment Module</span>
            <span className="text-[11px] font-mono text-emerald-400 font-bold">Auto-Graded</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
          <span>LIVE: internship.rademics.com</span>
          <span className="text-teal-400 font-bold">COHORT CERTIFIED</span>
        </div>
      </div>
    );
  }

  // conference-saas default
  return (
    <div className="w-full h-full min-h-[280px] p-4 bg-slate-950/90 rounded-2xl border border-amber-500/20 flex flex-col justify-between font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-amber-300 font-bold">CONFERENCE SAAS PORTAL</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300">
          PAYMENT GATEWAY
        </span>
      </div>

      <div className="my-3 space-y-2 font-sans">
        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-between">
          <span className="text-xs text-slate-200">International Summit 2026</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
            CONFIRMED
          </span>
        </div>
        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-between text-slate-300 text-xs">
          <span>Instant Attendee Ticket & QR</span>
          <span className="font-mono text-amber-300 font-bold">#TKT-9921</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
        <span>LIVE: tarbiat.ac</span>
        <span className="text-amber-400 font-bold">PAYMENTS INTEGRATED</span>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const [filter, setFilter] = useState<'All' | 'AI & LLM' | 'Multi-Tenant SaaS' | 'EdTech & Event'>('All');

  const filtered = featuredProjects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'AI & LLM') return p.category.includes('AI') || p.category.includes('LLM');
    if (filter === 'Multi-Tenant SaaS') return p.category.includes('SaaS') || p.category.includes('ERP');
    if (filter === 'EdTech & Event') return p.category.includes('EdTech') || p.category.includes('Conference');
    return true;
  });

  return (
    <section id="work" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="PRODUCTION WORK"
        title="Selected Work"
        subtitle="Systems I've designed, engineered and shipped to real production users."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {(['All', 'AI & LLM', 'Multi-Tenant SaaS', 'EdTech & Event'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
              filter === cat
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Panels List */}
      <div className="flex flex-col gap-10">
        {filtered.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl hover:border-cyan-500/40 transition-all shadow-2xl group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Project Info */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {project.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium text-cyan-400/90 mt-1 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="mt-4 space-y-1.5">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & Metrics Strip */}
                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions & Links */}
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all group/btn"
                        data-cursor-text="VISIT"
                      >
                        <span>Visit Live Platform</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <span className="text-[11px] font-mono text-slate-500 truncate max-w-[200px]">
                        {project.liveUrl.replace('https://', '')}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Custom Interactive Simulated Interface Mockup */}
              <div className="lg:col-span-5 h-full flex items-center justify-center">
                <ProjectVisualMockup project={project} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
