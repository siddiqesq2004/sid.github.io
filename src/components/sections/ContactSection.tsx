'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/data/siteConfig';
import { useToast } from '@/components/ui/Toast';
import { MagneticButton } from '@/components/ui/MagneticButton';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  FileText,
  Send,
  CheckCircle2,
  Copy,
  Sparkles,
  Clock,
} from 'lucide-react';

const projectTypes = [
  'Full-Stack SaaS Development',
  'AI Integration & Autonomous Agents',
  'Data Integration & Pipelines',
  'Multi-Tenant ERP Architecture',
  'Job Opportunity / Full-Time Role',
  'Freelance / Consultation',
  'Other Engineering Inquiries',
];

export function ContactSection() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: projectTypes[0],
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Validation Error', 'Please complete the highlighted fields.', 'error');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/siddiqesq2004@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not Specified',
          projectType: formData.projectType,
          message: formData.message,
          _subject: `[Portfolio Inquiry] ${formData.projectType} from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: projectTypes[0],
          message: '',
        });

        // Trigger celebratory confetti
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#38bdf8', '#818cf8', '#06b6d4', '#10b981'],
        });

        showToast(
          'Message Sent Directly!',
          'Your message was delivered to siddiqesq2004@gmail.com. Mohamed will get back to you shortly!',
          'success'
        );
      } else {
        throw new Error('Failed to send email via service');
      }
    } catch (err) {
      setSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#818cf8', '#06b6d4'],
      });

      showToast(
        'Message Prepared!',
        'Opening your email client to send directly to siddiqesq2004@gmail.com...',
        'success'
      );

      // Fallback: Construct mailto link
      const subject = encodeURIComponent(`[${formData.projectType}] Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Mohamed,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n`
      );
      window.location.href = `mailto:siddiqesq2004@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} Copied!`, text, 'success');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="GET IN TOUCH"
        title="Have an idea worth building?"
        subtitle="Let's turn it into something real. Available for software engineering opportunities, contract work, and AI/SaaS development."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Quick Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {/* Main Info Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-xl">
            {/* Profile Avatar Header */}
            <div className="flex items-center gap-4 pb-4 mb-4 border-b border-white/[0.08]">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-cyan-500/40 shrink-0 shadow-lg bg-slate-900">
                <img
                  src="/profile.png"
                  alt="Mohamed Siddiqe"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950 animate-pulse" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                  {siteConfig.name}
                </h3>
                <p className="text-xs text-cyan-300 font-mono mt-0.5">
                  Full-Stack SaaS & AI
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Direct Communication Channels</span>
                </div>
              </div>
            </div>

            <div className="space-y-3.5">
              {/* Email */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between group hover:border-cyan-500/30 transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-xs font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(siteConfig.email, 'Email')}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors shrink-0"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between group hover:border-cyan-500/30 transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-xs font-semibold text-white hover:text-blue-300 transition-colors truncate block"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(siteConfig.phone, 'Phone')}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors shrink-0"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Location & Remote Status
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {siteConfig.location} • <span className="text-emerald-400">Available for Remote</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Download Action */}
            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <a
                href={siteConfig.resumeUrl}
                download="Mohamed_Abupakkar_Siddiqe_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-all group"
              >
                <FileText className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-xl"
        >
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
            <h3 className="text-lg font-bold text-white">Send a Direct Message</h3>
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Response Time: &lt; 24 hrs</span>
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Your Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="Mohamed / Sarah..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all ${
                    errors.name ? 'border-rose-500/60' : 'border-white/10'
                  }`}
                />
                {errors.name && (
                  <span className="text-[10px] text-rose-400 mt-1 block">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all ${
                    errors.email ? 'border-rose-500/60' : 'border-white/10'
                  }`}
                />
                {errors.email && (
                  <span className="text-[10px] text-rose-400 mt-1 block">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Company */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name (Optional)"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                >
                  {projectTypes.map((pt) => (
                    <option key={pt} value={pt} className="bg-slate-950 text-white">
                      {pt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                Message & Scope <span className="text-rose-400">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: '' });
                }}
                placeholder="Tell me about your product requirements, timeline, and goals..."
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none ${
                  errors.message ? 'border-rose-500/60' : 'border-white/10'
                }`}
              />
              {errors.message && (
                <span className="text-[10px] text-rose-400 mt-1 block">{errors.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Message Dispatched!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
