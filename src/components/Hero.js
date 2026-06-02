'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('[data-hero]');
    items?.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(36px)';
      const timeout = setTimeout(() => {
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 250 + i * 180);
      return () => clearTimeout(timeout);
    });
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen bg-[#080808] flex items-center overflow-hidden"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[560px] h-[560px] rounded-full bg-[#D4A853]/[0.05] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/5 w-[320px] h-[320px] rounded-full bg-[#D4A853]/[0.03] blur-[100px] pointer-events-none" />

      {/* Vertical side label */}
      <div className="absolute left-7 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-[#D4A853]/60" />
        <p
          className="text-[#D4A853]/50 text-[9px] tracking-[0.45em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Visual Storyteller
        </p>
        <div className="w-px h-20 bg-gradient-to-b from-[#D4A853]/60 to-transparent" />
      </div>

      {/* Film strip — right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-12 hidden xl:flex flex-col opacity-[0.055] pointer-events-none">
        {Array.from({ length: 26 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 border-b border-[#444] flex items-center justify-center"
          >
            <div className="w-5 h-[70%] border border-[#444] rounded-sm" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20 pt-28 pb-16 w-full">
        {/* Eyebrow */}
        <div data-hero className="flex items-center gap-4 mb-8">
          <div className="w-10 h-px bg-[#D4A853]" />
          <span className="text-[#D4A853] text-[11px] tracking-[0.5em] uppercase">
            Portfolio · 2024
          </span>
        </div>

        {/* Name */}
        <h1
          className="leading-[0.88] tracking-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          <span
            data-hero
            className="block text-[#F0EDE8] font-bold"
            style={{ fontSize: 'clamp(4.2rem, 10.5vw, 9.5rem)' }}
          >
            ASHWIN
          </span>
          <span
            data-hero
            className="block font-bold text-gold-gradient"
            style={{ fontSize: 'clamp(4.2rem, 10.5vw, 9.5rem)' }}
          >
            PADWALKAR
          </span>
        </h1>

        {/* Subtitle */}
        <p
          data-hero
          className="text-[#666] text-sm md:text-[15px] tracking-[0.28em] uppercase mt-7 mb-10"
        >
          Cinematographer &amp; Video Editor
        </p>

        {/* CTA row */}
        <div data-hero className="flex flex-wrap items-center gap-4">
          <a
            href="https://www.youtube.com/@AshwinPadwalkar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#D4A853] text-[#080808] px-8 py-4 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-[#E8C07A] transition-colors duration-300"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Reel
          </a>
          <a
            href="#work"
            className="border border-[#D4A853]/40 text-[#D4A853] px-8 py-4 text-[11px] tracking-[0.25em] uppercase hover:border-[#D4A853] hover:bg-[#D4A853]/8 transition-all duration-300"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-[#555] text-[11px] tracking-[0.2em] uppercase hover:text-[#D4A853] transition-colors duration-300"
          >
            <span>Get in Touch</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats row */}
        <div
          data-hero
          className="flex flex-wrap gap-10 lg:gap-16 mt-16 pt-10 border-t border-[#1f1f1f]"
        >
          {[
            { num: '4+', label: 'Years Experience' },
            { num: '50+', label: 'Projects' },
            { num: '30+', label: 'Clients' },
            { num: '6', label: 'Services' },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl md:text-4xl font-bold text-[#D4A853]"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {s.num}
              </div>
              <div className="text-[#444] text-[10px] tracking-[0.35em] uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[#3a3a3a] text-[9px] tracking-[0.5em] uppercase">Scroll</span>
        <div className="relative w-px h-12 bg-[#1f1f1f] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#D4A853] scroll-line-inner" />
        </div>
      </div>
    </section>
  );
}
