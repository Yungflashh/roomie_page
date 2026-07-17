'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Vision', href: '#vision' },
  { label: 'Mission', href: '#mission' },
  { label: 'Collaboration', href: '#collaboration' },
];

export default function Navbar({ onJoinWaitlist }: { onJoinWaitlist: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`relative flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border border-white/[0.25] backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? 'px-3 py-2 bg-white/[0.15] shadow-[0_12px_40px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.3)]'
              : 'px-4 py-3 bg-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.2)]'
          }`}
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)',
          }}
        >
          {/* Enhanced Glossy Glare Overlay */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute -top-[100%] -left-[50%] right-0 h-[200%] w-[200%] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.45)_0%,transparent_60%)] opacity-70" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="relative z-10 flex shrink-0 items-baseline gap-0.5 pl-2"
          >
            <img src="/roomie-logo-transparent-cropped.png" alt="Roomie" className="h-7 w-auto sm:h-8" />
            <span className="hidden text-3xl font-bold leading-none tracking-tight text-[#075056] sm:block">
              oomie
            </span>
          </a>

          {/* Desktop links - Nested Pill glass */}
          <div className="relative z-10 hidden items-center gap-1 rounded-full border border-white/[0.15] bg-white/[0.06] p-1 md:flex shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-liquid-pill"
                    className="absolute inset-0 rounded-full bg-primary shadow-[0_4px_20px_rgba(45,157,157,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span
                  className={`relative z-10 mix-blend-normal transition-colors duration-300 ${
                    active === link.href ? 'text-white font-semibold' : 'text-slate-800 hover:text-primary'
                  }`}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="relative z-10 flex shrink-0 items-center gap-2">
            <button
              onClick={onJoinWaitlist}
              className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(45,157,157,0.35)] transition-all duration-300 hover:scale-105 hover:bg-primary-dark sm:inline-flex"
            >
              Join Waitlist
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.25] bg-white/[0.15] text-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-md md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu - slide-in sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-xs flex-col border-l border-white/[0.25] bg-white/[0.18] p-6 shadow-[-24px_0_50px_rgba(0,0,0,0.2),inset_1px_0_1px_rgba(255,255,255,0.4)] backdrop-blur-2xl md:hidden"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 100%)',
              }}
            >
              {/* Glare effect */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 left-0 right-0 h-full bg-gradient-to-b from-white/25 to-transparent" />
              </div>

              {/* Header row: logo + close */}
              <div className="relative z-10 mb-10 flex items-center justify-between">
                <div className="flex items-baseline gap-0.5">
                  <img src="/roomie-logo-transparent-cropped.png" alt="Roomie" className="h-7 w-auto" />
                  <span className="text-2xl font-bold leading-none tracking-tight text-[#075056]">
                    oomie
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.25] bg-white/[0.15] text-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-md"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="relative z-10 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`rounded-2xl px-4 py-3.5 text-base font-medium transition-all ${
                      active === link.href
                        ? 'bg-primary text-white shadow-[0_4px_12px_rgba(45,157,157,0.3)]'
                        : 'text-slate-800 hover:bg-white/[0.15]'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTA pinned to bottom */}
              <div className="relative z-10 mt-auto pt-6">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onJoinWaitlist();
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3.5 font-semibold text-white shadow-[0_4px_16px_rgba(45,157,157,0.35)]"
                >
                  Join Waitlist
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}