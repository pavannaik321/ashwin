'use client';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const [reticlePos, setReticlePos] = useState({ x: 50, y: 50 }); // percentages
  const [audioLevels, setAudioLevels] = useState([50, 40, 60, 30, 70, 80, 50, 45, 90, 65]);

  useEffect(() => {
    // Reveal animation
    const items = containerRef.current?.querySelectorAll('[data-hero]');
    items?.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      const timeout = setTimeout(() => {
        el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 150 + i * 120);
    });

    // Handle mouse movement to shift viewfinder focus point
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      // Dampen movement
      setReticlePos({
        x: Math.max(10, Math.min(90, 50 + (x - 50) * 0.35)),
        y: Math.max(10, Math.min(90, 50 + (y - 50) * 0.35)),
      });
    };

    // Simulate bouncing audio levels
    const interval = setInterval(() => {
      setAudioLevels((prev) =>
        prev.map(() => Math.floor(Math.random() * 85) + 15)
      );
    }, 120);

    const containerEl = containerRef.current;
    containerEl?.addEventListener('mousemove', handleMouseMove);

    return () => {
      containerEl?.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen bg-[#09090b] flex items-center overflow-hidden pt-20"
    >
      {/* Playful Camera Grid Overlay */}
      <div className="absolute inset-8 border border-white/5 pointer-events-none z-20 flex items-center justify-center">
        {/* Horizontal rule of thirds lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-white/5" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-white/5" />
        {/* Vertical rule of thirds lines */}
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute right-1/3 top-0 bottom-0 w-px bg-white/5" />

        {/* Framing corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20" />
      </div>

      {/* Floating Interactive Reticle Crosshair */}
      <div
        className="absolute w-24 h-24 border border-dashed border-[#ff1e27]/40 flex items-center justify-center pointer-events-none transition-all duration-300 ease-out z-10 hidden md:flex"
        style={{
          left: `${reticlePos.x}%`,
          top: `${reticlePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-4 h-4 border border-[#ff1e27] relative flex items-center justify-center">
          <div className="absolute w-2.5 h-px bg-[#ff1e27]" />
          <div className="absolute h-2.5 w-px bg-[#ff1e27]" />
        </div>
        {/* Corner braces for reticle */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ff1e27]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ff1e27]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff1e27]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ff1e27]" />
        <span className="absolute top-full mt-2 text-[9px] font-mono text-[#ff1e27]/70 tracking-widest leading-none">
          FOCUS LOCK
        </span>
      </div>

      {/* Left side Live Audio Monitor */}
      <div className="absolute left-6 bottom-24 z-20 hidden xl:flex flex-col items-center gap-2">
        <span className="text-[8px] font-mono text-white/40 tracking-widest uppercase [writing-mode:vertical-lr] mb-2">
          CH 1/2 AUDIO LEVEL
        </span>
        <div className="flex gap-1 h-32 items-end bg-black/40 p-2 border border-white/10 rounded-sm">
          {audioLevels.map((level, idx) => (
            <div key={idx} className="w-1.5 h-full bg-white/10 flex flex-col justify-end">
              <div
                className={`w-full transition-all duration-100 ${
                  level > 75
                    ? 'bg-[#ff1e27]'
                    : level > 50
                    ? 'bg-white'
                    : 'bg-[#ff1e27]/60'
                }`}
                style={{ height: `${level}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Rotating Sticker Badge */}
      <div className="absolute right-12 top-24 z-20 hidden lg:block">
        <div className="relative w-32 h-32 flex items-center justify-center animate-float">
          <svg className="absolute w-full h-full sticker-spin" viewBox="0 0 100 100">
            <path
              id="sticker-text-path"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="transparent"
            />
            <text className="text-[7.5px] font-mono font-black uppercase fill-white tracking-[0.22em]">
              <textPath href="#sticker-text-path" startOffset="0%">
                ● VISUAL STORYTELLER ● DIRECTORS CUT ● ASHWIN
              </textPath>
            </text>
          </svg>
          <div className="w-12 h-12 rounded-full border-2 border-[#ff1e27] flex items-center justify-center bg-black/80">
            <span className="text-[#ff1e27] font-black text-xs">24FPS</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20 py-20 w-full">
        {/* Eyebrow */}
        <div data-hero className="flex items-center gap-4 mb-6">
          <div className="w-10 h-0.5 bg-[#ff1e27]" />
          <span className="text-[#ff1e27] text-xs font-black tracking-[0.4em] uppercase">
            FILM DIRECTOR &amp; VIDEO EDITOR
          </span>
        </div>

        {/* Large Playful Headings */}
        <h1
          className="leading-[0.85] tracking-tighter"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          <span
            data-hero
            className="block text-white font-black text-stroke-white group"
            style={{ fontSize: 'clamp(3.8rem, 11vw, 9rem)' }}
          >
            ASHWIN
          </span>
          <span
            data-hero
            className="block font-black text-transparent text-stroke-red-fill transition-all duration-300 hover:text-white"
            style={{
              fontSize: 'clamp(3.8rem, 11vw, 9rem)',
              WebkitTextStroke: '2px #ff1e27',
            }}
          >
            PADWALKAR
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p
          data-hero
          className="text-[#a1a1aa] text-sm md:text-base tracking-[0.18em] uppercase max-w-xl mt-8 mb-10 font-bold"
        >
          Cinematographer &amp; Editor blending technical precision with raw storytelling energy.
        </p>

        {/* Interactive CTA buttons */}
        <div data-hero className="flex flex-wrap items-center gap-6">
          <a
            href="https://www.youtube.com/@AshwinPadwalkar"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn flex items-center gap-3 px-8 py-4.5 text-xs font-bold tracking-[0.2em] uppercase"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Reel
          </a>
          <a
            href="#work"
            className="neo-btn-secondary px-8 py-4.5 text-xs font-bold tracking-[0.2em] uppercase"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-[#a1a1aa] hover:text-[#ff1e27] text-xs font-bold tracking-[0.15em] uppercase transition-colors"
          >
            <span>Let&apos;s talk</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Simple editing metrics panel */}
        <div
          data-hero
          className="flex flex-wrap gap-10 lg:gap-16 mt-16 pt-10 border-t-2 border-white/10"
        >
          {[
            { num: '4+', label: 'Years Exp' },
            { num: '50+', label: 'Projects Done' },
            { num: '30+', label: 'Happy Clients' },
            { num: '06', label: 'Services' },
          ].map((s) => (
            <div key={s.label} className="relative group">
              <div className="absolute -top-3 -left-3 text-[10px] font-mono text-[#ff1e27] opacity-0 group-hover:opacity-100 transition-opacity">
                //
              </div>
              <div
                className="text-4xl md:text-5xl font-black text-white group-hover:text-[#ff1e27] transition-colors"
              >
                {s.num}
              </div>
              <div className="text-[#a1a1aa] text-[10px] tracking-[0.25em] uppercase mt-1 font-bold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator with red scroll pulse */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[#a1a1aa]/60 text-[9px] tracking-[0.4em] uppercase font-bold">Scroll</span>
        <div className="relative w-0.5 h-14 bg-white/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#ff1e27] scroll-line-inner" />
        </div>
      </div>
    </section>
  );
}
