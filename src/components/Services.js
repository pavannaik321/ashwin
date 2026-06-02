'use client';
import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    num: '01',
    title: 'Cinematography',
    desc: 'Professional camera work with expert lighting setup and composition to capture your story with cinematic impact.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 10l4.553-2.069A1 1 0 0121 8.874v6.252a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Video Editing',
    desc: 'Precise cuts, seamless transitions, and professional color grading that transform raw footage into a compelling narrative.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Motion Graphics',
    desc: 'Eye-catching animations, kinetic typography, and dynamic visual effects that elevate your content above the noise.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Reels Creation',
    desc: 'High-impact short-form content crafted for Instagram Reels, YouTube Shorts, and TikTok — optimised for engagement.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 18.5A6.5 6.5 0 1112 5.5a6.5 6.5 0 010 13zm0 0V21m0-15V3m9 9h-2.5M5.5 12H3M17.48 6.52l-1.77 1.77M8.29 15.71l-1.77 1.77M17.48 17.48l-1.77-1.77M8.29 8.29L6.52 6.52" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Graphic Design',
    desc: 'Visually striking thumbnails, posters, and branded visual assets designed to make your content instantly recognisable.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Photography',
    desc: 'Professional photography for portraits, products, events, and brand storytelling — every frame tells a story.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-24 md:py-36 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4 reveal">
              <div className="w-8 h-px bg-[#D4A853]" />
              <span className="text-[#D4A853] text-[11px] tracking-[0.5em] uppercase">Services</span>
            </div>
            <h2
              className="font-bold text-[#F0EDE8] leading-tight reveal"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
              }}
            >
              What I <span className="text-gold-gradient">Offer</span>
            </h2>
          </div>
          <p className="text-[#555] text-sm leading-relaxed max-w-xs hidden lg:block reveal">
            End-to-end creative production — from concept to final delivery.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc) => (
            <div
              key={svc.num}
              className="service-card relative reveal border border-[#1f1f1f] p-8 group cursor-default"
            >
              {/* Number watermark */}
              <div
                className="text-[#1a1a1a] font-bold text-6xl mb-5 group-hover:text-[#D4A853]/15 transition-colors duration-300 leading-none select-none"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {svc.num}
              </div>
              {/* Icon */}
              <div className="text-[#D4A853] mb-4">{svc.icon}</div>
              {/* Title */}
              <h3 className="text-[#E0DDD8] text-base font-semibold mb-3 group-hover:text-[#D4A853] transition-colors duration-300">
                {svc.title}
              </h3>
              {/* Desc */}
              <p className="text-[#555] text-[13px] leading-relaxed">{svc.desc}</p>
              {/* Gold line on hover */}
              <div className="mt-6 w-0 group-hover:w-8 h-px bg-[#D4A853] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
