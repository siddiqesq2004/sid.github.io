'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { CommandPalette } from '@/components/navigation/CommandPalette';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ToastProvider } from '@/components/ui/Toast';
import { SmoothScroll } from '@/components/providers/SmoothScroll';

import { Hero } from '@/components/hero/Hero';
import { StatsCounter } from '@/components/sections/StatsCounter';
import { AboutIntro } from '@/components/sections/AboutIntro';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { TechStack } from '@/components/sections/TechStack';
import { ArchitecturePipeline } from '@/components/sections/ArchitecturePipeline';
import { AIEngineering } from '@/components/sections/AIEngineering';
import { DataEngineering } from '@/components/sections/DataEngineering';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { ExperimentsLab } from '@/components/sections/ExperimentsLab';
import { AchievementsWall } from '@/components/sections/AchievementsWall';
import { EducationCertifications } from '@/components/sections/EducationCertifications';
import { PhilosophyQuote } from '@/components/sections/PhilosophyQuote';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <ToastProvider>
      <SmoothScroll>
        <div className="relative min-h-screen bg-[#07080a] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-white">
          {/* Dynamic Scroll Progress Bar */}
          <ScrollProgress />

          {/* Floating Navigation Bar */}
          <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

          {/* Quick Keyboard Command Palette (Ctrl+K) */}
          <CommandPalette
            isOpen={commandPaletteOpen}
            onClose={() => setCommandPaletteOpen(false)}
          />

          {/* Main Website Flow */}
          <main className="relative z-10">
            {/* 1. Hero Section + Particle Network + System Matrix */}
            <Hero />

            {/* 2. Impact Numbers & Counters */}
            <StatsCounter />

            {/* 3. About & Summary */}
            <AboutIntro />

            {/* 4. Featured Work (6 Flagship Production SaaS Platforms) */}
            <FeaturedProjects />

            {/* 5. Interactive Tech Constellation */}
            <TechStack />

            {/* 6. Architecture: From Idea -> Production */}
            <ArchitecturePipeline />

            {/* 7. AI Engineering Systems Visualizer */}
            <AIEngineering />

            {/* 8. Data Pipelines & Business Intelligence */}
            <DataEngineering />

            {/* 9. Career Experience Timeline */}
            <ExperienceTimeline />

            {/* 10. Robotics & Experiments Lab */}
            <ExperimentsLab />

            {/* 11. Achievements Wall & Competitions */}
            <AchievementsWall />

            {/* 12. Education & Certifications */}
            <EducationCertifications />

            {/* 13. Engineering Philosophy Quote */}
            <PhilosophyQuote />

            {/* 14. Contact & Project Inquiry Form */}
            <ContactSection />
          </main>

          {/* 15. Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </ToastProvider>
  );
}
