"use client";
export default function Navbar({ show }) {
  if (!show) return null;

  return (
    <nav className="sticky top-0 z-50 bg-slate-800 text-white h-14 flex justify-end items-stretch shadow-md">
      <a href="#about" className=" border border-white bg-sky-950 hover:bg-sky-900 px-6 flex items-center transition-colors uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>
        About
      </a>
      <a href="#projects" className=" border border-white bg-sky-950 hover:bg-sky-900 px-6 flex items-center transition-colors uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>
        Projects
      </a>
    </nav>
  );
}
