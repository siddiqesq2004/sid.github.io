'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  Lightbulb,
  Compass,
  Code,
  Bot,
  ShieldCheck,
  CloudUpload,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

interface Stage {
  id: string;
  step: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  details: string[];
  tools: string[];
  deliverable: string;
}

const stages: Stage[] = [
  {
    id: 'idea',
    step: '01',
    name: 'Discovery & Modeling',
    subtitle: 'Translating specs into technical roadmaps',
    icon: Lightbulb,
    color: 'text-amber-400',
    details: [
      'Deconstruct complex product requirements into modular system components',
      'Define data contracts, user personas, and granular access permissions',
      'Establish technical constraints, latency goals, and security boundaries'
    ],
    tools: ['System Specs', 'Data Flow Diagrams', 'Figma/Wireframes', 'API Contracts'],
    deliverable: 'Technical Architecture Document & Schema Spec'
  },
  {
    id: 'architecture',
    step: '02',
    name: 'Schema & Architecture',
    subtitle: 'Designing for tenant isolation and scalability',
    icon: Compass,
    color: 'text-cyan-400',
    details: [
      'Architect relational MySQL schemas with strict multi-tenant isolation',
      'Design RESTful API routes with consistent error handling and authentication',
      'Implement Role-Based Access Control (RBAC) matrices'
    ],
    tools: ['MySQL', 'Relational Schemas', 'RBAC Matrix', 'REST Architecture'],
    deliverable: 'Database DDL & Microservice Structure'
  },
  {
    id: 'development',
    step: '03',
    name: 'Full-Stack Development',
    subtitle: 'Building responsive frontends and resilient backends',
    icon: Code,
    color: 'text-blue-400',
    details: [
      'Engineer modular Next.js / React component systems with high-fidelity UIs',
      'Build robust Node.js / Laravel backend controllers and business logic',
      'Integrate state management, responsive layouts, and clean API services'
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Laravel', 'Tailwind CSS'],
    deliverable: 'Production-Ready Web Applications'
  },
  {
    id: 'ai-integration',
    step: '04',
    name: 'AI & Pipeline Integration',
    subtitle: 'Connecting LLMs, agents, and automated workflows',
    icon: Bot,
    color: 'text-purple-400',
    details: [
      'Orchestrate LLM prompt chains, manuscript generators, and vector embeddings',
      'Build autonomous multi-turn conversational agents with real-time feedback',
      'Connect automated webhooks and e-commerce event triggers using n8n'
    ],
    tools: ['LLM APIs', 'Agentic AI', 'n8n', 'Vector Matching', 'REST Webhooks'],
    deliverable: 'Autonomous AI Agents & Automation Pipelines'
  },
  {
    id: 'testing',
    step: '05',
    name: 'Validation & Security',
    subtitle: 'End-to-end quality assurance and edge case handling',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    details: [
      'Verify tenant data isolation and role boundaries under simulated multi-user load',
      'Benchmark AI response quality, hallucination guardrails, and token latencies',
      'Perform cross-browser responsiveness and accessibility audits'
    ],
    tools: ['API Testing', 'Role Verification', 'Prompt Eval', 'Lighthouse'],
    deliverable: 'Tested, Secure, and Audited Platforms'
  },
  {
    id: 'deployment',
    step: '06',
    name: 'Deployment & Cloud',
    subtitle: 'Shipping to production infrastructure on AWS',
    icon: CloudUpload,
    color: 'text-indigo-400',
    details: [
      'Configure cloud environments, database instances, and environment secrets',
      'Deploy applications with custom subdomains, SSL certificates, and CDNs',
      'Establish payment gateway webhooks (e.g. tarbiat.ac) and database backups'
    ],
    tools: ['AWS', 'Cloud Web Apps', 'Payment Gateways', 'Domain & SSL'],
    deliverable: 'Live Cloud SaaS Serving Real Users'
  },
  {
    id: 'iteration',
    step: '07',
    name: 'Telemetry & Iteration',
    subtitle: 'Optimizing based on user insights and performance metrics',
    icon: RefreshCw,
    color: 'text-pink-400',
    details: [
      'Analyze user flows, exam submission funnels, and recruitment scoring logs',
      'Refine LLM prompt models and tune database queries for millisecond speeds',
      'Continuously ship feature enhancements and user feedback updates'
    ],
    tools: ['Telemetry Analytics', 'Query Profiling', 'User Feedback Loops'],
    deliverable: 'Continuously Evolving High-Performance SaaS'
  }
];

export function ArchitecturePipeline() {
  const [activeStageId, setActiveStageId] = useState<string>('ai-integration');

  const activeStage =
    stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="ENGINEERING PROCESS"
        title="From Idea → Production"
        subtitle="A disciplined 7-stage architectural workflow turning product requirements into scalable, reliable systems."
      />

      {/* Horizontal Pipeline Steps Track */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = stage.id === activeStageId;

          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl shrink-0 transition-all border cursor-pointer ${
                isActive
                  ? 'bg-white/10 border-cyan-400/60 shadow-lg shadow-cyan-500/10 text-white'
                  : 'bg-slate-950/70 border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <div
                className={`p-1.5 rounded-lg ${
                  isActive ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/5 text-slate-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-semibold">{stage.step}</span>
              <span className="text-xs font-medium whitespace-nowrap">{stage.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Visualizer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <activeStage.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10">
                    STAGE {activeStage.step}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{activeStage.subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{activeStage.name}</h3>
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-left lg:text-right">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">
                Deliverable
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                {activeStage.deliverable}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
            {/* Stage Actions */}
            <div className="md:col-span-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Execution Steps
              </span>
              {activeStage.details.map((detail, dIdx) => (
                <div
                  key={dIdx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Tools & Artifacts */}
            <div className="md:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-900/60 border border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-slate-300 font-semibold uppercase">
                    Integrated Stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {activeStage.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-400">
                <span className="text-cyan-400">STATUS:</span> Production Standard
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
