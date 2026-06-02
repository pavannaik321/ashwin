'use client';
import { useEffect, useRef, useState } from 'react';

const SOFTWARE = [
  { name: 'Adobe Premiere Pro', abbr: 'Pr', level: 95 },
  { name: 'Adobe After Effects', abbr: 'Ae', level: 88 },
  { name: 'DaVinci Resolve',     abbr: 'DR', level: 90 },
  { name: 'Adobe Photoshop',     abbr: 'Ps', level: 80 },
  { name: 'Adobe Lightroom',     abbr: 'Lr', level: 75 },
  { name: 'Adobe Audition',      abbr: 'Au', level: 82 },
];

const TAGS = [
  'Color Grading', 'Sound Design', 'Motion Typography', 'Visual Storytelling',
  'Documentary Editing', 'Brand Films', 'Social Content', 'Podcast Production',
  'Aerial Cinematography', 'Interview Setups', 'Corporate Films', 'Short Films',
];

const PROCESS = [
  { step: '01', title: 'DISCOVERY',       desc: 'Aligning on your vision, target audience, and project goals.' },
  { step: '02', title: 'PRODUCTION',      desc: 'Lighting setup, high-res filming, and capturing raw footage.' },
  { step: '03', title: 'POST-PROD',       desc: 'Precision cuts, color grading, sound design, and graphics.' },
  { step: '04', title: 'DELIVERY',        desc: 'Exporting final cuts, rendering formats, and handoff.' },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [meterTrigger, setMeterTrigger] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 80);
        });
        setMeterTrigger(true);
        observer.disconnect();
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-36 bg-[#09090b] border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20 reveal">
          <div className="w-8 h-0.5 bg-[#ff1e27]" />
          <span className="text-[#ff1e27] text-xs font-black tracking-[0.4em] uppercase">SKILL METERS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Software: LED VU Meters */}
          <div>
            <div className="flex items-baseline gap-2 mb-10 reveal">
              <h2
                className="font-black text-white leading-tight uppercase"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                }}
              >
                SOFTWARE MASTERY
              </h2>
              <span className="text-zinc-600 font-mono text-[10px] tracking-wider uppercase">[VU DB LEVEL]</span>
            </div>

            <div className="space-y-6">
              {SOFTWARE.map((s, i) => {
                // Calculate how many LED segments to fill (total of 10 segments)
                const activeSegments = Math.round(s.level / 10);
                
                return (
                  <div key={s.name} className={`reveal delay-${Math.min(i + 1, 6)}`}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 flex items-center justify-center text-[9.5px] font-black tracking-wider flex-shrink-0 border border-white/20 bg-zinc-950 text-white"
                        >
                          {s.abbr}
                        </div>
                        <span className="text-white text-xs font-bold uppercase tracking-wider">{s.name}</span>
                      </div>
                      <span className="text-[#ff1e27] font-mono text-xs font-black">{s.level}%</span>
                    </div>

                    {/* Playful LED meter bar */}
                    <div className="led-meter">
                      {Array.from({ length: 10 }).map((_, idx) => {
                        const isFilled = meterTrigger && idx < activeSegments;
                        // First 7 channels are white, peak 3 channels are red
                        const isRed = idx >= 7;
                        
                        return (
                          <div
                            key={idx}
                            className={`led-segment transition-all duration-[600ms] ${
                              isFilled
                                ? isRed
                                  ? 'active-red'
                                  : 'active-white'
                                : ''
                            }`}
                            style={{ transitionDelay: meterTrigger ? `${idx * 50}ms` : '0ms' }}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column: Expertise & Filmstrip Process */}
          <div>
            <h2
              className="font-black text-white leading-tight mb-10 reveal uppercase"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              }}
            >
              AREAS OF EXPERTISE
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mb-14">
              {TAGS.map((tag, i) => (
                <span
                  key={tag}
                  className={`reveal delay-${Math.min((i % 6) + 1, 6)} border-2 border-white text-white/90 px-4 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-[#ff1e27] hover:border-[#ff1e27] hover:shadow-[4px_4px_0px_#fff] transition-all cursor-none`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Filmstrip Process */}
            <div>
              <div className="flex items-center gap-2 mb-6 reveal">
                <span className="text-[#ff1e27] font-black text-xs">//</span>
                <h3 className="text-white text-xs font-black tracking-widest uppercase">
                  PRODUCTION PROCESS
                </h3>
              </div>

              {/* Visual Filmstrip cells */}
              <div className="space-y-6 relative pl-6 border-l border-dashed border-white/20">
                {PROCESS.map((p, i) => (
                  <div
                    key={p.step}
                    className={`reveal delay-${i + 1} relative flex flex-col gap-2 group`}
                  >
                    {/* Sprocket node */}
                    <div className="absolute left-[-32px] top-1.5 w-4 h-4 bg-zinc-950 border-2 border-white text-[8px] font-black text-[#ff1e27] flex items-center justify-center rounded-sm z-10 group-hover:bg-[#ff1e27] group-hover:text-white transition-all">
                      {p.step}
                    </div>

                    {/* Slate/Film frame style container */}
                    <div className="border border-white/20 bg-zinc-900/30 p-4 rounded-md shadow-[4px_4px_0px_rgba(255,255,255,0.04)] group-hover:shadow-[4px_4px_0px_#ff1e27] group-hover:border-white transition-all">
                      {/* Film sprocket representation on the frame edge */}
                      <div className="flex gap-1.5 border-b border-white/10 pb-2 mb-2 justify-end opacity-20 group-hover:opacity-60 transition-opacity">
                        <div className="w-1.5 h-1.5 border border-white rounded-sm bg-black" />
                        <div className="w-1.5 h-1.5 border border-white rounded-sm bg-black" />
                        <div className="w-1.5 h-1.5 border border-white rounded-sm bg-black" />
                      </div>
                      
                      <p className="text-white text-xs font-black tracking-wider uppercase">{p.title}</p>
                      <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
