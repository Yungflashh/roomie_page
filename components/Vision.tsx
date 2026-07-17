'use client';

import { motion } from 'framer-motion';
import { Compass, Globe2, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Compass,
    label: 'Philosophy',
    title: 'Beyond Just a Room',
    description:
      "We're building more than a listings site — a place where compatibility, trust, and community come first.",
  },
  {
    icon: Globe2,
    label: 'Reach',
    title: 'For Every City',
    description:
      'From student housing to first apartments, our vision is a trusted roommate network in every city we touch.',
  },
  {
    icon: Sparkles,
    label: 'Technology',
    title: 'Living, Reimagined',
    description:
      'Technology that understands people, not just square footage — matching on values, habits, and life stage.',
  },
];

export default function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            className="mx-auto mb-16 max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2">
              <Compass className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium tracking-wide text-primary">Our Vision</span>
            </div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              A world where home feels like{' '}
              <span className="text-primary">belonging</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-600 sm:text-xl">
              Finding a place to live shouldn&apos;t mean settling for strangers or sacrificing
              safety. Roomie exists to make shared living intentional, verified, and genuinely
              human — everywhere people move.
            </p>
          </motion.div>

          {/* Pillars */}
          <div className="grid gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className="group relative bg-white p-8 transition-colors duration-300 hover:bg-slate-50 md:p-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.09 }}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs font-semibold tabular-nums tracking-[0.2em] text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      {pillar.label}
                    </span>
                  </div>

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>

                  <h3 className="mb-2.5 text-lg font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{pillar.description}</p>

                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}