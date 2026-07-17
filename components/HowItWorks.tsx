'use client';

import { motion } from 'framer-motion';
import { UserPlus, Search, MessageSquare, Home, ArrowRight, Route } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Profile',
    description: 'Sign up and verify your identity with ID and social media for a secure experience.',
    image: 'https://images.unsplash.com/photo-1667453466805-75bbf36e8707?w=800&h=600&fit=crop',
    meta: 'Takes ~2 minutes',
  },
  {
    icon: Search,
    title: 'Match & Discover',
    description: 'Browse verified roommates and housing options that match your preferences.',
    image: 'https://images.unsplash.com/photo-1758874385197-07d99c183a6f?w=800&h=600&fit=crop',
    meta: 'Powered by smart matching',
  },
  {
    icon: MessageSquare,
    title: 'Connect & Bond',
    description: 'Chat, play games, and get to know potential roommates before committing.',
    image: 'https://images.unsplash.com/photo-1758525865438-385dbc8caa5e?w=800&h=600&fit=crop',
    meta: 'Chat, calls & games built in',
  },
  {
    icon: Home,
    title: 'Move In Together',
    description: 'Find your perfect match and start your shared living journey with confidence.',
    image: 'https://images.unsplash.com/photo-1772724317350-520faccb15e6?w=800&h=600&fit=crop',
    meta: 'Split rent & tasks from day one',
  },
];

export default function HowItWorks({ onJoinWaitlist }: { onJoinWaitlist: () => void }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-16">
      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center md:mb-28"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2">
            <Route className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium tracking-wide text-primary">Four simple steps</span>
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            How it <span className="text-primary">works</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-600 sm:text-xl">
            Finding your perfect roommate is simple with Roomie.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-6xl">
          {/* Center rail (desktop) */}
          <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 md:block">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
            <motion.div
              className="absolute inset-x-0 top-0 h-full w-full origin-top bg-gradient-to-b from-primary via-primary/50 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.title}
                className="relative mb-16 last:mb-0 md:mb-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                {/* Rail node */}
                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
                  <span className="block h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-white" />
                </div>

                <div className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${isEven ? '' : 'md:grid-flow-dense'}`}>
                  {/* Image */}
                  <motion.div
                    className={`group relative ${isEven ? '' : 'md:col-start-2'}`}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-2xl shadow-slate-900/10">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                      <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/15" />

                      {/* Step number */}
                      <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
                        <span className="text-xl font-bold tabular-nums text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Meta pill */}
                      <div className="absolute inset-x-5 bottom-5">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xl">
                          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                          {step.meta}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className={isEven ? '' : 'md:col-start-1 md:row-start-1'}
                    initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                    </div>

                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Step {index + 1}
                    </div>

                    <h3 className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mx-auto mt-20 max-w-3xl md:mt-28"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[32px] border border-slate-200 p-10 text-center sm:p-14">
            <h3 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Ready to find your perfect roommate?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-slate-600">
              Join the waitlist and be first in line when Roomie launches in your city.
            </p>
            <motion.button
              onClick={onJoinWaitlist}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-primary-dark"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}