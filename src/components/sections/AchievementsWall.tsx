'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { achievements, leadershipActivities } from '@/data/achievements';
import { Trophy, Award, Target, Flame, Users, Sparkles, HeartHandshake } from 'lucide-react';

export function AchievementsWall() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="HONORS & RECOGNITION"
        title="Achievements & Competitions"
        subtitle="Recognized for excellence in applied robotics, national hackathons, and community leadership."
      />

      {/* Main Awards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
        {achievements.map((item, idx) => {
          const isFirstPrize = item.type === 'First Prize';

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-6 rounded-2xl bg-slate-950/80 border transition-all duration-300 flex flex-col justify-between group ${
                isFirstPrize
                  ? 'border-amber-500/40 bg-gradient-to-b from-amber-500/[0.04] to-transparent shadow-xl shadow-amber-500/5 hover:border-amber-400'
                  : 'border-white/10 hover:border-cyan-500/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2.5 rounded-xl ${
                      isFirstPrize
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    }`}
                  >
                    {isFirstPrize ? <Trophy className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-bold ${
                      isFirstPrize
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        : 'bg-white/5 text-slate-400 border border-white/10'
                    }`}
                  >
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400 mt-0.5 mb-2.5">
                  {item.organization}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-400">
                <span>EVENT: </span>
                <span className="text-slate-200">{item.event}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Leadership & Extracurricular Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/70 border border-white/10 backdrop-blur-xl">
        <div className="flex items-center gap-2.5 mb-6">
          <HeartHandshake className="w-5 h-5 text-cyan-400" />
          <h3 className="text-xl font-bold text-white">Leadership & Social Responsibility</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadershipActivities.map((act, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-cyan-400 block font-semibold mb-1">
                  {act.role}
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">{act.org}</h4>
                <p className="text-xs text-slate-400">{act.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
