'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Share2, UserCheck, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';

const Section = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    className="mb-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
    </div>
    <div className="pl-13 space-y-3 text-slate-600 leading-relaxed text-[15px]">{children}</div>
  </motion.div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mt-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className="text-primary font-bold mt-0.5">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SubHeading = ({ title }: { title: string }) => (
  <p className="font-semibold text-slate-800 mt-4 mb-1">{title}</p>
);

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Nav bar */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            roomie
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-primary transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-primary/10 via-white to-teal-50/30 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex w-16 h-16 bg-primary/10 rounded-2xl items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              We take your privacy seriously. Here's exactly what we collect, why, and how we protect it.
            </p>
            <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-400 text-sm">
              <Calendar className="w-4 h-4" />
              Last updated: March 2026
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">

          {/* Intro */}
          <motion.p
            className="text-slate-600 leading-relaxed mb-10 text-[15px] bg-primary/5 rounded-2xl p-5 border border-primary/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to Roomie ("we", "our", "us"). This Privacy Policy explains how we collect, use,
            share, and protect your personal information when you use the Roomie mobile application and
            website at{' '}
            <a href="https://roomieng.com" className="text-primary font-medium hover:underline">
              roomieng.com
            </a>
            . By using Roomie, you agree to the practices described in this policy.
          </motion.p>

          <Section icon={Database} title="Information We Collect">
            <SubHeading title="Information you provide directly" />
            <p>When you register and use Roomie, we collect:</p>
            <BulletList
              items={[
                'Full name, email address, and phone number',
                'Government-issued ID (for identity verification)',
                'Profile photos and optional bio',
                'Lifestyle preferences, daily schedule, and roommate requirements',
                'Housing listing details (if you post a listing)',
                'Messages and communications with other users',
                'Financial information used within the bill-split feature',
              ]}
            />
            <SubHeading title="Information collected automatically" />
            <p>When you use the app, we also collect:</p>
            <BulletList
              items={[
                'Approximate location (for nearby search)',
                'Device type, operating system, and app version',
                'Usage data: screens visited, features used, tap interactions',
                'Crash reports and performance diagnostics',
              ]}
            />
            <SubHeading title="Information from third parties" />
            <p>
              If you connect a social media account (Instagram, X/Twitter, etc.) for verification, we
              receive basic profile data such as your username and profile picture from that platform.
            </p>
          </Section>

          <Section icon={Eye} title="How We Use Your Information">
            <p>We use your information to:</p>
            <BulletList
              items={[
                'Create and manage your Roomie account',
                'Match you with compatible roommates using our algorithm',
                'Display your profile to other users (based on your privacy settings)',
                'Enable in-app messaging, games, and community features',
                'Power the bill-split, chores, and home management tools',
                'Send you notifications about matches, messages, and app updates',
                'Verify your identity and detect fraudulent or unsafe activity',
                'Improve app performance, features, and the matching algorithm',
                'Comply with legal obligations',
              ]}
            />
          </Section>

          <Section icon={Share2} title="How We Share Your Information">
            <p>
              <strong>We do not sell your personal data.</strong> We may share information only in the
              following circumstances:
            </p>
            <BulletList
              items={[
                'With other Roomie users as part of your public or semi-private profile — controlled entirely by your Privacy & Security settings',
                'With trusted service providers who help us run the app (cloud hosting, analytics, push notifications) — they are bound by confidentiality agreements',
                'With law enforcement or regulatory bodies when required by applicable Nigerian law or a valid legal process',
                'In connection with a merger, acquisition, or sale of assets — you will be notified before your data is transferred',
              ]}
            />
          </Section>

          <Section icon={Lock} title="Data Security">
            <p>
              We implement industry-standard security measures to protect your data, including:
            </p>
            <BulletList
              items={[
                'End-to-end encryption for in-app messages',
                'Encrypted storage for sensitive profile data and ID documents',
                'Secure HTTPS connections for all data transmission',
                'Access controls ensuring only authorised team members can access user data',
                'Regular security audits and vulnerability assessments',
              ]}
            />
            <p className="mt-3">
              Despite these measures, no method of transmission over the internet is 100% secure. We
              encourage you to use a strong, unique password and enable notifications for account
              activity.
            </p>
          </Section>

          <Section icon={UserCheck} title="Your Privacy Controls">
            <p>You are in control of your data. Within the app you can:</p>
            <BulletList
              items={[
                'Toggle who can see your online status and last seen time',
                'Set profile visibility to "Everyone" or "Matches Only"',
                'Disable read receipts on messages',
                'Toggle location sharing with your roommate group',
                'Block and unblock other users at any time',
                'Request a full export of your personal data',
                'Delete your account permanently (data is removed within 30 days)',
              ]}
            />
          </Section>

          <Section icon={Calendar} title="Data Retention">
            <p>
              We retain your personal data for as long as your account is active. When you delete your
              account:
            </p>
            <BulletList
              items={[
                'Your profile is immediately hidden from other users',
                'Your data is scheduled for permanent deletion within 30 days',
                'Some anonymised, non-identifying data may be retained for analytics purposes',
                'Messages in shared conversations may persist until the other user also deletes them',
              ]}
            />
          </Section>

          <Section icon={Mail} title="Contact Us">
            <p>
              If you have questions about this Privacy Policy, want to request your data, or need to
              report a privacy concern, please reach out:
            </p>
            <div className="mt-4 bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <p className="font-semibold text-slate-800">Roomie</p>
              <p className="mt-1">
                Email:{' '}
                <a href="mailto:support@roomieng.com" className="text-primary hover:underline">
                  support@roomieng.com
                </a>
              </p>
              <p>
                Website:{' '}
                <a href="https://roomieng.com" className="text-primary hover:underline">
                  roomieng.com
                </a>
              </p>
              <p>Lagos, Nigeria</p>
            </div>
          </Section>

          {/* Footer note */}
          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <span>© {new Date().getFullYear()} Roomie. All rights reserved.</span>
            <Link href="/terms" className="text-primary hover:underline font-medium">
              View Terms & Conditions →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
