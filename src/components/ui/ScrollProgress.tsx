'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      {percentage > 5 && percentage < 98 && (
        <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-slate-400 shadow-xl pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{percentage}% READ</span>
        </div>
      )}
    </>
  );
}
