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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/96 backdrop-blur-sm border-b border-[#1f1f1f]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-5">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-9 h-9 border border-[#D4A853] flex items-center justify-center group-hover:bg-[#D4A853] transition-all duration-300">
            <span
              className="text-[#D4A853] group-hover:text-[#080808] font-bold text-xs tracking-widest transition-colors duration-300"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              AP
            </span>
          </div>
          <span className="hidden sm:block text-[#F0EDE8]/70 text-[11px] tracking-[0.25em] uppercase font-light">
            Ashwin Padwalkar
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#666] hover:text-[#D4A853] text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:ashwin.padwalkar.films@gmail.com"
          className="hidden md:inline-flex border border-[#D4A853] text-[#D4A853] px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase hover:bg-[#D4A853] hover:text-[#080808] transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-[#D4A853] origin-center transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[#D4A853] transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[#D4A853] origin-center transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#090909] border-t border-[#1f1f1f] px-6 pb-6 pt-4 flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-[#1a1a1a] text-[#666] hover:text-[#D4A853] text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:ashwin.padwalkar.films@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="mt-5 border border-[#D4A853] text-[#D4A853] py-3 text-[11px] tracking-widest uppercase text-center hover:bg-[#D4A853] hover:text-[#080808] transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
