'use client';

import React, { useEffect, useRef } from 'react';

export function DataFlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 200);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Packet {
      progress: number;
      speed: number;
      lane: number;
      length: number;
      color: string;
    }

    const packets: Packet[] = [];
    const laneCount = 4;
    const colors = ['#38bdf8', '#06b6d4', '#10b981', '#818cf8', '#c084fc'];

    for (let i = 0; i < 16; i++) {
      packets.push({
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
        lane: Math.floor(Math.random() * laneCount),
        length: 20 + Math.random() * 35,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint lane guide lines
      const laneSpacing = height / (laneCount + 1);
      ctx.lineWidth = 1;

      for (let i = 1; i <= laneCount; i++) {
        const y = i * laneSpacing;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.stroke();
      }

      // Draw and update packets
      for (const p of packets) {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.lane = Math.floor(Math.random() * laneCount);
          p.color = colors[Math.floor(Math.random() * colors.length)];
        }

        const y = (p.lane + 1) * laneSpacing;
        const x = p.progress * (width + p.length) - p.length;

        const grad = ctx.createLinearGradient(x, y, x + p.length, y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.8, p.color);
        grad.addColorStop(1, '#ffffff');

        ctx.beginPath();
        ctx.moveTo(Math.max(0, x), y);
        ctx.lineTo(Math.min(width, x + p.length), y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Glow head
        ctx.beginPath();
        ctx.arc(Math.min(width, x + p.length), y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none opacity-70"
      aria-hidden="true"
    />
  );
}
