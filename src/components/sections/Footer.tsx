'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';
import {
  Mail,
  Phone,
  Code2,
  Sparkles,
  ArrowUp,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/Icons';

export function Footer() {
  const [coimbatoreTime, setCoimbatoreTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (IST, UTC+5:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCoimbatoreTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-slate-950/90 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono text-xs font-bold text-slate-950">
                {siteConfig.initials}
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Full-Stack SaaS Developer • AI Integration Engineer • Data Specialist
            </p>
          </div>

          {/* System status & Coimbatore Clock */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to Opportunities</span>
            </div>

            {coimbatoreTime && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Coimbatore, IN: {coimbatoreTime}</span>
              </div>
            )}
          </div>
        </div>

        {/* Middle row: Navigation links and Socials */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-3 font-semibold">
              Platform Links
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  01. About Profile
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-cyan-300 transition-colors">
                  02. Selected Work
                </a>
              </li>
              <li>
                <a href="#ai-engineering" className="hover:text-cyan-300 transition-colors">
                  03. AI Systems
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-300 transition-colors">
                  04. Architecture Process
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-3 font-semibold">
              Live Platforms
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="https://neurohire.rademics.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <span>NeuroHire SaaS</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://copilot.rademics.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <span>Research Copilot</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://interview-agent.rademics.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <span>Interview AI Agent</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://internship.rademics.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <span>LMS Platform</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://tarbiat.ac"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <span>Conference Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-3 font-semibold">
              Connect
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>LeetCode</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.email}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-wider block mb-3 font-semibold">
              Credentials
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href={siteConfig.resumeUrl}
                  download="Mohamed_Abupakkar_Siddiqe_Resume.pdf"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Download Resume PDF
                </a>
              </li>
              <li>
                <span className="text-slate-500">B.E. Mechatronics (CGPA 8.5)</span>
              </li>
              <li>
                <span className="text-slate-500">AWS GenAI & Cloud Certified</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Back to top button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-xs font-mono text-slate-500">
          <div>
            © 2026 {siteConfig.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
