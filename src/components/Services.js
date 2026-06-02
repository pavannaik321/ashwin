'use client';
import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    num: '01',
    title: 'CINEMATOGRAPHY',
    desc: 'Professional high-end camera operating, composition, and multi-point lighting design to capture visual narratives with high emotional weight.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.874v6.252a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'VIDEO EDITING',
    desc: 'Precise pacing cuts, seamless sound bridges, and advanced multi-pass color grading to transform raw frames into cohesive visual stories.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'MOTION GRAPHICS',
    desc: 'Kinetic vector typography, visual effects, and animated interface assets designed to convey complex concepts with minimal friction.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'REELS CREATION',
    desc: 'Fast-paced, high-engagement short-form assets specifically scaled and colored for TikTok, YouTube Shorts, and Instagram Reels.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.5A6.5 6.5 0 1112 5.5a6.5 6.5 0 010 13zm0 0V21m0-15V3m9 9h-2.5M5.5 12H3M17.48 6.52l-1.77 1.77M8.29 15.71l-1.77 1.77M17.48 17.48l-1.77-1.77M8.29 8.29L6.52 6.52" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'THUMBNAIL DESIGN',
    desc: 'Striking high-contrast graphic assets, custom typography layouts, and photo composition to optimize click-through rates across platforms.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'PHOTOGRAPHY',
    desc: 'Sleek corporate portraits, stylized product shots, and live event photography capturing authentic moments with cinematic depth.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 75);
        });
        observer.disconnect();
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-36 bg-[#09090b] border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4 reveal">
              <div className="w-8 h-0.5 bg-[#ff1e27]" />
              <span className="text-[#ff1e27] text-xs font-black tracking-[0.4em] uppercase">SERVICES RACK</span>
            </div>
            <h2
              className="font-black text-white leading-tight reveal uppercase"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
              }}
            >
              WHAT I <span className="text-[#ff1e27] underline decoration-white decoration-4 underline-offset-2">OFFER</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-xs font-mono max-w-xs hidden lg:block reveal leading-relaxed">
            Full-cycle creative visual delivery — taking raw ideas from script-ready drafts to final encoded frames.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.num}
              className="relative reveal border-2 border-white p-8 bg-[#18181b] shadow-[4px_4px_0px_rgba(255,255,255,0.06)] hover:shadow-[4px_4px_0px_#ff1e27] hover:translate-y-[-2px] transition-all duration-200 group cursor-none"
            >
              {/* Number watermark */}
              <div
                className="text-white/5 font-black text-6xl mb-5 group-hover:text-[#ff1e27]/15 transition-colors duration-300 leading-none select-none font-mono"
              >
                {svc.num}
              </div>
              {/* Icon */}
              <div className="text-[#ff1e27] mb-4 transition-transform group-hover:scale-105 duration-200">{svc.icon}</div>
              {/* Title */}
              <h3 className="text-white text-base font-black mb-3 group-hover:text-[#ff1e27] transition-colors duration-300">
                {svc.title}
              </h3>
              {/* Desc */}
              <p className="text-zinc-400 text-xs leading-relaxed">{svc.desc}</p>
              {/* Red indicator line on hover */}
              <div className="mt-6 w-0 group-hover:w-10 h-0.5 bg-[#ff1e27] transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
