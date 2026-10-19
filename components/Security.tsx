'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle2, UserCheck, Eye, FileCheck } from 'lucide-react';

const securityFeatures = [
  {
    icon: UserCheck,
    title: 'ID Verification',
    description: 'Users verify their identity with a government-issued ID.',
  },
  {
    icon: Eye,
    title: 'Social Media Check',
    description: 'Link Instagram, X, LinkedIn and other accounts so people can see you are real.',
  },
  {
    icon: FileCheck,
    title: 'Listing Reports',
    description: 'Spot a listing that looks wrong? Report it and our team will review it.',
  },
  {
    icon: Lock,
    title: 'Secure Connections',
    description: 'Everything you send through Roomie travels over an encrypted connection.',
  },
  {
    icon: Shield,
    title: 'Block and Report',
    description: 'Block anyone at any time and report bad behaviour to our moderation team.',
  },
  {
    icon: CheckCircle2,
    title: 'Roommate Reviews',
    description: 'People who have lived with someone can review them, so you know what to expect.',
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
              Built Around Safety
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              You're deciding who to live with, so you should know who you're talking to. Here is how we keep Roomie safe.
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
        </div>
      </div>
    </section>
  );
}
