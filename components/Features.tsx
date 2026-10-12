'use client';

import { motion } from 'framer-motion';
import { Heart, Home, Shield, Users, Gamepad2, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Smart Matching',
    description: 'We compare habits, schedules and preferences to show you people you are likely to get along with.',
  },
  {
    icon: Home,
    title: 'Find Housing',
    description: 'Browse rooms and apartments, and talk directly to landlords and people with a space to fill.',
  },
  {
    icon: Shield,
    title: 'Verified Profiles',
    description: 'Users verify their ID and can link their social accounts, so you know who you are talking to.',
  },
  {
    icon: MessageCircle,
    title: 'Get to Know People',
    description: 'Chat and play quick games together before you decide to share a home.',
  },
  {
    icon: Gamepad2,
    title: 'Events',
    description: 'Find local events and meet other people who are also looking for a place.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Students and young professionals across Nigeria, all looking for the same thing you are.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
            Everything You Need
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Find a roommate, find a place, and settle in together, all in one app.
          </p>
        </motion.div>

        {/* Visual showcase section */}
        <motion.div
          className="mb-20 grid lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Large featured image */}
          <motion.div
            className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl h-[400px] group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&h=800&fit=crop"
              alt="Diverse friends collaborating together"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Meet Before You Move</h3>
              <p className="text-white/90">Chat with verified people before you decide</p>
            </div>
          </motion.div>

          {/* Smaller images stacked */}
          <div className="space-y-6">
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-xl h-[190px] group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Friends in modern apartment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-lg font-bold text-white mb-1">Find Your Space</h4>
                <p className="text-sm text-white/90">Browse rooms and apartments</p>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-xl h-[190px] group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&h=400&fit=crop"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Happy diverse professionals"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-lg font-bold text-white mb-1">Verified & Safe</h4>
                <p className="text-sm text-white/90">ID-verified profiles</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}