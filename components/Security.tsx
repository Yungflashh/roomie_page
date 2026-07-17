'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, LockKeyhole, BadgeCheck, Fingerprint, AtSign, ClipboardCheck, ScanSearch } from 'lucide-react';

const securityFeatures = [
  {
    icon: Fingerprint,
    title: 'ID Verification',
    description: 'Every user must verify their identity with government-issued ID.',
  },
  {
    icon: AtSign,
    title: 'Social Media Check',
    description: 'Connect social accounts for additional verification and authenticity.',
  },
  {
    icon: ClipboardCheck,
    title: 'Property Verification',
    description: 'All housing listings are verified for legitimacy and accuracy.',
  },
  {
    icon: LockKeyhole,
    title: 'Secure Platform',
    description: 'End-to-end encryption keeps your conversations and data private.',
  },
  {
    icon: ScanSearch,
    title: 'Background Checks',
    description: 'Optional background screening for extra peace of mind.',
  },
  {
    icon: BadgeCheck,
    title: 'Trusted Community',
    description: 'Rating system ensures accountability and trust within the community.',
  },
];

export default function Security() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-16">
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
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium tracking-wide text-primary">Trust & Safety</span>
            </div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Your security concerns, <span className="text-primary">handled</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-600 sm:text-xl">
              Every user and listing goes through rigorous verification, so you can find roommates
              with complete confidence.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="group relative bg-white p-8 transition-colors duration-300 hover:bg-slate-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <span className="mb-6 block text-xs font-semibold tabular-nums tracking-[0.2em] text-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>

                  <h3 className="mb-2.5 text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>

                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </motion.div>
              );
            })}
          </div>

          {/* Trust strip */}
          <motion.div
            className="mx-auto mt-8 grid max-w-2xl grid-cols-3 divide-x divide-slate-200 rounded-[24px] border border-slate-200 py-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { value: '100%', label: 'Users verified' },
              { value: 'E2E', label: 'Encrypted chats' },
              { value: '24/7', label: 'Safety support' },
            ].map((s) => (
              <div key={s.label} className="px-2 text-center">
                <div className="text-2xl font-bold tracking-tight text-primary">{s.value}</div>
                <div className="mt-0.5 text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}