'use client';

import { motion } from 'framer-motion';
import {
  Trash2,
  Settings,
  Lock,
  AlertTriangle,
  Mail,
  CheckCircle2,
  ChevronRight,
  Database,
} from 'lucide-react';
import Link from 'next/link';

const Step = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => (
  <motion.div
    className="flex items-start gap-4"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: number * 0.08 }}
  >
    <div className="w-9 h-9 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
      {number}
    </div>
    <div>
      <p className="font-semibold text-slate-800 text-[15px]">{title}</p>
      <p className="text-slate-500 text-[14px] mt-0.5 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const InfoCard = ({
  icon: Icon,
  title,
  children,
  color = 'primary',
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  color?: 'primary' | 'red';
}) => {
  const bg = color === 'red' ? 'bg-red-50 border-red-100' : 'bg-primary/5 border-primary/10';
  const iconBg = color === 'red' ? 'bg-red-100' : 'bg-primary/10';
  const iconColor = color === 'red' ? 'text-red-500' : 'text-primary';
  const titleColor = color === 'red' ? 'text-red-700' : 'text-slate-900';

  return (
    <motion.div
      className={`rounded-2xl border p-6 ${bg}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <h3 className={`font-bold text-base mb-2 ${titleColor}`}>{title}</h3>
      <div className="text-slate-600 text-[14px] leading-relaxed space-y-1">{children}</div>
    </motion.div>
  );
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Nav */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            roomie
          </Link>
          <Link href="/" className="text-sm text-slate-500 hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-red-50 via-white to-slate-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex w-16 h-16 bg-red-100 rounded-2xl items-center justify-center mb-6">
              <Trash2 className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Delete Your Account
            </h1>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              You can delete your Roomie account at any time, directly from the app or by
              contacting our support team.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto space-y-8">

          {/* In-app steps */}
          <motion.div
            className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Settings className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Delete from the App</h2>
            </div>

            <p className="text-slate-500 text-[14px] mb-6">
              The fastest way to delete your account is directly inside the Roomie app:
            </p>

            <div className="space-y-5">
              <Step number={1} title="Open Roomie and go to your Profile" description="Tap your avatar or profile icon in the bottom navigation bar." />
              <Step number={2} title="Open Settings" description='Tap the settings icon (⚙️) in the top-right corner of your profile.' />
              <Step number={3} title='Tap "Privacy & Security"' description="Scroll down to find the Privacy & Security option in the settings menu." />
              <Step number={4} title='Scroll to "Danger Zone" and tap "Delete Account"' description="This is at the bottom of the Privacy & Security screen." />
              <Step number={5} title="Enter your password to confirm" description="Type your account password to verify it's really you, then tap Delete Forever." />
            </div>

            {/* Visual path indicator */}
            <div className="mt-8 flex flex-wrap items-center gap-1.5 text-[13px] text-slate-400 bg-slate-50 rounded-xl px-4 py-3">
              {['Profile', 'Settings', 'Privacy & Security', 'Delete Account'].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="text-slate-600 font-medium">{item}</span>
                  {i < arr.length - 1 && <ChevronRight className="w-3.5 h-3.5" />}
                </span>
              ))}
            </div>
          </motion.div>

          {/* What happens grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <InfoCard icon={Database} title="What gets deleted">
              <p>Your profile, photos, and preferences</p>
              <p>Your match history and conversations</p>
              <p>Your housing listings</p>
              <p>All personal data tied to your account</p>
            </InfoCard>

            <InfoCard icon={CheckCircle2} title="What this means">
              <p>Your profile is hidden immediately</p>
              <p>Data is permanently deleted within <strong>30 days</strong></p>
              <p>You can create a new account anytime</p>
              <p>Shared messages may persist until the other user also deletes</p>
            </InfoCard>
          </div>

          {/* Warning card */}
          <InfoCard icon={AlertTriangle} title="This action is permanent" color="red">
            <p>
              Once your account is deleted, your profile, matches, messages, and all associated
              data <strong>cannot be recovered</strong>. If you're having trouble with the app,
              consider reaching out to support before deleting — we'd love to help.
            </p>
          </InfoCard>

          {/* Can't access app */}
          <motion.div
            className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Can't Access the App?</h2>
            </div>
            <p className="text-slate-500 text-[14px] mb-5 leading-relaxed">
              If you're unable to log in or access the app, you can request account deletion by
              emailing our support team. Include the email address associated with your Roomie
              account and we'll process your request within <strong>7 business days</strong>.
            </p>
            <a
              href="mailto:support@roomieng.com?subject=Account Deletion Request"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Email support@roomieng.com
            </a>
          </motion.div>

          {/* Privacy link */}
          <motion.div
            className="text-center text-sm text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              For details on how we handle your data, read our{' '}
              <Link href="/privacy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="mt-1">© {new Date().getFullYear()} Roomie. All rights reserved.</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
