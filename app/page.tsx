'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Mission from '@/components/Mission';
import Security from '@/components/Security';
import WaitlistModal from '@/components/WaitlistModal';
import Footer from '@/components/Footer';
import Team from '@/components/Team';
import Collaboration from '@/components/Collaboration';

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const openWaitlist = () => setIsWaitlistOpen(true);

  return (
    <main className="overflow-hidden">
      <Navbar onJoinWaitlist={openWaitlist} />
      <Hero onJoinWaitlist={openWaitlist} />
      <Vision />
      <Features />
      <HowItWorks onJoinWaitlist={openWaitlist} />
      <Mission />
      <Security />
      <Team />
      <Collaboration onJoinWaitlist={openWaitlist} />

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 sm:py-16">
        <div className="container relative z-10 mx-auto px-6">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-primary px-6 py-20 text-center sm:px-12 sm:py-28">
            {/* Texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            {/* Glow + inner ring */}
            <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-white/20 blur-[100px]" />
            <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-inset ring-white/15" />

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                  Launching soon
                </span>
              </div>

              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Ready to find your next roommate?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-white/80 sm:text-xl">
                Join the waitlist and we'll let you know as soon as Roomie is live.
              </p>

              <button
                onClick={openWaitlist}
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary shadow-xl shadow-black/10 transition-transform duration-300 hover:scale-105"
              >
                Join the Waitlist
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </main>
  );
}