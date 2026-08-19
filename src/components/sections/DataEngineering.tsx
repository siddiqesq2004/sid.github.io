'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DataFlowCanvas } from '@/components/canvas/DataFlowCanvas';
import {
  Database,
  BarChart3,
  GitPullRequest,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle,
  FileSpreadsheet,
  LineChart,
} from 'lucide-react';

const pipelineStages = [
  {
    id: 'ingest',
    title: 'Data Ingestion',
    tech: 'REST APIs / Webhooks / Telemetry',
    desc: 'Extracting raw transactional, exam, and solar telemetry data via secure REST endpoints and event listeners.',
    icon: GitPullRequest,
  },
  {
    id: 'etl',
    title: 'Processing & Cleaning',
    tech: 'Python (Pandas & NumPy)',
    desc: 'Handling missing values, outlier detection, statistical normalization, and feature vector transformation.',
    icon: Cpu,
  },
  {
    id: 'storage',
    title: 'Relational Database',
    tech: 'MySQL & SQL Pipelines',
    desc: 'Optimized schema indexing, partitioned tables for tenant isolation, and high-velocity aggregation queries.',
    icon: Database,
  },
  {
    id: 'analytics',
    title: 'Predictive & BI Analytics',
    tech: 'Tableau & Interactive Dashboards',
    desc: 'Deploying interactive executive dashboards and predictive models for actionable business intelligence.',
    icon: BarChart3,
  },
];

export function DataEngineering() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="DATA ARCHITECTURE"
        title="From Raw Telemetry to Executive Intelligence"
        subtitle="Architecting resilient ETL pipelines, statistical machine learning models, and interactive BI dashboards."
      />

      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
        {/* Animated Data Packets Flow Canvas in the background */}
        <div className="absolute inset-0 h-48 opacity-40 pointer-events-none">
          <DataFlowCanvas />
        </div>

        {/* 4 Pipeline Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 my-4">
          {pipelineStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;

            return (
              <div
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900/90 border-emerald-400/60 shadow-xl shadow-emerald-500/10 -translate-y-1'
                    : 'bg-slate-950/60 border-white/[0.08] hover:border-white/20 hover:bg-slate-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2 rounded-xl ${
                        isActive ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">{stage.title}</h4>
                  <span className="text-[11px] font-mono text-emerald-300 block mb-2 font-medium">
                    {stage.tech}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Experience Connection Footer */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-emerald-400 block font-bold mb-0.5">ZIDIO DEVELOPMENT</span>
            <span>Exploratory data analysis (EDA) & predictive ML models in Python.</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-emerald-400 block font-bold mb-0.5">UNIFIED MENTOR</span>
            <span>End-to-end relational analysis & executive Tableau dashboards.</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-emerald-400 block font-bold mb-0.5">SAKTHILISHANTH SOLAR</span>
            <span>Solar monitoring data analysis & web visibility tooling.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
