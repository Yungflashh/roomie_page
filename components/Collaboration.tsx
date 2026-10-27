'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2, Handshake, Users } from 'lucide-react';

const tracks = [
  {
    icon: Users,
    label: 'Community',
    title: 'With Our Community',
    description:
      'Feedback from people on our waitlist shapes what we build, from matching to safety features.',
  },
  {
    icon: Building2,
    label: 'Property',
    title: 'With Property Owners',
    description:
      'We work with landlords and agents to bring real, available places onto Roomie.',
  },
  {
    icon: Handshake,
    label: 'Partners',
    title: 'With Campuses & Partners',
    description:
      "We're building relationships with schools and organizations to bring safer housing to the people who need it most.",
  },
];

export default function Collaboration({ onJoinWaitlist }: { onJoinWaitlist: () => void }) {
  return (
    <section id="collaboration" className="relative scroll-mt-28 overflow-hidden py-24 sm:py-16">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            className="flex flex-col gap-6 border-b border-slate-200 pb-12 md:flex-row md:items-end md:justify-between"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="mb-5 flex items-center gap-2.5">
                <Handshake className="h-4 w-4 text-primary" strokeWidth={1.75} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                  Collaboration
                </span>
              </div>
              <h2 className="text-balance text-4xl font-bold leading-[0.95] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Better living,
                <br />
                <span className="text-slate-300">built</span>{' '}
                <span className="text-primary">together</span>
              </h2>
            </div>
            <p className="max-w-sm text-pretty text-base leading-relaxed text-slate-500 md:text-right">
              Roomie is shaped by the people who use it: early testers guiding the app, owners listing
              real homes, and roommates trusting us with their next move.
            </p>
          </motion.div>

          {/* Tracks */}
          <div>
            {tracks.map((track, index) => {
              const Icon = track.icon;
              return (
                <motion.div
                  key={track.title}
                  className="group relative border-b border-slate-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.09 }}
                >
                  {/* hover sweep */}
                  <span className="pointer-events-none absolute inset-y-0 -left-4 -right-4 -z-10 origin-left scale-x-0 rounded-2xl bg-slate-50 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />

                  <div className="grid items-center gap-5 py-8 md:grid-cols-[auto_auto_1fr] md:gap-8 md:py-10">
                    <span className="text-[11px] font-semibold tabular-nums tracking-[0.2em] text-slate-300 transition-colors duration-300 group-hover:text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                    </div>

                    <div className="min-w-0">
                      <div className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                        {track.label}
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1 md:text-2xl">
                        {track.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                        {track.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[28px] border border-slate-200 p-8 sm:p-10 md:flex-row md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center md:text-left">
              <h3 className="text-balance text-2xl font-bold tracking-tight text-slate-900">
                Want to build with us?
              </h3>
              <p className="mt-2 max-w-md text-sm text-slate-600">
                Join the waitlist, or reach out if you own property or represent an organization.
              </p>
            </div>

            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
              <button
                onClick={onJoinWaitlist}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-lg transition-colors hover:bg-primary/90"
              >
                Join the Waitlist
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="mailto:support@roomieng.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 font-semibold text-slate-700 transition-colors hover:border-primary/40 hover:text-primary"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}