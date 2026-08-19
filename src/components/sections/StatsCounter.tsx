'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const incrementTime = 30;
    const steps = duration / incrementTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {siteConfig.stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-slate-950/70 border border-white/[0.08] backdrop-blur-xl hover:border-cyan-500/30 transition-all group"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
              {stat.label}
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
