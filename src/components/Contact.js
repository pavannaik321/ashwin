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
    return () => observer.disconnect();
  }, []);

  const onChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6 reveal">
            <div className="w-8 h-px bg-[#D4A853]" />
            <span className="text-[#D4A853] text-[11px] tracking-[0.5em] uppercase">Contact</span>
            <div className="w-8 h-px bg-[#D4A853]" />
          </div>
          <h2
            className="font-bold text-[#F0EDE8] leading-tight reveal"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            }}
          >
            Let&apos;s Create <span className="text-gold-gradient">Together</span>
          </h2>
          <p className="text-[#555] text-sm md:text-[15px] mt-4 reveal max-w-md mx-auto leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <div className="reveal-left space-y-10">
            <div>
              <p className="text-[#444] text-[11px] tracking-[0.35em] uppercase mb-2">Email</p>
              <a
                href="mailto:ashwin.padwalkar.films@gmail.com"
                className="text-[#E0DDD8] text-base md:text-lg hover:text-[#D4A853] transition-colors duration-300 break-all"
              >
                ashwin.padwalkar.films@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[#444] text-[11px] tracking-[0.35em] uppercase mb-2">Based In</p>
              <p className="text-[#E0DDD8] text-base">India</p>
            </div>

            <div>
              <p className="text-[#444] text-[11px] tracking-[0.35em] uppercase mb-2">
                Availability
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-[#E0DDD8] text-sm">Available for new projects</p>
              </div>
            </div>

            <div className="w-full h-px bg-[#1a1a1a]" />

            <div>
              <p className="text-[#444] text-[11px] tracking-[0.35em] uppercase mb-5">
                Follow My Work
              </p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#444] hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-[#D4A853] pl-5">
              <p className="text-[#555] text-sm italic leading-relaxed">
                &ldquo;Every frame is a chance to tell a story. Let&apos;s make yours
                unforgettable.&rdquo;
              </p>
              <p className="text-[#D4A853] text-[11px] tracking-widest uppercase mt-3">
                — Ashwin Padwalkar
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            {submitted ? (
              <div className="h-full border border-[#D4A853]/25 bg-[#D4A853]/[0.03] p-12 flex flex-col items-center justify-center gap-5 text-center">
                <div className="w-12 h-12 border border-[#D4A853] flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#D4A853]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  className="text-2xl text-[#F0EDE8]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Message Sent!
                </h3>
                <p className="text-[#555] text-sm leading-relaxed">
                  Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', project: '', message: '' }); }}
                  className="mt-2 text-[#D4A853] text-[11px] tracking-widest uppercase hover:underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#444] text-[11px] tracking-[0.2em] uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={onChange('name')}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[#444] text-[11px] tracking-[0.2em] uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={onChange('email')}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#444] text-[11px] tracking-[0.2em] uppercase mb-2">
                    Project Type
                  </label>
                  <select
                    value={form.project}
                    onChange={onChange('project')}
                    className="form-input"
                  >
                    <option value="">Select a service...</option>
                    <option value="cinematography">Cinematography</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="motion-graphics">Motion Graphics</option>
                    <option value="reels">Reels Creation</option>
                    <option value="documentary">Documentary</option>
                    <option value="podcast">Podcast Production</option>
                    <option value="photography">Photography</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#444] text-[11px] tracking-[0.2em] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={onChange('message')}
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4A853] text-[#080808] py-4 text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#E8C07A] transition-colors duration-300"
                >
                  Send Message
                </button>

                <p className="text-[#3a3a3a] text-[11px] text-center pt-1">
                  Or email directly:{' '}
                  <a
                    href="mailto:ashwin.padwalkar.films@gmail.com"
                    className="text-[#D4A853]/70 hover:text-[#D4A853] transition-colors"
                  >
                    ashwin.padwalkar.films@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
