'use client';
import { useState, useEffect, useRef } from 'react';

const PROJECTS = [
  // V2: Podcasts
  {
    id: 1,
    title: 'Business Stories EP.01',
    category: 'podcast',
    year: '2024',
    inTime: '00:00:00:00',
    duration: '01:25 HR',
    desc: 'Inside the mind of a serial entrepreneur — an in-depth conversation on business, failure, and what it really takes to scale.',
    embedId: '7cW0XoM0yms',
  },
  {
    id: 2,
    title: 'Men In Making — Actor',
    category: 'podcast',
    year: '2023',
    inTime: '00:05:20:00',
    duration: '30:35 MIN',
    desc: 'A documentary-style conversation exploring the journey of becoming an actor in independent cinema.',
    embedId: 'xwzYOv7zzXI',
  },
  {
    id: 3,
    title: 'Men In Making — Sports',
    category: 'podcast',
    year: '2023',
    inTime: '00:10:40:00',
    duration: '25:02 MIN',
    desc: 'A sports cinematographer tells his story — the craft, the grind, and the camera behind the athlete.',
    embedId: 'yZz9Xg14aLs',
  },
  // V1: Documentary
  {
    id: 4,
    title: 'Karwar Rasoi S01 E01',
    category: 'documentary',
    year: '2023',
    inTime: '00:00:00:00',
    duration: '07:25 MIN',
    desc: 'First episode of Karwar Rasoi — a food documentary series exploring the authentic local flavors of Karwar.',
    embedId: 'BDDMxZYT5gs',
  },
  {
    id: 5,
    title: 'Yuva Utsav 2022',
    category: 'documentary',
    year: '2022',
    inTime: '00:04:00:00',
    duration: '01:44 MIN',
    desc: 'Aftermovie from Yuva Utsav 2022 — capturing the energy, culture, and spirit of youth in Karwar.',
    embedId: 'DoeZ7cpLvSY',
  },
  {
    id: 6,
    title: 'Shree — Legacy Film',
    category: 'documentary',
    year: '2023',
    inTime: '00:07:00:00',
    duration: '04:12 MIN',
    desc: 'A behind-the-scenes legacy film documenting the making of SHREE — a visual narrative of identity and heritage.',
    embedId: 'c4-shH12u1E',
  },
  // A1: Reels / Music Videos
  {
    id: 7,
    title: 'Tu Mera Humsafar',
    category: 'reels',
    year: '2023',
    inTime: '00:00:00:00',
    duration: '05:25 MIN',
    desc: 'Official music video — a cinematic romantic narrative shot with precision lighting and filmic color grade.',
    embedId: 'Rr7jI7fTHwo',
  },
  {
    id: 8,
    title: 'Woh Aayega',
    category: 'reels',
    year: '2023',
    inTime: '00:03:00:00',
    duration: '03:44 MIN',
    desc: 'Hindi Christian music video — a visually evocative gospel narrative by Nagendra Banavalikar.',
    embedId: 'AlClb7yHtuI',
  },
  {
    id: 9,
    title: 'Tu Hi Mera Pyar',
    category: 'reels',
    year: '2023',
    inTime: '00:06:00:00',
    duration: '03:15 MIN',
    desc: 'A String Waves music video — soft cinematic storytelling with intimate framing and natural light.',
    embedId: '0vF-cFGeDIg',
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

  const thumbUrl = `https://img.youtube.com/vi/${selectedProj.embedId}/hqdefault.jpg`;

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

          <div className="relative space-y-3">
            <div className="absolute top-0 bottom-0 left-[45%] w-0.5 bg-[#ff1e27] z-20 pointer-events-none hidden md:block">
              <div className="w-2.5 h-2.5 bg-[#ff1e27] border border-white rotate-45 transform translate-x-[-4px] translate-y-[-4px]" />
              <div className="absolute top-full transform translate-x-[-50%] mt-1 text-[8px] bg-black text-[#ff1e27] px-1 border border-[#ff1e27] rounded-sm font-mono font-bold whitespace-nowrap">
                PLAYHEAD
              </div>
            </div>

            {/* V2: Podcasts */}
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

            {/* V1: Documentary */}
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

            {/* A1: Reels / Music Videos */}
            <div className="flex items-center gap-3">
              <div className="w-28 flex-shrink-0 font-mono text-[10px] font-bold text-white border border-white/20 p-2 bg-zinc-900/60 rounded-sm flex items-center justify-between">
                <span>A1 [Reels/MV]</span>
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

        {/* Detail + Preview */}
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
                <span className="font-bold text-white text-sm">{selectedProj.duration}</span>
              </div>

              <a
                href={`https://www.youtube.com/watch?v=${selectedProj.embedId}`}
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

          {/* Preview Monitor */}
          <div className="lg:col-span-5 border-2 border-white rounded-md bg-black shadow-[4px_4px_0px_#ff1e27] overflow-hidden flex flex-col justify-between p-4">
            <div className="crt-screen relative flex-1 aspect-video bg-zinc-950 border border-white/10 overflow-hidden">
              <div className="crt-scanline-bar pointer-events-none z-10" />

              <div className="absolute top-2 left-2 z-20 text-[8px] font-mono bg-zinc-900 border border-white/20 text-[#ff1e27] px-1 rounded-sm uppercase font-bold">
                PRVW MON
              </div>

              {isPlayingPreview ? (
                <iframe
                  key={selectedProj.embedId}
                  className="absolute inset-0 w-full h-full border-0 z-0"
                  src={`https://www.youtube.com/embed/${selectedProj.embedId}?autoplay=1&rel=0&showinfo=0`}
                  title={selectedProj.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  {/* Thumbnail */}
                  <img
                    src={thumbUrl}
                    alt={selectedProj.title}
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
                  />
                  {/* Play button overlay */}
                  <button
                    onClick={() => setIsPlayingPreview(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center z-10 group cursor-none"
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-white bg-black/60 flex items-center justify-center group-hover:bg-[#ff1e27] group-hover:border-[#ff1e27] transition-all duration-200">
                      <svg className="w-6 h-6 fill-white translate-x-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="mt-2 text-[9px] font-mono text-white/70 tracking-widest uppercase">
                      CLICK TO PREVIEW
                    </span>
                  </button>
                </>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[8px] text-zinc-600 px-1">
              <span>PRVW RATE: 29.97 FPS</span>
              <span className="text-[#ff1e27] animate-pulse">● REC ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
