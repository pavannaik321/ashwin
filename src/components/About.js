'use client';
import { useEffect, useRef } from 'react';

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
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target
          .querySelectorAll('.reveal, .reveal-left, .reveal-right')
          .forEach((el) => el.classList.add('visible'));
        observer.disconnect();
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 md:py-36 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20 reveal">
          <div className="w-8 h-px bg-[#D4A853]" />
          <span className="text-[#D4A853] text-[11px] tracking-[0.5em] uppercase">About Me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Photo frame */}
          <div className="reveal-left relative">
            <div className="relative aspect-[3/4] bg-[#111] max-w-sm lg:max-w-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#080808] flex items-center justify-center">
                {/* Avatar placeholder */}
                <div className="text-center select-none">
                  <div className="w-24 h-24 rounded-full border border-[#D4A853]/20 flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-10 h-10 text-[#D4A853]/25"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-[#333] text-[10px] tracking-[0.4em] uppercase">
                    Ashwin Padwalkar
                  </p>
                </div>
              </div>

              {/* Corner accents */}
              {[
                'top-0 left-0 border-t-2 border-l-2',
                'top-0 right-0 border-t-2 border-r-2',
                'bottom-0 left-0 border-b-2 border-l-2',
                'bottom-0 right-0 border-b-2 border-r-2',
              ].map((cls, i) => (
                <div key={i} className={`absolute w-8 h-8 border-[#D4A853] ${cls}`} />
              ))}
              {/* Inner border */}
              <div className="absolute inset-2 border border-[#D4A853]/10 pointer-events-none" />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#D4A853] px-6 py-4 hidden lg:block z-10">
              <p
                className="text-[#080808] font-bold text-2xl leading-none"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                4+
              </p>
              <p className="text-[#080808]/70 text-[10px] tracking-widest uppercase mt-1">
                Years Exp.
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="reveal-right">
            <h2
              className="font-bold text-[#F0EDE8] leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              }}
            >
              Turning Ideas Into{' '}
              <span className="text-gold-gradient">Visual Stories</span>
            </h2>

            <div className="w-12 h-px bg-[#D4A853] mb-8" />

            <p className="text-[#777] leading-relaxed mb-5 text-sm md:text-[15px]">
              I&apos;m a passionate cinematographer and video editor who loves bringing stories to
              life through visuals. Over 4+ years I&apos;ve worked across documentaries, podcasts,
              brand films, and social media content — crafting narratives that connect with
              audiences on a deeper level.
            </p>
            <p className="text-[#777] leading-relaxed mb-10 text-sm md:text-[15px]">
              From the first frame to the final cut, I manage the complete creative journey,
              blending technical precision with artistic vision to deliver work that doesn&apos;t
              just look good — it{' '}
              <em className="text-[#D4A853] not-italic font-medium">feels</em> right.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { num: '50+', label: 'Projects Completed' },
                { num: '30+', label: 'Happy Clients' },
                { num: '6+', label: 'Services Offered' },
                { num: '∞', label: 'Stories to Tell' },
              ].map((s) => (
                <div key={s.label} className="border border-[#1f1f1f] p-4 hover:border-[#D4A853]/30 transition-colors duration-300">
                  <div
                    className="text-2xl font-bold text-[#D4A853] mb-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[#555] text-[10px] tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5">
              <span className="text-[#444] text-[11px] tracking-[0.25em] uppercase">Follow</span>
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-[#444] hover:text-[#D4A853] transition-colors duration-300"
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
