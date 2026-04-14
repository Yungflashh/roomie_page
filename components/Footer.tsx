'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/roomieappng?igsh=aDIyY3J5dzYxczl6', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/RommieAppNG', label: 'Twitter' },
    { icon: Mail, href: 'mailto:support@roomieng.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 pb-12 border-b border-slate-800">
            {/* Logo and tagline */}
            <div className="text-center md:text-left">
              <motion.h3
                className="text-3xl font-bold mb-2"
                whileHover={{ scale: 1.05 }}
              >
                roomie
              </motion.h3>
              <p className="text-slate-400">Find your perfect roommate</p>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>© {currentYear} Roomie. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/delete-account" className="hover:text-white transition-colors">Delete Account</Link>
              <a href="mailto:support@roomieng.com" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
