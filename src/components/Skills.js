'use client';
import { useEffect, useRef } from 'react';

const SOFTWARE = [
  { name: 'Adobe Premiere Pro', abbr: 'Pr', level: 95, color: '#9999FF' },
  { name: 'Adobe After Effects', abbr: 'Ae', level: 88, color: '#9999FF' },
  { name: 'DaVinci Resolve',     abbr: 'DR', level: 85, color: '#FF8A00' },
  { name: 'Adobe Photoshop',     abbr: 'Ps', level: 82, color: '#31A8FF' },
  { name: 'Adobe Lightroom',     abbr: 'Lr', level: 80, color: '#31A8FF' },
  { name: 'Adobe Audition',      abbr: 'Au', level: 75, color: '#9999FF' },
];

const TAGS = [
  'Color Grading', 'Sound Design', 'Motion Typography', 'Visual Storytelling',
  'Documentary Editing', 'Brand Films', 'Social Content', 'Podcast Production',
  'Aerial Cinematography', 'Interview Setups', 'Corporate Films', 'Short Films',
];

const PROCESS = [
  { step: '01', title: 'Discovery',       desc: 'Understanding your vision, goals, and audience' },
  { step: '02', title: 'Production',      desc: 'Filming, capturing and creating the raw content' },
  { step: '03', title: 'Post-Production', desc: 'Editing, color grading, sound mix, and graphics' },
  { step: '04', title: 'Delivery',        desc: 'Final export in required formats and handoff' },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 80);
        });
        entry.target.querySelectorAll('.progress-bar').forEach((bar) => {
          bar.style.width = `${bar.dataset.level}%`;
        });
        observer.disconnect();
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 md:py-36 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20 reveal">
          <div className="w-8 h-px bg-[#D4A853]" />
          <span className="text-[#D4A853] text-[11px] tracking-[0.5em] uppercase">Skills</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Software */}
          <div>
            <h2
              className="font-bold text-[#F0EDE8] leading-tight mb-10 reveal"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              }}
            >
              Software <span className="text-gold-gradient">Mastery</span>
            </h2>

            <div className="space-y-6">
              {SOFTWARE.map((s, i) => (
                <div key={s.name} className={`reveal delay-${Math.min(i + 1, 6)}`}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 flex items-center justify-center text-[9px] font-bold tracking-wide flex-shrink-0"
                        style={{
                          background: `${s.color}18`,
                          color: s.color,
                          border: `1px solid ${s.color}40`,
                        }}
                      >
                        {s.abbr}
                      </div>
                      <span className="text-[#BBB] text-[13px]">{s.name}</span>
                    </div>
                    <span className="text-[#D4A853] text-[12px]">{s.level}%</span>
                  </div>
                  <div className="h-px bg-[#1f1f1f] relative overflow-hidden">
                    <div
                      className="progress-bar absolute left-0 top-0 h-full bg-[#D4A853]"
                      data-level={s.level}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div>
            <h2
              className="font-bold text-[#F0EDE8] leading-tight mb-10 reveal"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              }}
            >
              Areas of <span className="text-gold-gradient">Expertise</span>
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mb-14">
              {TAGS.map((tag, i) => (
                <span
                  key={tag}
                  className={`reveal delay-${Math.min((i % 6) + 1, 6)} border border-[#1f1f1f] text-[#666] px-4 py-2 text-[11px] tracking-[0.15em] uppercase hover:border-[#D4A853]/40 hover:text-[#D4A853]/80 transition-all duration-300 cursor-default`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Process */}
            <div>
              <h3 className="text-[#F0EDE8] text-[11px] font-semibold tracking-[0.3em] uppercase mb-6 reveal">
                My Process
              </h3>
              <div className="space-y-4">
                {PROCESS.map((p, i) => (
                  <div
                    key={p.step}
                    className={`reveal delay-${i + 1} flex items-start gap-4 group`}
                  >
                    <div className="w-8 h-8 border border-[#D4A853]/25 flex items-center justify-center flex-shrink-0 group-hover:border-[#D4A853] group-hover:bg-[#D4A853]/8 transition-all duration-300">
                      <span className="text-[#D4A853] text-[10px] font-bold">{p.step}</span>
                    </div>
                    <div>
                      <p className="text-[#CCC] text-[13px] font-medium">{p.title}</p>
                      <p className="text-[#4a4a4a] text-[12px] mt-0.5">{p.desc}</p>
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
