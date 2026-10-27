'use client';

import { motion } from 'framer-motion';
import { FileText, Instagram, Mail, Shield, Trash2 } from 'lucide-react';
import Link from 'next/link';

const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/roomieappng?igsh=aDIyY3J5dzYxczl6', label: 'Instagram' },
    { icon: XLogo, href: 'https://x.com/RommieAppNG', label: 'X (Twitter)' },
    { icon: Mail, href: 'mailto:support@roomieng.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Vision', href: '#vision' },
    { label: 'Mission', href: '#mission' },
    { label: 'Collaboration', href: '#collaboration' },
  ];

  const legalLinks = [
    { icon: Shield, href: '/privacy', label: 'Privacy Policy' },
    { icon: FileText, href: '/terms', label: 'Terms of Service' },
    { icon: Trash2, href: '/delete-account', label: 'Delete Account' },
  ];

  return (
    <footer className="relative overflow-hidden bg-black py-16 text-white">
      {/* Decorative glow, matches the primary-tinted glows used elsewhere on the page */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top section: brand, quick nav, contact */}
          <div className="grid gap-10 pb-12 mb-12 border-b border-s-800 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <motion.h3 className="mb-3 flex items-baseline gap-0.5" whileHover={{ scale: 1.05 }}>
                <img src="/roomie-logo-transparent-cropped.png" alt="Roomie" className="h-7 w-auto brightness-0 invert" />
                <span className="text-3xl font-bold leading-none">oomie</span>
              </motion.h3>
              <p className="text-slate-400 leading-relaxed max-w-xs">
                Find verified roommates and shared housing in Nigeria.
              </p>
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <p className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-4">
                Navigate
              </p>
              <div className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="w-fit text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-4">
                Get in Touch
              </p>
              <a
                href="mailto:support@roomieng.com"
                className="block mb-2 text-slate-400 hover:text-white transition-colors w-fit"
              >
                support@roomieng.com
              </a>
              <p className="text-slate-400">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Legal links */}
          <div className="grid grid-cols-1 gap-3 mb-8 sm:grid-cols-3">
            {legalLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-center gap-2.5 rounded-2xl border border-slate-800 bg-slate-800/40 px-5 py-4 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>© {currentYear} Roomie. All rights reserved.</p>
            <p>Made with care in Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
