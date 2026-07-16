'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';

const team = [
  {
    name: 'David',
    role: 'Founder & CEO',
    dept: 'Leadership',
    bio: "David founded Roomie with a single conviction — finding a home should feel human. He brings vision, hustle, and deep empathy for what people need when navigating one of life's biggest transitions.",
    image: '/Ceo.jpeg',
  },
  {
    name: 'Braimoh-Igbo',
    role: 'Head of Growth',
    dept: 'Growth & Strategy',
    bio: "Ibrahim architects Roomie's growth engine — from go-to-market strategy to user acquisition. He's obsessed with sustainable loops that bring the right people to the platform.",
    image: '/igbo.jpeg',
  },
  {
    name: 'Ahmed',
    role: 'Frontend Developer',
    dept: 'Engineering',
    bio: "Ahmed turns design into reality — pixel by pixel. He's the craftsman behind the interfaces you're interacting with, with a sharp eye for detail and a love for smooth, responsive UIs.",
    image: '/glitch.jpeg',
  },
  {
    name: 'Mercy',
    role: 'Social Media Manager',
    dept: 'Marketing',
    bio: 'Mercy tells the Roomie story where people actually are. She builds community, drives conversation, and makes sure our voice online feels real, warm, and worth following.',
    image: '/mercy.jpeg',
  },
  {
    name: 'Blessing',
    role: 'Asst. Operations Manager',
    dept: 'Operations',
    bio: 'Blessing keeps the engine running. From onboarding flows to day-to-day coordination, she ensures every moving part of Roomie operates with care, precision, and a personal touch.',
    image: '/Blessing.jpeg',
  },
];

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function Team() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref: sectionRef, visible } = useInView<HTMLDivElement>(0.1);
  const [cursor, setCursor] = useState({ x: 0, y: 0, show: false });
  const stageRef = useRef<HTMLDivElement>(null);

  const current = hovered ?? active;

  const onMove = useCallback((e: React.MouseEvent) => {
    const r = stageRef.current?.getBoundingClientRect();
    if (!r) return;
    setCursor({ x: e.clientX - r.left, y: e.clientY - r.top, show: true });
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-16">
      <div ref={sectionRef} className="container relative z-10 mx-auto px-5 md:px-6">
        {/* ── Header: left-aligned, editorial ── */}
        <div className="mx-auto max-w-6xl">
          <div
            className="flex flex-col gap-6 border-b border-slate-200 pb-10 md:flex-row md:items-end md:justify-between"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(24px)',
              transition: 'opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1)',
            }}
          >
            <div>
              <div className="mb-5 flex items-center gap-2.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                  The Team
                </span>
              </div>
              <h2 className="text-balance text-4xl font-bold leading-[0.95] tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
                The people
                <br />
                <span className="text-slate-300">building</span>{' '}
                <span className="text-primary">Roomie</span>
              </h2>
            </div>
            <p className="max-w-xs text-pretty text-base leading-relaxed text-slate-500 md:text-right">
              A tight-knit team united by one belief — finding a place to call home should be safe,
              simple, and human.
            </p>
          </div>

          {/* ── Interactive roster ── */}
          <div
            ref={stageRef}
            onMouseMove={onMove}
            onMouseLeave={() => {
              setHovered(null);
              setCursor((c) => ({ ...c, show: false }));
            }}
            className="relative grid gap-10 pt-10 lg:grid-cols-[1fr_minmax(0,380px)] lg:gap-16"
          >
            {/* Floating cursor preview (desktop) */}
            <div
              aria-hidden
              className="pointer-events-none absolute z-30 hidden lg:block"
              style={{
                left: cursor.x,
                top: cursor.y,
                transform: `translate(-50%, -50%) scale(${cursor.show && hovered !== null ? 1 : 0.6})`,
                opacity: cursor.show && hovered !== null ? 1 : 0,
                transition: 'opacity .35s ease, transform .35s cubic-bezier(.22,1,.36,1)',
              }}
            >
              <div className="h-32 w-24 overflow-hidden rounded-xl border border-white/40 shadow-2xl shadow-slate-900/25">
                {hovered !== null && (
                  <img
                    src={team[hovered].image}
                    alt=""
                    className="h-full w-full object-cover"
                    style={{ objectPosition: 'center 15%' }}
                  />
                )}
              </div>
            </div>

            {/* Name list */}
            <ul className="relative">
              {team.map((m, i) => {
                const isActive = current === i;
                return (
                  <li
                    key={m.name}
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'none' : 'translateY(20px)',
                      transition: `opacity .6s cubic-bezier(.22,1,.36,1) ${i * 90}ms, transform .6s cubic-bezier(.22,1,.36,1) ${i * 90}ms`,
                    }}
                  >
                    <button
                      onMouseEnter={() => setHovered(i)}
                      onClick={() => setActive(i)}
                      className="group relative flex w-full items-center gap-4 border-b border-slate-100 py-6 text-left md:gap-6 md:py-8"
                    >
                      {/* sweep fill */}
                      <span
                        aria-hidden
                        className="absolute inset-y-0 -left-4 -right-4 -z-10 origin-left rounded-xl bg-slate-50 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                        style={{ transform: isActive ? 'scaleX(1)' : 'scaleX(0)' }}
                      />

                      <span
                        className="w-8 flex-shrink-0 text-[11px] font-semibold tabular-nums tracking-[0.15em] transition-colors duration-300"
                        style={{ color: isActive ? 'var(--primary, #2d9d9d)' : '#cbd5e1' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* mobile thumb */}
                      <span className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 lg:hidden">
                        <img
                          src={m.image}
                          alt=""
                          className="h-full w-full object-cover"
                          style={{ objectPosition: 'center 15%' }}
                        />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className="block truncate text-xl font-bold tracking-tight transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] md:text-3xl"
                          style={{
                            color: isActive ? '#0f172a' : '#94a3b8',
                            transform: isActive ? 'translateX(8px)' : 'none',
                          }}
                        >
                          {m.name}
                        </span>
                        <span
                          className="mt-0.5 block truncate text-xs text-slate-400 transition-all duration-400 md:text-sm"
                          style={{ transform: isActive ? 'translateX(8px)' : 'none' }}
                        >
                          {m.role}
                        </span>
                      </span>

                      <ArrowUpRight
                        className="h-5 w-5 flex-shrink-0 text-primary transition-all duration-400"
                        strokeWidth={1.75}
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'none' : 'translate(-8px, 8px)',
                        }}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Sticky detail panel (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] border border-slate-200">
                  {team.map((m, i) => (
                    <img
                      key={m.name}
                      src={m.image}
                      alt={m.name}
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                      style={{
                        objectPosition: 'center 15%',
                        opacity: current === i ? 1 : 0,
                        transform: current === i ? 'scale(1)' : 'scale(1.06)',
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                  <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />

                  <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
                    {team[current].dept}
                  </div>

                  <div key={current} className="absolute inset-x-0 bottom-0 p-6">
                    <h3
                      className="text-2xl font-bold tracking-tight text-white"
                      style={{ animation: 'roomieRise .5s cubic-bezier(.22,1,.36,1) both' }}
                    >
                      {team[current].name}
                    </h3>
                    <p
                      className="mt-1 text-sm font-medium text-primary"
                      style={{ animation: 'roomieRise .5s cubic-bezier(.22,1,.36,1) .06s both' }}
                    >
                      {team[current].role}
                    </p>
                  </div>
                </div>

                <p
                  key={`bio-${current}`}
                  className="mt-6 text-sm leading-relaxed text-slate-600"
                  style={{ animation: 'roomieRise .5s cubic-bezier(.22,1,.36,1) .1s both' }}
                >
                  {team[current].bio}
                </p>
              </div>
            </aside>

            {/* Mobile bio */}
            <p key={`m-bio-${current}`} className="text-sm leading-relaxed text-slate-600 lg:hidden">
              {team[current].bio}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes roomieRise {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}