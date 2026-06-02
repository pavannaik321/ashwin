'use client';
import { useState, useEffect, useRef } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'The Sound of Silence',
    category: 'documentary',
    year: '2023',
    inTime: '00:00:15:00',
    duration: '03:40',
    desc: 'A feature documentary highlighting grassroots musicians in rural India',
    bg: '#ff1e27',
    accentColor: '#ffffff',
  },
  {
    id: 2,
    title: 'Urban Chronicles',
    category: 'documentary',
    year: '2023',
    inTime: '00:04:12:00',
    duration: '05:22',
    desc: 'Deep-dive documentary series exploring city night-life and street culture',
    bg: '#18181b',
    accentColor: '#ff1e27',
  },
  {
    id: 8,
    title: 'Startup Story',
    category: 'documentary',
    year: '2024',
    inTime: '00:09:40:00',
    duration: '04:10',
    desc: 'Corporate documentary highlighting a tech startup scaling journey',
    bg: '#27272a',
    accentColor: '#ffffff',
  },
  {
    id: 3,
    title: 'Tech Talk Podcast',
    category: 'podcast',
    year: '2023',
    inTime: '00:01:05:00',
    duration: '12:30',
    desc: 'Visual setup and multicam production editing for a leading tech show',
    bg: '#ff1e27',
    accentColor: '#ffffff',
  },
  {
    id: 4,
    title: 'The Creator Podcast',
    category: 'podcast',
    year: '2022',
    inTime: '00:14:20:00',
    duration: '08:45',
    desc: 'Monthly series spotlighting creative professionals across visual arts',
    bg: '#18181b',
    accentColor: '#ff1e27',
  },
  {
    id: 5,
    title: 'FitLife Campaign',
    category: 'reels',
    year: '2024',
    inTime: '00:00:30:00',
    duration: '00:30',
    desc: 'High-energy, fast-paced fitness brand reels optimized for Instagram',
    bg: '#27272a',
    accentColor: '#ffffff',
  },
  {
    id: 6,
    title: 'Travel Diaries',
    category: 'reels',
    year: '2023',
    inTime: '00:01:10:00',
    duration: '01:00',
    desc: 'Cinematic color graded travel cuts across various landscapes of India',
    bg: '#ff1e27',
    accentColor: '#ffffff',
  },
  {
    id: 7,
    title: 'Product Launch Reel',
    category: 'reels',
    year: '2024',
    inTime: '00:02:25:00',
    duration: '00:45',
    desc: 'Premium sleek product commercial reel with motion typography overlays',
    bg: '#18181b',
    accentColor: '#ff1e27',
  },
];

export default function Portfolio() {
  const [selectedProj, setSelectedProj] = useState(PROJECTS[0]);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const ref = useRef(null);

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

  const selectProject = (proj) => {
    setSelectedProj(proj);
    setIsPlayingPreview(false);
  };

  const getProjectsByCat = (cat) => PROJECTS.filter((p) => p.category === cat);

  return (
    <section id="work" ref={ref} className="py-24 md:py-36 bg-[#09090b] border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4 reveal">
              <div className="w-8 h-0.5 bg-[#ff1e27]" />
              <span className="text-[#ff1e27] text-xs font-black tracking-[0.4em] uppercase">TIMELINE PORTFOLIO</span>
            </div>
            <h2
              className="font-black text-white leading-tight reveal"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
              }}
            >
              SELECTED <span className="text-[#ff1e27] underline decoration-white decoration-4 underline-offset-2">CREATIVE WORK</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-xs font-mono max-w-xs hidden lg:block reveal leading-relaxed">
            Click on any color block clip inside the editor timeline tracks (V2, V1, A1) to play and review its project specs.
          </p>
        </div>

        {/* Timeline Editor Board */}
        <div className="reveal border-2 border-white rounded-md bg-[#000] p-4 shadow-[6px_6px_0px_#ff1e27] overflow-hidden mb-10 select-none">
          {/* Timeline Header (Time rulers) */}
          <div className="flex border-b border-white/20 pb-3 mb-4 items-center justify-between font-mono text-[9px] text-zinc-500 overflow-x-auto whitespace-nowrap">
            <div className="w-28 flex-shrink-0 text-white font-black">TRACK NAME</div>
            <div className="flex justify-between w-full px-4 gap-12">
              <span>00:00:00</span>
              <span>00:02:00</span>
              <span>00:04:00</span>
              <span>00:06:00</span>
              <span>00:08:00</span>
              <span>00:10:00</span>
              <span>00:12:00</span>
              <span>00:14:00</span>
            </div>
          </div>

          {/* Timeline Tracks container */}
          <div className="relative space-y-3">
            {/* Playhead line (Red vertical marker line) */}
            <div className="absolute top-0 bottom-0 left-[45%] w-0.5 bg-[#ff1e27] z-20 pointer-events-none hidden md:block">
              <div className="w-2.5 h-2.5 bg-[#ff1e27] border border-white rotate-45 transform translate-x-[-4px] translate-y-[-4px]" />
              <div className="absolute top-full transform translate-x-[-50%] mt-1 text-[8px] bg-black text-[#ff1e27] px-1 border border-[#ff1e27] rounded-sm font-mono font-bold whitespace-nowrap">
                PLAYHEAD
              </div>
            </div>

            {/* TRACK V2: Podcasts */}
            <div className="flex items-center gap-3">
              <div className="w-28 flex-shrink-0 font-mono text-[10px] font-bold text-white border border-white/20 p-2 bg-zinc-900/60 rounded-sm flex items-center justify-between">
                <span>V2 [Podcasts]</span>
                <span className="text-[#ff1e27]">●</span>
              </div>
              <div className="flex gap-2 w-full overflow-x-auto py-1 scrollbar-thin">
                {getProjectsByCat('podcast').map((proj) => {
                  const isSelected = selectedProj.id === proj.id;
                  return (
                    <div
                      key={proj.id}
                      onClick={() => selectProject(proj)}
                      className={`h-11 px-4 border-2 flex flex-col justify-center rounded-sm cursor-none transition-all duration-200 min-w-[200px] flex-1 ${
                        isSelected
                          ? 'border-[#ff1e27] bg-[#ff1e27] text-white shadow-md'
                          : 'border-white bg-[#18181b] text-white/70 hover:border-[#ff1e27] hover:text-white'
                      }`}
                    >
                      <span className="text-[10px] font-black uppercase truncate leading-none mb-1">{proj.title}</span>
                      <span className="text-[8px] font-mono opacity-60 leading-none">IN: {proj.inTime}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TRACK V1: Documentary */}
            <div className="flex items-center gap-3">
              <div className="w-28 flex-shrink-0 font-mono text-[10px] font-bold text-white border border-white/20 p-2 bg-zinc-900/60 rounded-sm flex items-center justify-between">
                <span>V1 [Documentary]</span>
                <span className="text-white">●</span>
              </div>
              <div className="flex gap-2 w-full overflow-x-auto py-1 scrollbar-thin">
                {getProjectsByCat('documentary').map((proj) => {
                  const isSelected = selectedProj.id === proj.id;
                  return (
                    <div
                      key={proj.id}
                      onClick={() => selectProject(proj)}
                      className={`h-11 px-4 border-2 flex flex-col justify-center rounded-sm cursor-none transition-all duration-200 min-w-[180px] flex-1 ${
                        isSelected
                          ? 'border-white bg-white text-black shadow-md'
                          : 'border-white bg-[#18181b] text-white/70 hover:border-[#ff1e27] hover:text-white'
                      }`}
                    >
                      <span className="text-[10px] font-black uppercase truncate leading-none mb-1">{proj.title}</span>
                      <span className="text-[8px] font-mono opacity-60 leading-none">IN: {proj.inTime}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TRACK A1: Social/Reels */}
            <div className="flex items-center gap-3">
              <div className="w-28 flex-shrink-0 font-mono text-[10px] font-bold text-white border border-white/20 p-2 bg-zinc-900/60 rounded-sm flex items-center justify-between">
                <span>A1 [Reels/Audio]</span>
                <span className="text-zinc-500">●</span>
              </div>
              <div className="flex gap-2 w-full overflow-x-auto py-1 scrollbar-thin">
                {getProjectsByCat('reels').map((proj) => {
                  const isSelected = selectedProj.id === proj.id;
                  return (
                    <div
                      key={proj.id}
                      onClick={() => selectProject(proj)}
                      className={`h-11 px-4 border-2 flex flex-col justify-center rounded-sm cursor-none transition-all duration-200 min-w-[150px] flex-1 ${
                        isSelected
                          ? 'border-[#ff1e27] bg-transparent text-[#ff1e27] shadow-md border-dashed'
                          : 'border-white bg-[#18181b] text-white/70 hover:border-[#ff1e27] hover:text-white'
                      }`}
                    >
                      <span className="text-[10px] font-black uppercase truncate leading-none mb-1">{proj.title}</span>
                      <span className="text-[8px] font-mono opacity-60 leading-none">IN: {proj.inTime}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Detail Preview Box */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Detail Text Box */}
          <div className="lg:col-span-7 border-2 border-white rounded-md bg-[#18181b] p-6 shadow-[4px_4px_0px_#ffffff] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 border border-[#ff1e27] text-[#ff1e27] font-mono text-[9px] font-bold uppercase rounded-sm">
                  {selectedProj.category}
                </span>
                <span className="font-mono text-xs text-white/50">{selectedProj.year} RELEASE</span>
              </div>

              <h3 className="font-black text-2xl uppercase tracking-tight text-white">
                {selectedProj.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {selectedProj.desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
              <div className="font-mono text-xs text-zinc-500">
                <span className="block">CLIP DURATION</span>
                <span className="font-bold text-white text-sm">{selectedProj.duration} MINS</span>
              </div>

              {/* YouTube Link CTA */}
              <a
                href="https://www.youtube.com/@AshwinPadwalkar"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold tracking-widest uppercase"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                PLAY ON YOUTUBE
              </a>
            </div>
          </div>

          {/* Mini Monitor Preview (Stylized frame) */}
          <div className="lg:col-span-5 border-2 border-white rounded-md bg-black shadow-[4px_4px_0px_#ff1e27] overflow-hidden flex flex-col justify-between p-4">
            <div className="crt-screen relative flex-1 aspect-[4/3] bg-zinc-950 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="crt-scanline-bar" />
              
              {/* Static overlay */}
              <div 
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
              />

              <div className="absolute top-2 left-2 text-[8px] font-mono bg-zinc-900 border border-white/20 text-[#ff1e27] px-1 rounded-sm uppercase font-bold">
                PRVW MON
              </div>

              <div className="text-center p-4">
                {/* Visual Camera lens look-alike */}
                <div className="w-16 h-16 rounded-full border-4 border-dashed border-[#ff1e27] flex items-center justify-center mx-auto mb-3 animate-[spin-slow_20s_linear_infinite]">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-white" />
                </div>
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">
                  READY TO STREAM
                </span>
                <span className="text-white text-xs font-black uppercase tracking-wider block mt-1">
                  {selectedProj.title}
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[8px] text-zinc-600 px-1">
              <span>PRVW RATE: 29.97 FPS</span>
              <span className="text-[#ff1e27]">REC ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
