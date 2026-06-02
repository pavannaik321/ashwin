export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#09090b] border-t-2 border-white select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo matching Navbar */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 border-2 border-white flex items-center justify-center bg-black overflow-hidden group-hover:border-[#ff1e27] transition-colors duration-300">
              <div className="absolute inset-0.5 border border-dashed border-[#ff1e27]/20 rounded-full group-hover:animate-[spin-slow_4s_linear_infinite]" />
              <span
                className="text-[#ff1e27] font-black text-xs tracking-wider z-10 transition-colors duration-300 group-hover:text-white"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                AP
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white text-[10px] font-black tracking-widest uppercase leading-none">
                Ashwin Padwalkar
              </span>
              <span className="text-zinc-600 text-[8px] tracking-wider uppercase font-medium leading-none mt-1">
                Visual Storyteller
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {['About', 'Work', 'Services', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-zinc-400 hover:text-[#ff1e27] font-mono text-[10px] tracking-widest uppercase transition-colors duration-200"
              >
                [{link}]
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-zinc-600 font-mono text-[9px] tracking-widest">
            © {year} ASHWIN PADWALKAR. ALL FRAMES RESERVED.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-zinc-700 font-mono text-[8px] tracking-[0.35em] uppercase">
            DIRECTOR · CINEMATOGRAPHER · VIDEO EDITOR · VISUAL STORYTELLER
          </p>
        </div>
      </div>
    </footer>
  );
}
