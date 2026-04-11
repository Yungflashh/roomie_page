'use client';

import { useEffect, useRef, useState } from 'react';

// ─── EDIT YOUR TEAM HERE ───────────────────────────────────────────────────
// Replace name, role, dept, bio, and image for each member.
// Images go in your /public folder — e.g. image: '/john.jpeg'
const team = [
  {
    name: 'David',
    role: 'Founder & CEO',
    dept: 'Leadership',
    bio: 'David founded Roomie with a single conviction — finding a home should feel human. He brings vision, hustle, and deep empathy for what people need when navigating one of life\'s biggest transitions.',
    image: '/Ceo.jpeg',
    gradientFrom: '#2d9d9d',
    gradientTo: '#1a6e6e',
    tag: '#247d7d',
    tagBg: '#e6f7f7',
  },
  {
    name: 'Braimoh-Igbo',
    role: 'Head of Growth',
    dept: 'Growth & Strategy',
    bio: 'Ibrahim architects Roomie\'s growth engine — from go-to-market strategy to user acquisition. He\'s obsessed with sustainable loops that bring the right people to the platform.',
    image: '/igbo.jpeg',
    gradientFrom: '#3dbdbd',
    gradientTo: '#2d9d9d',
    tag: '#247d7d',
    tagBg: '#e6f7f7',
  },
  {
    name: 'Ahmed',
    role: 'Frontend Developer',
    dept: 'Engineering',
    bio: 'Ahmed turns design into reality — pixel by pixel. He\'s the craftsman behind the interfaces you\'re interacting with, with a sharp eye for detail and a love for smooth, responsive UIs.',
    image: '/glitch.jpeg',
    gradientFrom: '#1a6e6e',
    gradientTo: '#0f4f4f',
    tag: '#1a6e6e',
    tagBg: '#d4f0f0',
  },
  {
    name: 'Mercy ',
    role: 'Social Media Manager',
    dept: 'Marketing',
    bio: 'Mercy tells the Roomie story where people actually are. She builds community, drives conversation, and makes sure our voice online feels real, warm, and worth following.',
    image: '/mercy.jpeg',
    gradientFrom: '#2d9d9d',
    gradientTo: '#3dbdbd',
    tag: '#247d7d',
    tagBg: '#e6f7f7',
  },
  {
    name: 'Blessing',
    role: 'Asst. Operations Manager',
    dept: 'Operations',
    bio: 'Blessing keeps the engine running. From onboarding flows to day-to-day coordination, she ensures every moving part of Roomie operates with care, precision, and a personal touch.',
    image: '/Blessing.jpeg',
    gradientFrom: '#4dcfcf',
    gradientTo: '#2d9d9d',
    tag: '#247d7d',
    tagBg: '#e6f7f7',
  },
  // ── PLACEHOLDER MEMBERS 6–10 — replace with real data ──
//   {
//     name: 'Team Member 6',
//     role: 'Role / Title',
//     dept: 'Department',
//     bio: 'Add a short bio here — what this person does, what drives them, and what they bring to the Roomie team.',
//     image: 'https://ui-avatars.com/api/?name=Team+Member+6&size=400&background=2d9d9d&color=ffffff&bold=true&font-size=0.33',
//     gradientFrom: '#2d9d9d',
//     gradientTo: '#1a6e6e',
//     tag: '#247d7d',
//     tagBg: '#e6f7f7',
//   },
//   {
//     name: 'Team Member 7',
//     role: 'Role / Title',
//     dept: 'Department',
//     bio: 'Add a short bio here — what this person does, what drives them, and what they bring to the Roomie team.',
//     image: 'https://ui-avatars.com/api/?name=Team+Member+7&size=400&background=3dbdbd&color=ffffff&bold=true&font-size=0.33',
//     gradientFrom: '#3dbdbd',
//     gradientTo: '#2d9d9d',
//     tag: '#247d7d',
//     tagBg: '#e6f7f7',
//   },
//   {
//     name: 'Team Member 8',
//     role: 'Role / Title',
//     dept: 'Department',
//     bio: 'Add a short bio here — what this person does, what drives them, and what they bring to the Roomie team.',
//     image: 'https://ui-avatars.com/api/?name=Team+Member+8&size=400&background=1a6e6e&color=ffffff&bold=true&font-size=0.33',
//     gradientFrom: '#1a6e6e',
//     gradientTo: '#0f4f4f',
//     tag: '#1a6e6e',
//     tagBg: '#d4f0f0',
//   },
//   {
//     name: 'Team Member 9',
//     role: 'Role / Title',
//     dept: 'Department',
//     bio: 'Add a short bio here — what this person does, what drives them, and what they bring to the Roomie team.',
//     image: 'https://ui-avatars.com/api/?name=Team+Member+9&size=400&background=4dcfcf&color=ffffff&bold=true&font-size=0.33',
//     gradientFrom: '#4dcfcf',
//     gradientTo: '#2d9d9d',
//     tag: '#247d7d',
//     tagBg: '#e6f7f7',
//   },
//   {
//     name: 'Team Member 10',
//     role: 'Role / Title',
//     dept: 'Department',
//     bio: 'Add a short bio here — what this person does, what drives them, and what they bring to the Roomie team.',
//     image: 'https://ui-avatars.com/api/?name=Team+Member+10&size=400&background=247d7d&color=ffffff&bold=true&font-size=0.33',
//     gradientFrom: '#247d7d',
//     gradientTo: '#1a6e6e',
//     tag: '#1a6e6e',
//     tagBg: '#d4f0f0',
//   },
];
// ─────────────────────────────────────────────────────────────────────────────

function FlipCard({ member, index }: { member: typeof team[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const gradient = `linear-gradient(135deg, ${member.gradientFrom} 0%, ${member.gradientTo} 100%)`;

  return (
    <div
      ref={ref}
      style={{
        perspective: '1200px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms`,
      }}
    >
      <div
        className="relative w-full cursor-pointer"
        style={{
          height: 'clamp(260px, 55vw, 380px)',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onClick={() => setFlipped(f => !f)}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 15%' }}
          />

          {/* Bottom scrim only */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.25) 38%, transparent 65%)',
            }}
          />

          {/* Top teal bar */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: gradient }} />

          {/* Dept pill */}
          <div
            className="absolute top-3 right-3 px-2 py-0.5 rounded-full font-semibold"
            style={{
              background: 'rgba(0,0,0,0.38)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
              fontSize: '10px',
            }}
          >
            {member.dept}
          </div>

          {/* Name & role */}
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
            <h3
              className="text-white font-bold leading-tight"
              style={{ fontSize: 'clamp(12px, 3vw, 17px)', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}
            >
              {member.name}
            </h3>
            <p
              className="text-white/85 font-medium mt-0.5"
              style={{ fontSize: 'clamp(10px, 2.2vw, 13px)', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}
            >
              {member.role}
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-white"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Gradient header */}
          <div className="h-20 relative" style={{ background: gradient }}>
            <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-white/10" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full bg-white/10" />
            <div className="absolute -bottom-7 left-4">
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden shadow-lg"
                style={{ outline: '3px solid white' }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="pt-9 px-4 pb-4">
            <h3
              className="text-slate-800 font-bold leading-snug"
              style={{ fontSize: 'clamp(11px, 2.5vw, 14px)' }}
            >
              {member.name}
            </h3>
            <span
              className="inline-block mt-1 font-semibold px-2 py-0.5 rounded-full"
              style={{ background: member.tagBg, color: member.tag, fontSize: '9px' }}
            >
              {member.role}
            </span>
            <p
              className="text-slate-500 leading-relaxed mt-2"
              style={{ fontSize: 'clamp(9px, 2vw, 11px)' }}
            >
              {member.bio}
            </p>
            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: member.gradientFrom }} />
              <span className="text-slate-400 font-medium" style={{ fontSize: '9px' }}>{member.dept}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.15 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-slate-50">
      {/* Ambient orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-160px', right: '-120px',
          width: '560px', height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,157,157,0.09) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-140px', left: '-100px',
          width: '480px', height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,189,189,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-12 md:mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(28px)',
            transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white shadow-sm"
            style={{ border: '1px solid rgba(45,157,157,0.25)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#2d9d9d' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#2d9d9d' }}>
              The Team
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-tight mb-5">
            Meet the people
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #2d9d9d 0%, #3dbdbd 60%, #1a6e6e 100%)' }}
            >
              building Roomie
            </span>
          </h2>

          <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            A tight-knit team united by one belief — finding a place to call home should be safe, simple, and human.
          </p>
        </div>

        {/* ── GRID: 2 cols mobile → 5 cols desktop, always even rows ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
          {team.map((member, i) => (
            <FlipCard key={member.name} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}