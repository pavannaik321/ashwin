export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-[#D4A853]/40 flex items-center justify-center group-hover:border-[#D4A853] transition-colors duration-300">
              <span
                className="text-[#D4A853] font-bold text-[11px]"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                AP
              </span>
            </div>
            <span className="text-[#3a3a3a] text-[11px] tracking-[0.22em] uppercase">
              Ashwin Padwalkar
            </span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {['About', 'Work', 'Services', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#383838] hover:text-[#D4A853] text-[11px] tracking-[0.15em] uppercase transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[#2a2a2a] text-[11px] tracking-widest">© {year} Ashwin Padwalkar</p>
        </div>

        <div className="mt-8 pt-8 border-t border-[#111] text-center">
          <p className="text-[#222] text-[10px] tracking-[0.35em] uppercase">
            Cinematographer · Video Editor · Visual Storyteller
          </p>
        </div>
      </div>
    </footer>
  );
}
