'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  UserCheck,
  Users,
  AlertTriangle,
  Camera,
  MessageSquare,
  Scale,
  Calendar,
  Mail,
} from 'lucide-react';
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
    <div className="space-y-3 text-slate-600 leading-relaxed text-[15px]">{children}</div>
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

export default function TermsPage() {
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              Please read these terms carefully. By using Roomie, you agree to be bound by them.
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
            Welcome to Roomie. These Terms &amp; Conditions govern your use of the Roomie mobile
            application and website at{' '}
            <a href="https://roomieng.com" className="text-primary font-medium hover:underline">
              roomieng.com
            </a>
            , operated by Roomie (Lagos, Nigeria). By creating an account or accessing the app,
            you confirm that you have read, understood, and agree to these terms.
          </motion.p>

          {/* ── Terms of Service ── */}
          <Section icon={FileText} title="Terms of Service">
            <SubHeading title="Acceptance of Terms" />
            <p>
              By creating an account or accessing the Roomie application, you acknowledge that you
              have read, understood, and agree to be bound by these Terms of Service. If you do not
              agree to these terms, you must not use the app.
            </p>

            <SubHeading title="Eligibility" />
            <p>
              You must be at least 18 years of age to create an account and use Roomie. By
              registering, you represent and warrant that you meet this age requirement and have
              the legal capacity to enter into a binding agreement.
            </p>

            <SubHeading title="Account Rules" />
            <p>
              You are responsible for maintaining the confidentiality of your account credentials.
              You agree to provide accurate, current, and complete information during registration
              and to update your profile as needed. You may not:
            </p>
            <BulletList
              items={[
                'Create multiple accounts or impersonate another person',
                'Share your login credentials with others',
                'Use the app for any unlawful or unauthorized purpose',
                'Attempt to interfere with the app\'s security or functionality',
                'Scrape, copy, or reproduce any part of the app or its content',
              ]}
            />
          </Section>

          {/* ── User Verification ── */}
          <Section icon={UserCheck} title="User Verification">
            <p>
              Roomie requires identity verification to maintain a safe community. By using the app
              you agree to:
            </p>
            <BulletList
              items={[
                'Submit a valid government-issued ID during onboarding',
                'Optionally connect a social media account for additional authenticity',
                'Ensure your profile information accurately represents you',
                'Not use edited, forged, or another person\'s identification documents',
              ]}
            />
            <p className="mt-3">
              Roomie reserves the right to suspend or permanently ban accounts that fail
              verification or are found to have submitted false information.
            </p>
          </Section>

          {/* ── Community Guidelines ── */}
          <Section icon={Users} title="Community Guidelines">
            <SubHeading title="Respect &amp; Kindness" />
            <p>
              Roomie is a community built on mutual respect. Treat all users with kindness and
              courtesy. We celebrate diversity and expect all members to create a welcoming
              environment for everyone regardless of race, religion, gender, sexual orientation,
              or background.
            </p>

            <SubHeading title="No Harassment" />
            <p>
              Harassment, bullying, hate speech, threats, or intimidation of any kind is strictly
              prohibited. This includes but is not limited to:
            </p>
            <BulletList
              items={[
                'Sending unsolicited inappropriate messages or content',
                'Repeatedly contacting someone who has asked you to stop',
                'Making derogatory comments about another user\'s identity',
                'Threatening physical or emotional harm',
                'Doxxing or sharing another user\'s private information without consent',
              ]}
            />
          </Section>

          {/* ── Photo Guidelines ── */}
          <Section icon={Camera} title="Photo Guidelines">
            <p>
              Profile photos must be of yourself and must clearly show your face. Photos must not
              contain:
            </p>
            <BulletList
              items={[
                'Nudity or sexually explicit content',
                'Graphic violence or disturbing imagery',
                'Offensive symbols, hate speech, or discriminatory content',
                'Misleading imagery designed to impersonate another person or brand',
                'Watermarks, logos, or heavily filtered images that obscure your appearance',
              ]}
            />
            <p className="mt-3">
              We reserve the right to remove photos that violate these guidelines without notice.
              Repeated violations may result in account suspension.
            </p>
          </Section>

          {/* ── Messaging & Content ── */}
          <Section icon={MessageSquare} title="Messaging &amp; Content">
            <p>
              All content you create or share on Roomie — including messages, listings, reviews,
              and profile information — must comply with these terms. You are solely responsible
              for your content. You agree not to share:
            </p>
            <BulletList
              items={[
                'Spam, promotional content, or unsolicited advertisements',
                'False or misleading housing listings',
                'Content that infringes on the intellectual property of others',
                'Malware, phishing links, or any content designed to harm others',
              ]}
            />
            <p className="mt-3">
              Roomie does not endorse or take responsibility for user-generated content. We reserve
              the right to remove content and suspend accounts that violate these terms.
            </p>
          </Section>

          {/* ── Disclaimer ── */}
          <Section icon={AlertTriangle} title="Disclaimer &amp; Limitation of Liability">
            <p>
              Roomie is provided "as is" without warranties of any kind, either express or implied.
              We do not guarantee the accuracy of user-provided information or the suitability of
              any roommate match. Users are solely responsible for verifying the identity and
              suitability of potential roommates before entering into any living arrangement.
            </p>
            <p className="mt-3">
              Roomie shall not be held liable for any damages, losses, or disputes arising from
              interactions between users, including but not limited to property damage, financial
              loss, or personal injury. We strongly recommend meeting potential roommates in public
              places and conducting your own due diligence before moving in with anyone.
            </p>
            <p className="mt-3">
              In no event shall Roomie's total liability to you exceed the amount you have paid us
              in the twelve (12) months preceding the claim, or NGN 10,000, whichever is greater.
            </p>
          </Section>

          {/* ── Governing Law ── */}
          <Section icon={Scale} title="Governing Law">
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the
              laws of the Federal Republic of Nigeria. Any dispute arising from or relating to
              these terms shall be subject to the exclusive jurisdiction of the courts of Lagos
              State, Nigeria.
            </p>
            <p className="mt-3">
              We reserve the right to update these terms at any time. Continued use of the app
              after changes are posted constitutes your acceptance of the new terms. We will
              notify you of material changes via in-app notification or email.
            </p>
          </Section>

          {/* ── Contact ── */}
          <Section icon={Mail} title="Contact Us">
            <p>
              For questions about these Terms &amp; Conditions or to report a violation, please
              contact us:
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
            <Link href="/privacy" className="text-primary hover:underline font-medium">
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
