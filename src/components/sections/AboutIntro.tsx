'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/data/siteConfig';
import { humanLanguages } from '@/data/skills';
import {
  Code,
  Sparkles,
  Bot,
  Layers,
  Database,
  Globe2,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export function AboutIntro() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="ENGINEERING PROFILE"
        title="Full-stack engineer building SaaS products, AI systems and data-driven applications."
        subtitle="Bridging software architecture, artificial intelligence agents, and data integration to deliver high-velocity products that scale."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Editorial Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-5 text-slate-300 text-base sm:text-lg leading-relaxed"
        >
          <p>
            I am a full-stack engineer with hands-on experience building, architecting, and deploying production-grade digital products. At{' '}
            <strong className="text-white">RadInfo Tech</strong>, I engineered and shipped{' '}
            <span className="text-cyan-400 font-semibold">6 production SaaS & AI platforms</span>{' '}
            serving real-world users across education, recruitment, and scientific research.
          </p>

          <p>
            My engineering philosophy centers around turning complex ideas into scalable, reliable software. From multi-tenant ERP databases with strict tenant isolation to LLM-powered manuscript writing assistants and autonomous conversational interview agents, I build full-stack systems from scratch to deployment.
          </p>

          <p>
            With a background in <strong className="text-white">Mechatronics Engineering</strong> at{' '}
            <strong className="text-white">SNS College of Technology (CGPA 8.5)</strong>, I combine low-level hardware intuition with modern cloud systems, microservices, and agentic AI architectures.
          </p>

          {/* Core Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <Layers className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Multi-Tenant SaaS</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Tenant database isolation, subscription billing, and role-based permissions (RBAC).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <Bot className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">AI Agents & LLMs</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Conversational agents, resume-matching vectors, manuscript assistance, and n8n automations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <Database className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Data Pipelines & APIs</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Automated ETL flows, Python data processing (Pandas/NumPy), SQL, and Tableau dashboards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <Cpu className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Applied Robotics & IoT</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Embedded Arduino microcontrollers, speech recognition, and gesture sensor systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: High-Tech Developer Portrait & Credentials Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Developer Identity Portrait Card */}
          <div className="relative p-5 sm:p-6 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">
            {/* Ambient Glow behind card */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top Card Telemetry Header */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-mono font-bold tracking-wider text-slate-300 uppercase">
                  ENGINEER ID // SID-850
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                ACTIVE
              </span>
            </div>

            {/* Portrait Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg group-hover:border-cyan-500/40 transition-all duration-300">
              <img
                src="/profile.png"
                alt="Mohamed Abupakkar Siddiqe S"
                className="w-full h-full object-cover object-top filter contrast-105 brightness-100 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Overlay Badge at Bottom of Image */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-300">
                  ⚡ 6+ Platforms Shipped
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-300">
                  📍 Coimbatore, IN
                </div>
              </div>
            </div>

            {/* Quick Facts List */}
            <ul className="flex flex-col gap-3 mt-5 text-xs sm:text-sm">
              <li className="flex items-center justify-between text-slate-300 pb-2 border-b border-white/[0.04]">
                <span className="text-slate-400">Current Role</span>
                <span className="font-semibold text-white">Software Dev @ RadInfo Tech</span>
              </li>
              <li className="flex items-center justify-between text-slate-300 pb-2 border-b border-white/[0.04]">
                <span className="text-slate-400">Education</span>
                <span className="font-medium text-cyan-300">B.E. Mechatronics (CGPA 8.5)</span>
              </li>
              <li className="flex items-center justify-between text-slate-300 pb-2 border-b border-white/[0.04]">
                <span className="text-slate-400">NDA Readiness</span>
                <span className="font-medium text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ready & Professional
                </span>
              </li>
            </ul>

            {/* Communication Languages */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/[0.08]">
              {humanLanguages.map((lang) => (
                <div
                  key={lang.language}
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col"
                >
                  <span className="text-xs font-bold text-white">{lang.language}</span>
                  <span className="text-[10px] text-cyan-400 font-mono mt-0.5">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
