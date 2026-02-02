'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Security from '@/components/Security';
import WaitlistModal from '@/components/WaitlistModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      <Hero onJoinWaitlist={() => setIsWaitlistOpen(true)} />
      <Features />
      <HowItWorks />
      <Security />
      
      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of others waiting for Roomie to launch. Be the first to know when we go live!
          </p>
          <button
            onClick={() => setIsWaitlistOpen(true)}
            className="px-8 py-4 bg-white text-primary rounded-full text-lg font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Join the Waitlist Now
          </button>
        </div>
      </section>

      <Footer />
      
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </main>
  );
}
