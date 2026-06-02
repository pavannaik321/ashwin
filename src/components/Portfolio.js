'use client';
import { useState, useEffect, useRef } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'The Sound of Silence',
    category: 'documentary',
    year: '2023',
    desc: 'A feature documentary on musicians in rural India',
    bg: 'from-[#1c0e0e] to-[#2e1414]',
    accent: '#C0392B',
  },
  {
    id: 2,
    title: 'Urban Chronicles',
    category: 'documentary',
    year: '2023',
    desc: 'Documentary series on city life and urban culture',
    bg: 'from-[#0e1c1a] to-[#142e2a]',
    accent: '#16A085',
  },
  {
    id: 3,
    title: 'Tech Talk Podcast',
    category: 'podcast',
    year: '2023',
    desc: 'Visual production for a leading technology podcast',
    bg: 'from-[#0e0e1c] to-[#14142e]',
    accent: '#7C5CBF',
  },
  {
    id: 4,
    title: 'The Creator Podcast',
    category: 'podcast',
    year: '2022',
    desc: 'Monthly series spotlighting creative professionals',
    bg: 'from-[#1c180e] to-[#2e2614]',
    accent: '#D4A853',
  },
  {
    id: 5,
    title: 'FitLife Campaign',
    category: 'reels',
    year: '2024',
    desc: 'High-energy fitness brand reels for social media',
    bg: 'from-[#0e1c0e] to-[#142e14]',
    accent: '#27AE60',
  },
  {
    id: 6,
    title: 'Travel Diaries',
    category: 'reels',
    year: '2023',
    desc: 'Cinematic travel reels across destinations in India',
    bg: 'from-[#1c160e] to-[#2e220e]',
    accent: '#E67E22',
  },
  {
    id: 7,
    title: 'Product Launch Reel',
    category: 'reels',
    year: '2024',
    desc: 'Premium product showcase for an e-commerce brand',
    bg: 'from-[#1c0e16] to-[#2e1424]',
    accent: '#D91E8C',
  },
  {
    id: 8,
    title: 'Startup Story',
    category: 'documentary',
    year: '2024',
    desc: 'Corporate documentary on a tech startup journey',
    bg: 'from-[#0e1518] to-[#142028]',
    accent: '#2980B9',
  },
];

const FILTERS = ['all', 'documentary', 'podcast', 'reels'];

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const ref = useRef(null);

  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 60);
        });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={ref} className="py-24 md:py-36 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4 reveal">
              <div className="w-8 h-px bg-[#D4A853]" />
              <span className="text-[#D4A853] text-[11px] tracking-[0.5em] uppercase">Portfolio</span>
            </div>
            <h2
              className="font-bold text-[#F0EDE8] leading-tight reveal"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
              }}
            >
              Selected <span className="text-gold-gradient">Work</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 reveal">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${
                  active === f
                    ? 'bg-[#D4A853] text-[#080808]'
                    : 'border border-[#2a2a2a] text-[#555] hover:border-[#D4A853]/50 hover:text-[#D4A853]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {filtered.map((project) => (
            <a
              key={project.id}
              href="https://www.youtube.com/@AshwinPadwalkar"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card reveal block group"
            >
              {/* Visual */}
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${project.bg} overflow-hidden`}>
                <div className="card-thumb absolute inset-0">
                  {/* Accent glow */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 30% 70%, ${project.accent}28 0%, transparent 65%)`,
                    }}
                  />
                  {/* Decorative shapes */}
                  <div
                    className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-[0.12]"
                    style={{ background: project.accent }}
                  />
                  <div
                    className="absolute bottom-3 left-3 w-12 h-12 rounded-full opacity-[0.07]"
                    style={{ background: project.accent }}
                  />
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className="px-2.5 py-1 text-[9px] tracking-widest uppercase"
                    style={{
                      background: `${project.accent}28`,
                      color: project.accent,
                      border: `1px solid ${project.accent}40`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 text-[#555] text-[10px] tracking-widest z-10">
                  {project.year}
                </div>

                {/* Hover overlay */}
                <div className="card-overlay z-20">
                  <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#D4A853] transition-colors duration-300">
                    <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-[10px] tracking-widest uppercase">
                    View Work
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="bg-[#111] p-4 border-b border-[#1f1f1f] group-hover:border-[#D4A853]/25 transition-colors duration-300">
                <h3 className="text-[#DDD] text-[13px] font-semibold group-hover:text-[#D4A853] transition-colors duration-300 truncate">
                  {project.title}
                </h3>
                <p className="text-[#484848] text-[11px] mt-1 leading-snug truncate">
                  {project.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://www.youtube.com/@AshwinPadwalkar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#2a2a2a] text-[#555] px-8 py-4 text-[11px] tracking-[0.25em] uppercase hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-300"
          >
            View All Work on YouTube
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
