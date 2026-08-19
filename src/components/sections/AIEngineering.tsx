'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  Bot,
  Cpu,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Layers,
  Terminal,
  Activity,
  FileText,
  Mail,
  Users,
} from 'lucide-react';

interface AIPipelineScenario {
  id: string;
  title: string;
  category: string;
  input: string;
  steps: { title: string; desc: string; tool: string }[];
  output: string;
  shippedIn: string;
  liveUrl?: string;
}

const scenarios: AIPipelineScenario[] = [
  {
    id: 'recruitment-agent',
    title: 'Autonomous Conversational AI Interviewer',
    category: 'Multi-Turn Conversational Agent',
    input: 'Candidate Audio & Technical Answer Stream',
    steps: [
      { title: 'Speech & Text Ingestion', desc: 'Real-time WebRTC audio transcription & token streaming', tool: 'WebRTC API' },
      { title: 'Technical & Behavioral Evaluation', desc: 'Evaluating syntax accuracy, problem-solving depth, and conversational fluency', tool: 'LLM Scoring Agent' },
      { title: 'Dynamic Follow-up Generation', desc: 'Context-aware question adaptation based on candidate response', tool: 'Agentic Loop' },
      { title: 'Multi-Metric Scorecard', desc: 'Compiling structured applicant benchmark report for HR hiring team', tool: 'MySQL Store' }
    ],
    output: 'Candidate Score: 94% Technical Fit | 91% Fluency | Automated Shortlist Triggered',
    shippedIn: 'NeuroHire & Interview AI Agent',
    liveUrl: 'https://neurohire.rademics.ai'
  },
  {
    id: 'research-assistant',
    title: 'Academic Manuscript & Citation Copilot',
    category: 'LLM Manuscript Orchestration',
    input: 'Hypothesis, Research Methodology & Raw Findings',
    steps: [
      { title: 'Semantic Section Structuring', desc: 'Partitioning abstract, methodology, results, and conclusion schemas', tool: 'Document Parser' },
      { title: 'Citation Cross-Referencing', desc: 'Validating bibliographic entries against IEEE/APA formatting standards', tool: 'Citation Engine' },
      { title: 'Clarity & Academic Reasoning', desc: 'Eliminating ambiguous prose while preserving empirical rigor', tool: 'LLM Pipeline' },
      { title: 'Publication-Ready Export', desc: 'Compiling structured markdown and LaTeX-compatible manuscripts', tool: 'Export Service' }
    ],
    output: 'Peer-Review Ready Academic Manuscript with 18 Automated IEEE Citations',
    shippedIn: 'Research Copilot',
    liveUrl: 'https://copilot.rademics.com'
  },
  {
    id: 'n8n-agentic-email',
    title: 'Agentic AI E-Commerce Automation',
    category: 'Autonomous Workflow Pipeline',
    input: 'Incoming Customer Inquiry / Support Email',
    steps: [
      { title: 'Webhook Trigger', desc: 'Receives and sanitizes payload via n8n automation pipeline', tool: 'n8n Webhook' },
      { title: 'Intent Classification Agent', desc: 'Categorizes return requests, technical inquiries, and order tracking', tool: 'Agent Router' },
      { title: 'Contextual Draft Generation', desc: 'Retrieves order metadata and composes professional brand response', tool: 'LLM Agent' },
      { title: 'Automated Dispatch', desc: 'Routes email directly to client mailbox with tracking verification', tool: 'SMTP Dispatcher' }
    ],
    output: 'Automated 100% Intent-Matched Response Sent in 1.4s',
    shippedIn: 'Agentic AI Email Automation (n8n)'
  }
];

export function AIEngineering() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('recruitment-agent');

  const activeScenario =
    scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <section id="ai-engineering" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="APPLIED ARTIFICIAL INTELLIGENCE"
        title="Building with AI, not just talking about it."
        subtitle="Engineering autonomous agents, conversational evaluation pipelines, and LLM publishing assistants that deliver measurable business value."
      />

      {/* Scenario Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {scenarios.map((scenario) => {
          const isActive = scenario.id === activeScenarioId;

          return (
            <button
              key={scenario.id}
              onClick={() => setActiveScenarioId(scenario.id)}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                isActive
                  ? 'bg-cyan-500/10 border-cyan-400/60 shadow-lg shadow-cyan-500/10 text-white'
                  : 'bg-slate-950/70 border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                {scenario.category}
              </span>
              <h4 className="text-sm font-bold text-white">{scenario.title}</h4>
            </button>
          );
        })}
      </div>

      {/* Active AI Pipeline Interactive Visualizer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScenario.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Bot className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">{activeScenario.title}</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Shipped In: <strong className="text-cyan-300">{activeScenario.shippedIn}</strong>
              </span>
            </div>

            {activeScenario.liveUrl && (
              <a
                href={activeScenario.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-xs font-mono text-cyan-300 transition-colors self-start sm:self-auto"
              >
                <span>Inspect Live Product</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Pipeline Flow Diagram */}
          <div className="my-8">
            {/* Input Node */}
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono uppercase text-slate-400">Pipeline Ingestion:</span>
                <span className="text-xs font-semibold text-white">{activeScenario.input}</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300">
                LIVE STREAM
              </span>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
              {activeScenario.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex flex-col justify-between relative group hover:border-cyan-500/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">
                      STEP 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                      {step.tool}
                    </span>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-white mb-1">{step.title}</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Output Node */}
            <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold">Output:</span>
                <span className="text-xs font-medium text-emerald-200">{activeScenario.output}</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                COMPLETED
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
