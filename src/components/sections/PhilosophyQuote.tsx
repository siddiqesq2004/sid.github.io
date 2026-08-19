'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Quote } from 'lucide-react';

export function PhilosophyQuote() {
  const quoteWords = [
    '“I', 'don\'t', 'just', 'write', 'code.',
    'I', 'turn', 'ideas', 'into', 'resilient', 'systems', 'people', 'can', 'actually', 'use.”'
  ];

  return (
    <section className="py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center relative">
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
          <Quote className="w-5 h-5" />
        </div>

        {/* Word by word animated text */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight max-w-2xl mx-auto flex flex-wrap justify-center gap-x-2 gap-y-1">
          {quoteWords.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={
                word.includes('resilient') || word.includes('systems') || word.includes('use')
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'
                  : 'text-white'
              }
            >
              {word}
            </motion.span>
          ))}
        </h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-xs sm:text-sm font-mono text-slate-400"
        >
          — Mohamed Abupakkar Siddiqe S // Engineering Philosophy
        </motion.p>
      </div>
    </section>
  );
}
