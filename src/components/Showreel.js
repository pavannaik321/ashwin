'use client';
import { useState, useEffect, useRef } from 'react';

const CASSETTES = [
  {
    id: 'reel-2024',
    title: 'SHOWREEL 2024',
    length: '02:14 MIN',
    color: '#ff1e27',
    textColor: '#ffffff',
    embedId: '9wcrzR4C-js', // Cinematic video ID
  },
  {
    id: 'cinematography',
    title: 'CINEMATOGRAPHY REEL',
    length: '03:45 MIN',
    color: '#ffffff',
    textColor: '#09090b',
    embedId: '4yW4o9J6_B0', // Documentary cinematography
  },
  {
    id: 'commercials',
    title: 'COMMERCIAL / SHORTS',
    length: '01:30 MIN',
    color: '#18181b',
    textColor: '#ffffff',
    embedId: 'uD2g6g23x0o', // Commercial editing
  },
];

export default function Showreel() {
  const sectionRef = useRef(null);
  const [selectedTape, setSelectedTape] = useState(null); // null means no tape inserted
  const [isInserting, setIsInserting] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
        observer.disconnect();
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInsertTape = (tape) => {
    if (selectedTape?.id === tape.id) return;
    
    setIsPlaying(false);
    setIsInserting(true);
    setGlitching(true);

    // Simulate mechanical tape loading
    setTimeout(() => {
      setSelectedTape(tape);
      setIsInserting(false);
      
      // Glitch effect on CRT load
      setTimeout(() => {
        setGlitching(false);
        setIsPlaying(true);
      }, 500);
    }, 850);
  };

  const handleEject = () => {
    if (!selectedTape) return;
    setGlitching(true);
    setIsPlaying(false);
    setTimeout(() => {
      setSelectedTape(null);
      setGlitching(false);
    }, 400);
  };

  return (
    <section
      id="showreel"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-[#09090b] overflow-hidden border-t-2 border-white"
    >
      {/* Tape Deck grid background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16 reveal">
          <div className="flex items-center gap-4">
            <div className="w-8 h-0.5 bg-[#ff1e27]" />
            <span className="text-[#ff1e27] text-xs font-black tracking-[0.4em] uppercase">VCR DECK</span>
          </div>
          <span className="text-white/30 font-mono text-[10px] tracking-widest hidden md:inline">SYSTEM STATUS: ACTIVE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Column 1: VCR Monitor Screen & Controls */}
          <div className="lg:col-span-7 flex flex-col justify-between border-2 border-white rounded-md p-4 bg-black shadow-[6px_6px_0px_#ff1e27] reveal-left">
            {/* Monitor Screen Frame */}
            <div className={`crt-screen relative aspect-video w-full border border-white/20 bg-[#0f0f12] flex items-center justify-center overflow-hidden ${glitching ? 'vcr-glitch' : ''}`}>
              
              {/* Scanlines overlays */}
              <div className="crt-scanline-bar" />
              
              {/* TV Static Noise when no tape */}
              {!selectedTape && !isInserting && (
                <div 
                  className="absolute inset-0 opacity-[0.15] bg-repeat pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                  }}
                />
              )}

              {/* Video Player Display */}
              {selectedTape && isPlaying ? (
                <iframe
                  className="w-full h-full relative z-0"
                  src={`https://www.youtube.com/embed/${selectedTape.embedId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${selectedTape.embedId}`}
                  title={selectedTape.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : null}

              {/* Screen HUD Overlay */}
              <div className="absolute inset-4 flex flex-col justify-between pointer-events-none z-10 font-mono text-[10px] tracking-wider text-white">
                <div className="flex justify-between items-start">
                  <div>
                    {selectedTape ? (
                      <span className="flex items-center gap-1 bg-[#ff1e27] text-white px-1.5 py-0.5 text-[8px] font-bold rounded-sm animate-pulse">
                        PLAY ●
                      </span>
                    ) : isInserting ? (
                      <span className="flex items-center gap-1 bg-white text-black px-1.5 py-0.5 text-[8px] font-bold rounded-sm">
                        LOADING...
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 bg-zinc-800 text-white/60 px-1.5 py-0.5 text-[8px] font-bold rounded-sm">
                        NO TAPE
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="block text-white/50">CH 1</span>
                    <span className="block text-[#ff1e27]">SP SPEED</span>
                  </div>
                </div>

                {/* Center crosshair */}
                <div className="self-center w-4 h-4 border border-white/20 flex items-center justify-center">
                  <div className="w-1.5 h-px bg-white/20" />
                  <div className="h-1.5 w-px bg-white/20 absolute" />
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    {selectedTape ? (
                      <span className="text-[#ff1e27] block font-black">{selectedTape.title}</span>
                    ) : (
                      <span className="text-white/30 block">INSERT CASSETTE</span>
                    )}
                  </div>
                  <div>
                    {selectedTape ? (
                      <span>{selectedTape.length}</span>
                    ) : (
                      <span>--:--:--</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Big Text instructions if screen is empty */}
              {!selectedTape && !isInserting && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40">
                  <span className="text-white font-mono text-[9px] tracking-[0.3em] uppercase opacity-40 mb-3">// MONITOR STANDBY //</span>
                  <p className="text-white font-black text-xs md:text-sm tracking-widest uppercase bg-zinc-900 border border-white/20 px-4 py-2 hover:bg-[#ff1e27] hover:border-white transition-colors cursor-none pointer-events-auto" style={{ cursor: 'none' }}>
                    SELECT A TAPE TO RUN REEL
                  </p>
                </div>
              )}

              {/* Tape inserting visual overlay */}
              {isInserting && (
                <div className="absolute inset-0 bg-[#09090b] flex flex-col items-center justify-center animate-pulse">
                  <div className="w-48 h-8 border-2 border-white/20 bg-zinc-900 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute left-0 top-0 bottom-0 bg-[#ff1e27] w-full origin-left animate-[barGrow_0.8s_ease-out]" />
                    <span className="relative z-10 text-[9px] font-mono text-white font-black uppercase tracking-widest">LOADING CASSETTE</span>
                  </div>
                </div>
              )}
            </div>

            {/* VCR Mechanical Buttons deck */}
            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-6 gap-2">
              <button
                onClick={handleEject}
                disabled={!selectedTape}
                className="py-2.5 px-1 border border-white/20 bg-zinc-900/60 hover:bg-[#ff1e27] hover:text-white text-white/60 hover:border-white transition-all text-[9px] font-mono font-bold tracking-widest disabled:opacity-20 disabled:pointer-events-none uppercase rounded-sm flex flex-col items-center justify-center gap-1"
              >
                <div className="w-2.5 h-0.5 bg-current" />
                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-current" />
                EJECT
              </button>

              <button
                disabled={!selectedTape || isPlaying}
                onClick={() => setIsPlaying(true)}
                className="col-span-2 py-2.5 px-1 border border-white/20 bg-zinc-900/60 hover:bg-[#ff1e27] hover:text-white text-white/60 hover:border-white transition-all text-[9px] font-mono font-bold tracking-widest disabled:opacity-20 disabled:pointer-events-none uppercase rounded-sm flex items-center justify-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                PLAY
              </button>

              <button
                disabled={!selectedTape || !isPlaying}
                onClick={() => setIsPlaying(false)}
                className="col-span-2 py-2.5 px-1 border border-white/20 bg-zinc-900/60 hover:bg-[#ff1e27] hover:text-white text-white/60 hover:border-white transition-all text-[9px] font-mono font-bold tracking-widest disabled:opacity-20 disabled:pointer-events-none uppercase rounded-sm flex items-center justify-center gap-1.5"
              >
                <div className="flex gap-0.5">
                  <div className="w-1 h-3 bg-current" />
                  <div className="w-1 h-3 bg-current" />
                </div>
                PAUSE
              </button>

              <div className="flex flex-col justify-center items-center font-mono text-[7px] text-white/30 border border-white/5 bg-zinc-950 p-1">
                <span>VCR</span>
                <span className="font-bold text-[#ff1e27]">AUTO</span>
                <span>TRACKING</span>
              </div>
            </div>
          </div>

          {/* Column 2: VHS Tape Casings rack */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between reveal-right">
            <div>
              <h3 className="text-white font-black text-sm uppercase tracking-wider mb-2">TAPE RACK</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Click any cassette tape from the rack below to slide it into the mechanical playback slot. Each tape loads a specific cut of Ashwin Padwalkar&apos;s films.
              </p>
            </div>

            {/* Tape casing stack */}
            <div className="space-y-4">
              {CASSETTES.map((tape) => {
                const isActive = selectedTape?.id === tape.id;
                return (
                  <div
                    key={tape.id}
                    onClick={() => handleInsertTape(tape)}
                    className="relative group border-2 border-white rounded-md p-3.5 flex items-center justify-between cursor-none transition-all duration-300 transform shadow-[4px_4px_0px_rgba(255,255,255,0.08)] bg-zinc-900/40 hover:bg-zinc-800/80 hover:shadow-[4px_4px_0px_#ff1e27] hover:translate-y-[-2px]"
                  >
                    {/* VHS Tape Spine Graphics */}
                    <div className="flex items-center gap-3">
                      {/* Active Red indicator light */}
                      <div className={`w-3 h-3 rounded-full border border-black/40 flex items-center justify-center ${
                        isActive ? 'bg-[#ff1e27] animate-pulse shadow-md shadow-[#ff1e27]' : 'bg-zinc-700'
                      }`} />

                      {/* Spine label design */}
                      <div
                        className="border border-black/20 px-3 py-1 text-[10px] font-mono font-black tracking-widest rounded-sm"
                        style={{
                          backgroundColor: tape.color,
                          color: tape.textColor,
                        }}
                      >
                        {tape.title}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-right">
                      <div className="font-mono text-[9px] text-zinc-500 uppercase">
                        <span className="block">LENGTH</span>
                        <span className="font-bold text-white">{tape.length}</span>
                      </div>

                      {/* Insertion arrow indicator */}
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-[#ff1e27] group-hover:border-[#ff1e27] transition-all">
                        <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                    {/* VCR tape pattern details */}
                    <div className="absolute left-0 bottom-0 top-0 w-1 bg-[#ff1e27] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                );
              })}
            </div>

            {/* Aesthetic label */}
            <div className="border border-white/10 p-3 bg-black/60 font-mono text-[8px] text-white/30 tracking-widest uppercase rounded-sm flex items-center justify-between">
              <span>MODEL: AP-2024-VCR</span>
              <span>● PAL / SECAM / NTSC</span>
              <span className="text-[#ff1e27]">REC-SAFE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
