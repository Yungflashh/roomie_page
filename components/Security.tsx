'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle2, UserCheck, Eye, FileCheck } from 'lucide-react';

const securityFeatures = [
  {
    icon: UserCheck,
    title: 'ID Verification',
    description: 'Every user must verify their identity with government-issued ID.',
  },
  {
    icon: Eye,
    title: 'Social Media Check',
    description: 'Connect social accounts for additional verification and authenticity.',
  },
  {
    icon: FileCheck,
    title: 'Property Verification',
    description: 'All housing listings are verified for legitimacy and accuracy.',
  },
  {
    icon: Lock,
    title: 'Secure Platform',
    description: 'End-to-end encryption keeps your conversations and data private.',
  },
  {
    icon: Shield,
    title: 'Background Checks',
    description: 'Optional background screening for extra peace of mind.',
  },
  {
    icon: CheckCircle2,
    title: 'Trusted Community',
    description: 'Rating system ensures accountability and trust within the community.',
  },
];

export default function Security() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="w-10 h-10 text-primary" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Safety First, Always
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We take your security seriously. Every user and listing goes through rigorous verification to ensure you can find roommates with complete confidence.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="relative p-8 rounded-2xl bg-slate-50 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Trust badge */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-slate-600 text-lg">
              <span className="font-semibold text-primary">100%</span> of our users are verified
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
