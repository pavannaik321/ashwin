'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const SOCIALS = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@AshwinPadwalkar',
    path: 'M10 15l5.19-3L10 9v6zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ash_pdwlkr',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashwin-padwalkar',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('story');
  const [clapped, setClapped] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target
          .querySelectorAll('.reveal, .reveal-left, .reveal-right')
          .forEach((el) => el.classList.add('visible'));
        observer.disconnect();
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const triggerClap = () => {
    setClapped(true);
    setTimeout(() => setClapped(false), 300);
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-36 bg-[#09090b] overflow-hidden border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20 reveal">
          <div className="w-8 h-0.5 bg-[#ff1e27]" />
          <span className="text-[#ff1e27] text-xs font-black tracking-[0.4em] uppercase">About The Director</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Photo frame: Interactive Clapperboard */}
          <div className="lg:col-span-5 reveal-left relative flex flex-col items-center">
            {/* Clapperboard Container */}
            <div
              className="relative w-full max-w-sm bg-black border-2 border-white rounded-md p-4 shadow-[6px_6px_0px_#ff1e27] group select-none cursor-pointer"
              onClick={triggerClap}
            >
              {/* Clapper Top Bar */}
              <div
                className={`w-full h-8 bg-black border-b-2 border-white flex relative overflow-hidden origin-bottom-left transition-transform duration-200 ${
                  clapped
                    ? 'rotate-0'
                    : 'rotate-[-12deg] group-hover:rotate-[-4deg]'
                }`}
                style={{ marginBottom: '4px' }}
              >
                {/* Diagonal stripes */}
                <div
                  className="w-full h-full bg-black"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #fff, #fff 10px, #000 10px, #000 20px)',
                  }}
                />
              </div>

              {/* Clapper Hinge Joint */}
              <div className="absolute top-9 left-1 w-3 h-3 rounded-full bg-white border border-black z-20" />

              {/* Clapper Slate Body */}
              <div className="bg-[#18181b] border-2 border-white p-3 font-mono text-[10px] text-white/90 space-y-2">
                <div className="grid grid-cols-2 gap-2 border-b border-white/20 pb-2">
                  <div>
                    <span className="text-white/40 block text-[8px] uppercase">PRODUCTION</span>
                    <span className="font-bold text-[#ff1e27]">ASHWIN.PORTFOLIO</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[8px] uppercase">ROLL</span>
                    <span className="font-bold">2024 / EXP</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 border-b border-white/20 pb-2">
                  <div className="col-span-2">
                    <span className="text-white/40 block text-[8px] uppercase">SCENE</span>
                    <span className="font-bold text-white">01 (ABOUT ME)</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[8px] uppercase">TAKE</span>
                    <span className="font-bold">04</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div>
                    <span className="text-white/40 text-[8px] uppercase mr-2">DIRECTOR:</span>
                    <span className="font-bold">ASHWIN PADWALKAR</span>
                  </div>
                  <div>
                    <span className="text-white/40 text-[8px] uppercase mr-2">CAMERA:</span>
                    <span className="font-bold text-[#ff1e27]">RED / BLACKMAGIC / SONY</span>
                  </div>
                </div>
              </div>

              {/* Center Portrait */}
              <div className="relative aspect-[3/4] mt-4 bg-black overflow-hidden border border-white/10">
                <Image
                  src="/ashwin-portrait.png"
                  alt="Ashwin Padwalkar — Cinematographer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                {/* CRT scanline overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)' }} />
                {/* LIVE FEED badge */}
                <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-[#ff1e27] text-white text-[8px] font-mono tracking-widest font-black rounded-sm animate-pulse z-10">
                  LIVE FEED
                </div>
                {/* Lower third name bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm px-3 py-2 z-10">
                  <span className="text-white font-black text-[11px] uppercase tracking-widest block">ASHWIN PADWALKAR</span>
                  <span className="text-[#ff1e27] font-mono text-[8px] uppercase tracking-widest">[ CINEMATOGRAPHER ]</span>
                </div>
              </div>
            </div>

            {/* Rotating Exp badge */}
            <div className="absolute -bottom-6 -right-4 bg-[#ff1e27] text-white border-2 border-white px-5 py-3 shadow-[4px_4px_0px_#fff] hidden lg:block z-10 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all">
              <p className="font-mono text-2xl font-black leading-none">4+</p>
              <p className="text-[9px] tracking-widest uppercase font-bold mt-1">YEARS EXP.</p>
            </div>
          </div>

          {/* Text content & Tabs */}
          <div className="lg:col-span-7 reveal-right">
            {/* Heading */}
            <h2
              className="font-black text-white leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              }}
            >
              TURNING IDEAS INTO{' '}
              <span className="text-[#ff1e27] underline decoration-white decoration-4 underline-offset-4">VISUAL STORIES</span>
            </h2>

            {/* Playful Interactive Tabs navigation */}
            <div className="flex gap-2 border-b-2 border-white/10 pb-4 mb-8">
              {[
                { id: 'story', label: 'THE STORY' },
                { id: 'gear', label: 'GEAR SUITE' },
                { id: 'philosophy', label: 'PHILOSOPHY' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-mono text-xs tracking-wider font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#ff1e27] text-white border-2 border-white shadow-[2px_2px_0px_#fff]'
                      : 'text-white/60 hover:text-white border border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content rendering */}
            <div className="min-h-[160px]">
              {activeTab === 'story' && (
                <div className="space-y-4 animate-[fadeInUp_0.4s_ease-out]">
                  <p className="text-zinc-300 leading-relaxed text-sm md:text-[15px]">
                    I&apos;m a cinematographer and video editor who lives to capture stories that hit audiences right in the chest. Over the past 4+ years, I&apos;ve operated across documentaries, fast-paced brand films, podcasts, and high-energy social media reels.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-sm md:text-[15px]">
                    I control the entire creative pipeline. From raw lighting setup and camera movement, to precision cutting, sound design, and grade, I ensure every single frame serves a central emotional goal.
                  </p>
                </div>
              )}

              {activeTab === 'gear' && (
                <div className="grid grid-cols-2 gap-4 animate-[fadeInUp_0.4s_ease-out] font-mono text-xs">
                  <div className="border border-white/10 p-3 bg-zinc-900/40">
                    <span className="text-[#ff1e27] block font-black uppercase text-[10px] mb-1">// CAMERAS</span>
                    <ul className="text-zinc-400 space-y-1 list-inside list-disc">
                      <li>Sony FX6 / FX3 Cinema</li>
                      <li>Blackmagic Pocket 6K Pro</li>
                      <li>DJI Mavic 3 Cine (Aerial)</li>
                    </ul>
                  </div>
                  <div className="border border-white/10 p-3 bg-zinc-900/40">
                    <span className="text-[#ff1e27] block font-black uppercase text-[10px] mb-1">// GLASS / LENSES</span>
                    <ul className="text-zinc-400 space-y-1 list-inside list-disc">
                      <li>Sirui Anamorphic Set</li>
                      <li>Sigma Art 18-35mm &amp; 50-100mm</li>
                      <li>Sony GM Prime Lenses</li>
                    </ul>
                  </div>
                  <div className="border border-white/10 p-3 bg-zinc-900/40 col-span-2">
                    <span className="text-[#ff1e27] block font-black uppercase text-[10px] mb-1">// EDITING STATION</span>
                    <p className="text-zinc-400">
                      Mac Studio M2 Ultra / Dual 4K Monitors / DaVinci Resolve Speed Editor / Premiere workflow setup.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="space-y-4 animate-[fadeInUp_0.4s_ease-out]">
                  <div className="border-l-4 border-[#ff1e27] pl-4">
                    <h4 className="font-bold text-white text-sm uppercase mb-1">STORY IS KING</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      A beautiful frame that doesn&apos;t serve the character is just empty decoration. Everything starts with the story.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#ff1e27] pl-4">
                    <h4 className="font-bold text-white text-sm uppercase mb-1">RHYTHM AND SPEED</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      Editing is like composition. A great cut is a beat of drums. I mix slow cinematic pacing with sudden high-energy beats to hook modern attention.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Mini stats using neo-brutalist cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {[
                { num: '50+', label: 'Projects Completed' },
                { num: '30+', label: 'Happy Clients' },
                { num: '6+', label: 'Services Offered' },
                { num: '∞', label: 'RAW Passion' },
              ].map((s) => (
                <div key={s.label} className="border-2 border-white p-4 shadow-[4px_4px_0px_#ff1e27] bg-[#18181b] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#ff1e27] transition-all">
                  <div className="text-2xl font-black text-white mb-1">
                    {s.num}
                  </div>
                  <div className="text-[#ff1e27] font-mono text-[9px] tracking-wider uppercase font-bold">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 mt-10">
              <span className="text-[#a1a1aa] font-mono text-xs uppercase font-bold">CONNECT</span>
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-white hover:text-[#ff1e27] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
