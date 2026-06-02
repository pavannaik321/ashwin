'use client';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Showreel', href: '#showreel' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [timecode, setTimecode] = useState('00:00:00:00');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Timecode simulation: 24 frames per second
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let frames = 0;

    const interval = setInterval(() => {
      frames++;
      if (frames >= 24) {
        frames = 0;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
              hours = 0;
            }
          }
        }
      }

      const pad = (num) => String(num).padStart(2, '0');
      setTimecode(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`);
    }, 41.67); // 1000ms / 24fps = 41.67ms

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b-2 border-white'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-4">
        {/* Logo (Spinning camera reticle) */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 border-2 border-white flex items-center justify-center bg-black overflow-hidden transition-all duration-300 group-hover:border-[#ff1e27]">
            {/* Spinning reticle crosshair */}
            <div className="absolute inset-0.5 border border-dashed border-[#ff1e27]/40 rounded-full group-hover:animate-[spin-slow_4s_linear_infinite]" />
            <span
              className="text-[#ff1e27] font-black text-sm tracking-wider z-10 transition-colors duration-300 group-hover:text-white"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              AP
            </span>
            {/* Retro brackets around logo */}
            <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-[#ff1e27]" />
            <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-[#ff1e27]" />
            <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b border-l border-[#ff1e27]" />
            <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-[#ff1e27]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xs font-black tracking-widest uppercase leading-none group-hover:text-[#ff1e27] transition-colors">
              Ashwin Padwalkar
            </span>
            <span className="text-[#a1a1aa] text-[9px] tracking-wider uppercase font-medium leading-none mt-1">
              Films &amp; Visuals
            </span>
          </div>
        </a>

        {/* Live Cam Indicator (REC ● 00:00:00:00) */}
        <div className="hidden lg:flex items-center gap-3 px-3 py-1 bg-black border border-white/10 rounded-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff1e27] rec-dot" />
          <span className="text-[#ff1e27] text-[10px] font-mono tracking-widest font-black">
            REC
          </span>
          <span className="text-white text-[10px] font-mono tracking-wider font-semibold">
            {timecode}
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-white hover:text-[#ff1e27] text-xs font-bold tracking-widest uppercase transition-colors duration-200 py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff1e27] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Playful Neo-Brutalist CTA */}
        <a
          href="mailto:ashwin.padwalkar.films@gmail.com"
          className="hidden md:inline-block neo-btn px-5 py-2 text-xs font-bold tracking-widest uppercase"
        >
          HIRE ME
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-white origin-center transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[7px] bg-[#ff1e27]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white origin-center transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px] bg-[#ff1e27]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#09090b] border-t-2 border-white px-6 pb-8 pt-4 flex flex-col gap-4">
          <div className="flex items-center gap-3 py-2 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff1e27] rec-dot" />
            <span className="text-[#ff1e27] text-xs font-mono tracking-widest font-black">
              REC
            </span>
            <span className="text-white text-xs font-mono tracking-wider font-semibold">
              {timecode}
            </span>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-white hover:text-[#ff1e27] text-sm font-bold tracking-widest uppercase border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:ashwin.padwalkar.films@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="mt-4 neo-btn py-3 text-center text-xs font-bold tracking-widest uppercase"
          >
            HIRE ME
          </a>
        </div>
      </div>
    </nav>
  );
}
