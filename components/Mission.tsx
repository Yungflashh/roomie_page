'use client';

import { motion } from 'framer-motion';
import { Heart, LifeBuoy, Scale, Target, Compass } from 'lucide-react';

const commitments = [
  {
    icon: Target,
    title: 'Verify Before Connect',
    description:
      'No anonymous chats. Every member confirms their identity before they can match, message, or list a space.',
  },
  {
    icon: Heart,
    title: 'Match on What Matters',
    description:
      'Lifestyle, habits, and values — not just budget and location — drive every recommendation we make.',
  },
  {
    icon: Scale,
    title: 'Keep Things Fair',
    description:
      'Built-in tools for splitting rent, bills, and chores so no roommate carries an unfair share.',
  },
  {
    icon: LifeBuoy,
    title: 'Support the Whole Move',
    description:
      'From first match to move-in day, our team and community are there when questions come up.',
  },
];

export default function Mission() {
  return (
    <section id="mission" className="relative scroll-mt-28 overflow-hidden py-7 sm:py-16">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            className="mx-auto mb-20 max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2">
              <Compass className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium tracking-wide text-primary">Our Mission</span>
            </div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Making safe, compatible living the{' '}
              <span className="text-primary">default</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-600 sm:text-xl">
              We remove the guesswork and risk from finding a roommate — replacing cold classifieds
              with verified profiles, smart matching, and tools that keep shared living running
              smoothly.
            </p>
          </motion.div>

          {/* Commitments */}
          <div className="grid gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group relative bg-white p-8 transition-colors duration-300 hover:bg-slate-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <span className="mb-6 block text-xs font-semibold tabular-nums tracking-[0.2em] text-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 transition-all duration-300 group-hover:border-primary/30 group-hover:scale-105">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>

                  <h3 className="mb-2.5 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>

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