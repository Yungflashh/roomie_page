'use client';

import { motion } from 'framer-motion';
import { Heart, Home, Shield, Users, Calendar, DollarSign, Gamepad2, MessageCircle, LayoutGrid, ArrowUpRight } from 'lucide-react';

const features = [
  { icon: Heart, title: 'Smart Matching', description: 'Our algorithm matches you with compatible roommates based on lifestyle, interests, and preferences.' },
  { icon: Home, title: 'Find Housing', description: 'Browse verified listings and connect directly with property owners and roommates.' },
  { icon: Shield, title: 'Verified & Secure', description: 'Every user is verified with ID and social media. Your safety is our top priority.' },
  { icon: MessageCircle, title: 'Connect & Bond', description: 'Chat, play games, and build friendships before moving in together.' },
  { icon: DollarSign, title: 'Split Expenses', description: 'Easily track and split bills, rent, and shared expenses with built-in tools.' },
  { icon: Calendar, title: 'Shared Tasks', description: 'Coordinate chores, schedules, and responsibilities with your roommates.' },
  { icon: Gamepad2, title: 'Fun Activities', description: 'Play games, join events, and create lasting memories with your roommates.' },
  { icon: Users, title: 'Community', description: 'Join a vibrant community of verified users looking for genuine connections.' },
];

const stats = [
  { value: '300+', label: 'Verified users' },
  { value: '98%', label: 'Match rate' },
  { value: '4.9', label: 'App rating' },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-7 sm:py-16">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgb(148 163 184 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.12) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center md:mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md">
            <LayoutGrid className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium tracking-wide text-slate-700">What You Get</span>
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Everything you need, <span className="text-primary">in one place</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-600 sm:text-xl">
            Roomie brings together all the tools you need to find roommates, manage your home, and build lasting friendships.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          {/* Sticky media column */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              className="group relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/50 shadow-2xl shadow-slate-900/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1764006195843-e6f9a5781500?w=1200&h=900&fit=crop"
                alt="A group of roommates hanging out together on a couch in their shared apartment"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-slate-950/45" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 backdrop-blur-md">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-medium text-white/90">2,431 online now</span>
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">Connect &amp; Collaborate</h3>
                <p className="mt-1 text-sm text-white/80 sm:text-base">Build genuine connections with verified roommates</p>
              </div>
            </motion.div>

            <div className="mt-5 grid grid-cols-2 gap-5">
              {[
                { src: 'https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?w=600&h=600&fit=crop', alt: 'A hand holding house-shaped keys at the entrance of a new apartment', label: 'Find Your Space' },
                { src: 'https://images.unsplash.com/photo-1699760813893-fe5b1e5695a9?w=600&h=600&fit=crop', alt: 'Two roommates relaxing together in a shared bedroom, one reading and one playing guitar', label: 'Bond Before Moving In' },
              ].map((img, i) => (
                <motion.div
                  key={img.label}
                  className="group relative aspect-square overflow-hidden rounded-[24px] border border-white/50 shadow-lg shadow-slate-900/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]" />
                  <div className="absolute inset-0 bg-slate-950/40" />
                  <h4 className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white sm:text-base">{img.label}</h4>
                </motion.div>
              ))}
            </div>

            {/* Stat strip */}
            <motion.div
              className="mt-5 grid grid-cols-3 divide-x divide-slate-200 overflow-hidden rounded-[24px] border border-white/60 bg-white/70 py-5 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {stats.map((s) => (
                <div key={s.label} className="px-2 text-center">
                  <div className="text-2xl font-bold tracking-tight text-slate-900">{s.value}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/60 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 -translate-y-1 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/30">
                      <Icon strokeWidth={1.75} className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-1.5 text-base font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}