'use client';

import { motion } from 'framer-motion';
import { UserPlus, Search, MessageSquare, Home } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Profile',
    description: 'Sign up and verify your identity with ID and social media for a secure experience.',
  },
  {
    icon: Search,
    title: 'Match & Discover',
    description: 'Browse verified roommates and housing options that match your preferences.',
  },
  {
    icon: MessageSquare,
    title: 'Connect & Bond',
    description: 'Chat, play games, and get to know potential roommates before committing.',
  },
  {
    icon: Home,
    title: 'Move In Together',
    description: 'Find your perfect match and start your shared living journey with confidence.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Finding your perfect roommate is simple with Roomie
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex gap-8 items-start mb-16">
                  {/* Icon and line */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Connecting line */}
                    {!isLast && (
                      <motion.div
                        className="absolute left-8 top-16 w-0.5 h-20 bg-primary/20"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <motion.div
                      className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.2 }}
                    >
                      Step {index + 1}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
