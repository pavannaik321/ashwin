'use client';
import { useEffect, useRef } from 'react';

export default function Showreel() {
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
    <section
      id="showreel"
      ref={ref}
      className="relative py-32 md:py-44 bg-[#0c0c0c] overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.028]"
        style={{
          backgroundImage: 'radial-gradient(circle, #D4A853 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[300px] bg-[#D4A853]/[0.05] rounded-full blur-[120px]" />
      </div>

      {/* Wide horizontal lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-[#D4A853]/[0.06] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6 reveal">
          <div className="w-10 h-px bg-[#D4A853]/50" />
          <span className="text-[#D4A853] text-[11px] tracking-[0.55em] uppercase">Showreel</span>
          <div className="w-10 h-px bg-[#D4A853]/50" />
        </div>

        {/* Year */}
        <h2
          className="font-bold text-[#F0EDE8] leading-none mb-2 reveal"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(5rem, 14vw, 10rem)',
          }}
        >
          2024
        </h2>

        <p className="text-[#444] text-[12px] tracking-[0.4em] uppercase mb-16 reveal">
          A Year of Stories &amp; Visuals
        </p>

        {/* Play button */}
        <a
          href="https://www.youtube.com/@AshwinPadwalkar"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center gap-6 reveal"
          aria-label="Watch showreel on YouTube"
        >
          <div className="relative w-28 h-28">
            {/* Ripple rings */}
            <div className="absolute inset-[-20px] rounded-full border border-[#D4A853]/[0.08] group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-[-8px] rounded-full border border-[#D4A853]/[0.16] group-hover:scale-105 transition-transform duration-500" />

            {/* Main circle */}
            <div className="w-28 h-28 rounded-full border border-[#D4A853] flex items-center justify-center group-hover:bg-[#D4A853]/12 transition-all duration-400 relative z-10">
              <svg
                className="w-9 h-9 text-[#D4A853] ml-1.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <span className="text-[#555] text-[11px] tracking-[0.45em] uppercase group-hover:text-[#D4A853] transition-colors duration-300">
            Watch on YouTube
          </span>
        </a>
      </div>
    </section>
  );
}
