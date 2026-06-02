'use client';
import { useState, useEffect, useRef } from 'react';

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

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ticketNum, setTicketNum] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        entry.target
          .querySelectorAll('.reveal, .reveal-left, .reveal-right')
          .forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 90));
        observer.disconnect();
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    
    // Generate a random ticket ID for the post slip
    setTicketNum(`AP-TKT-${Math.floor(1000 + Math.random() * 9000)}`);

    return () => observer.disconnect();
  }, []);

  const onChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36 bg-[#09090b] border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6 reveal">
            <div className="w-8 h-0.5 bg-[#ff1e27]" />
            <span className="text-[#ff1e27] text-xs font-black tracking-[0.4em] uppercase">HANDOFF SLIP</span>
            <div className="w-8 h-0.5 bg-[#ff1e27]" />
          </div>
          <h2
            className="font-black text-white leading-tight reveal uppercase"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            }}
          >
            LET&apos;S CREATE <span className="text-[#ff1e27] underline decoration-white decoration-4 underline-offset-4">TOGETHER</span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs mt-4 reveal max-w-md mx-auto leading-relaxed">
            Submit a shoot request ticket below. Ashwin will review and respond in 24 frames.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          {/* Info column */}
          <div className="lg:col-span-5 reveal-left flex flex-col justify-between border-2 border-white rounded-md bg-[#18181b] p-6 shadow-[6px_6px_0px_#ff1e27]">
            <div className="space-y-8 font-mono text-xs">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-white/40 uppercase">MONITOR STAUS</span>
                <span className="text-white font-black">{ticketNum}</span>
              </div>

              {/* Status checklist items */}
              <div className="space-y-4">
                <div>
                  <span className="text-white/40 block uppercase text-[10px] mb-1">// ADDR: MAILBOX</span>
                  <a
                    href="mailto:ashwin.padwalkar.films@gmail.com"
                    className="text-white text-sm font-bold hover:text-[#ff1e27] transition-colors break-all"
                  >
                    ashwin.padwalkar.films@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-white/40 block uppercase text-[10px] mb-1">// LOC: LATITUDE</span>
                  <p className="text-white text-sm font-bold">INDIA [GMT +5:30]</p>
                </div>

                <div>
                  <span className="text-white/40 block uppercase text-[10px] mb-1">// LIVE: WORK STATUS</span>
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-black" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">AVAILABLE FOR PROJECTS</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-white/10" />

              <div>
                <span className="text-white/40 block uppercase text-[10px] mb-3">// CONNECT SYSTEM</span>
                <div className="flex gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="w-10 h-10 border-2 border-white flex items-center justify-center text-white bg-black hover:bg-[#ff1e27] hover:border-[#ff1e27] transition-all"
                    >
                      <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Clapperboard slogan */}
            <div className="border-l-4 border-[#ff1e27] pl-4 mt-8">
              <p className="text-zinc-400 text-xs italic leading-relaxed">
                &ldquo;Every shot is a calculated risk. Every frame is a narrative stamp. Let&apos;s ink yours.&rdquo;
              </p>
              <p className="text-[#ff1e27] font-mono text-[9px] font-black uppercase tracking-widest mt-2">
                — AP FILMS CREW
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7 reveal-right flex flex-col justify-center border-2 border-white rounded-md bg-black p-6 shadow-[6px_6px_0px_#ffffff]">
            {submitted ? (
              <div className="crt-screen relative p-8 text-center flex flex-col items-center justify-center gap-5 border border-white/20 bg-[#0c0c0e] min-h-[360px]">
                <div className="crt-scanline-bar" />
                <div className="w-14 h-14 border-2 border-[#ff1e27] flex items-center justify-center bg-black">
                  <svg
                    className="w-8 h-8 text-[#ff1e27]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-black text-white uppercase tracking-wider"
                >
                  TICKET COMMITTED!
                </h3>
                <p className="text-zinc-500 font-mono text-xs leading-relaxed max-w-sm">
                  Your script request was loaded into queue {ticketNum}. Ashwin will get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', project: '', message: '' }); }}
                  className="mt-4 neo-btn px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase"
                >
                  RELOAD TICKET
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-mono text-[10px] tracking-[0.15em] uppercase mb-2">
                      SENDER NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ENTER NAME"
                      value={form.name}
                      onChange={onChange('name')}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-mono text-[10px] tracking-[0.15em] uppercase mb-2">
                      SENDER EMAIL
                    </label>
                    <input
                      type="type"
                      required
                      placeholder="YOUR@EMAIL.COM"
                      value={form.email}
                      onChange={onChange('email')}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-mono text-[10px] tracking-[0.15em] uppercase mb-2">
                    PROJECT CATEGORY
                  </label>
                  <select
                    value={form.project}
                    onChange={onChange('project')}
                    className="form-input"
                    required
                  >
                    <option value="">CHOOSE SERVICE...</option>
                    <option value="cinematography">CINEMATOGRAPHY</option>
                    <option value="video-editing">VIDEO EDITING</option>
                    <option value="motion-graphics">MOTION GRAPHICS</option>
                    <option value="reels">REELS CREATION</option>
                    <option value="documentary">DOCUMENTARY FILM</option>
                    <option value="podcast">PODCAST PRODUCTION</option>
                    <option value="other">OTHER MIX</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-mono text-[10px] tracking-[0.15em] uppercase mb-2">
                    PROJECT NOTES
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="DESCRIBE STORY DETAILS..."
                    value={form.message}
                    onChange={onChange('message')}
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full neo-btn py-4 text-xs font-bold tracking-[0.25em] uppercase"
                >
                  TRANSMIT TICKET
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
