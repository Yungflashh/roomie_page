'use client';

import { motion } from 'framer-motion';
import { UserPlus, Search, MessageSquare, Home } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Profile',
    description: 'Sign up and verify your identity with ID and social media for a secure experience.',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&h=600&fit=crop',
  },
  {
    icon: Search,
    title: 'Match & Discover',
    description: 'Browse verified roommates and housing options that match your preferences.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
  },
  {
    icon: MessageSquare,
    title: 'Connect & Bond',
    description: 'Chat, play games, and get to know potential roommates before committing.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop',
  },
  {
    icon: Home,
    title: 'Move In Together',
    description: 'Find your perfect match and start your shared living journey with confidence.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.title}
                className="relative mb-20 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                  {/* Image side */}
                  <motion.div
                    className={`relative ${isEven ? '' : 'md:col-start-2'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />
                      
                      {/* Floating step number */}
                      <motion.div
                        className="absolute top-6 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      >
                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                      </motion.div>
                    </div>

                    {/* Decorative element */}
                    <div className={`absolute -z-10 w-full h-full rounded-3xl bg-primary/10 ${isEven ? '-bottom-6 -right-6' : '-bottom-6 -left-6'}`} />
                  </motion.div>

                  {/* Content side */}
                  <div className={`${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    >
                      {/* Icon */}
                      <motion.div
                        className="inline-flex w-16 h-16 bg-primary/10 rounded-2xl items-center justify-center mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>

                      {/* Step badge */}
                      <motion.div
                        className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        Step {index + 1}
                      </motion.div>

                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress indicator for mobile */}
                      {!isLast && (
                        <motion.div
                          className="md:hidden mt-8 flex items-center gap-3"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                        >
                          <div className="h-0.5 flex-1 bg-primary/20" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <div className="h-0.5 flex-1 bg-primary/20" />
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Connecting line for desktop */}
                {!isLast && (
                  <motion.div
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-primary/40 to-transparent"
                    style={{ top: '100%' }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-slate-600 mb-6">
            Ready to find your perfect roommate?
          </p>
          <motion.button
            className="px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}