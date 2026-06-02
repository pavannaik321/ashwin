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

// Duplicate for seamless loop
const TRACK = [...CLIENTS, ...CLIENTS];

export default function Clients() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
        observer.disconnect();
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-[#0d0d0d] border-t border-b border-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <div className="flex items-center gap-4 reveal">
          <div className="w-6 h-px bg-[#D4A853]/50" />
          <span className="text-[#D4A853] text-[11px] tracking-[0.5em] uppercase">Clients</span>
          <div className="w-6 h-px bg-[#D4A853]/50" />
          <span className="text-[#333] text-[11px] tracking-[0.35em] uppercase">
            Trusted By Leading Brands
          </span>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {TRACK.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-6 px-8 flex-shrink-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A853]/30 flex-shrink-0" />
              <span className="text-[#383838] text-[13px] tracking-[0.22em] uppercase font-light whitespace-nowrap hover:text-[#D4A853]/50 transition-colors duration-300">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
