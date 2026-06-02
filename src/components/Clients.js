'use client';
import { useEffect, useRef } from 'react';

const CLIENTS = [
  'TechCorp India',
  'FitLife Studio',
  'Wanderlust Films',
  'StartupXYZ',
  'The Creative Co.',
  'BrandHouse',
  'EventsPro',
  'Podcast Central',
  'Media House',
  'Digital Stories',
  'Urban Films',
  'Content Kings',
];

const FILTERS_REACTION = [
  'PLAY', 'REC', 'CUT', 'EDIT', 'GRADE', 'SOUND', 'LIGHTS', 'CAMERA', 'ACTION', 'STORY'
];

// Duplicate for seamless loops
const CLIENT_TRACK = [...CLIENTS, ...CLIENTS, ...CLIENTS];
const REACTION_TRACK = [...FILTERS_REACTION, ...FILTERS_REACTION, ...FILTERS_REACTION];

export default function Clients() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
        observer.disconnect();
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#09090b] border-t-2 border-white overflow-hidden select-none">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="flex items-center gap-4 reveal">
          <div className="w-8 h-0.5 bg-[#ff1e27]" />
          <span className="text-[#ff1e27] text-xs font-black tracking-[0.4em] uppercase">BRANDS</span>
          <span className="text-zinc-600 font-mono text-[9px] tracking-wider uppercase hidden sm:inline">// TRUSTED PARTNERS</span>
        </div>
      </div>

      {/* Marquee Rack: Double Stack */}
      <div className="flex flex-col gap-4 relative">
        {/* Ribbon 1: Left to Right Clients scrolling */}
        <div className="marquee-container bg-[#ff1e27] text-white py-4 border-y-2 border-white shadow-[0px_4px_12px_rgba(255,30,39,0.15)] origin-center scale-[1.01] rotate-[-1.5deg] z-10">
          <div className="marquee-track">
            {CLIENT_TRACK.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-8 px-6 flex-shrink-0"
              >
                <span className="text-white font-mono text-[9px] tracking-widest font-black uppercase bg-black px-1.5 py-0.5 border border-white/20">
                  REF-{String(i % 100).padStart(2, '0')}
                </span>
                <span className="text-white text-sm tracking-[0.25em] uppercase font-black whitespace-nowrap hover:text-black hover:scale-105 transition-all">
                  {client}
                </span>
                <span className="text-black text-xs">★</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Right to Left Filmmaker verbs scrolling */}
        <div className="marquee-container bg-black text-white py-3.5 border-y-2 border-[#ff1e27] rotate-[1.5deg] origin-center scale-[1.01] mt-[-10px] z-0">
          <div className="marquee-track-reverse">
            {REACTION_TRACK.map((word, i) => (
              <div
                key={i}
                className="flex items-center gap-10 px-6 flex-shrink-0"
              >
                <span
                  className="text-transparent font-black tracking-[0.3em] uppercase text-sm whitespace-nowrap hover:text-[#ff1e27] transition-colors"
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)' }}
                >
                  {word}
                </span>
                <span className="text-[#ff1e27] text-[10px] font-mono">● REC</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
