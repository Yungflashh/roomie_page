'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Compass, Heart, MessageCircle, ShieldCheck } from 'lucide-react';

const floatingChips = [
  { icon: ShieldCheck, label: 'Verified', className: 'top-[24%] left-[5%] xl:left-[9%]', delay: 0 },
  { icon: Heart, label: 'Matched', className: 'top-[34%] right-[4%] xl:right-[8%]', delay: 0.6 },
  { icon: MessageCircle, label: 'Connected', className: 'bottom-[26%] left-[9%] xl:left-[14%]', delay: 1.2 },
];

const stats = [
  { number: '500+', label: 'Early signups' },
  { number: '100%', label: 'Verified users' },
  { number: '4.9', label: 'Beta rating' },
];

const words = ['Find', 'your', 'perfect'];

export default function Hero({ onJoinWaitlist }: { onJoinWaitlist: () => void }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-28 items-center justify-center overflow-hidden"
    >
      {/* Dot grid, faded at the edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(45,157,157,0.25) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 75% 60% at 50% 40%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 60% at 50% 40%, black 35%, transparent 100%)',
        }}
      />

      {/* Floating glass chips */}
      <div className="hidden lg:block">
        {floatingChips.map((chip) => {
          const Icon = chip.icon;
          return (
            <motion.div
              key={chip.label}
              className={`absolute ${chip.className} z-10 flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: 1.3 + chip.delay, duration: 0.6 },
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: chip.delay },
              }}
            >
              <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
              <span className="text-xs font-medium text-slate-600">{chip.label}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="container relative z-10 mx-auto px-6 pb-20 pt-28 text-center">
        {/* Badge */}
        <motion.div
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/20 px-4 py-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
            Coming Soon
          </span>
        </motion.div>

        {/* Heading — word-by-word rise */}
        <h1 className="mx-auto max-w-5xl text-balance text-5xl font-bold leading-[0.92] tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="inline-flex flex-wrap justify-center gap-x-[0.25em]">
            {words.map((w, i) => (
              <span key={w} className="inline-block overflow-hidden py-1">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.25 + i * 0.09, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </span>
          <br />
          <span className="inline-block overflow-hidden py-1">
            <motion.span
              className="inline-block text-primary"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.52, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              roommate
            </motion.span>
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Match with verified roommates, discover housing, and build meaningful connections — all in
          one secure platform.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
        >
          <button
            onClick={onJoinWaitlist}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90"
          >
            Join the Waitlist
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
            <a href="#vision"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-8 py-4 text-lg font-semibold text-slate-700 transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Compass className="h-5 w-5 text-primary" strokeWidth={1.75} />
            Our Story
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mx-auto mt-16 grid max-w-lg grid-cols-3 divide-x divide-slate-200 rounded-[24px] border border-slate-200 py-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-2">
              <div className="text-2xl font-bold tracking-tight text-slate-900">{stat.number}</div>
              <div className="mt-0.5 text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-primary/30 p-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}