"use client";
export default function Navbar({ show }) {
  if (!show) return null;

  return (
    <nav className="sticky top-0 z-50 bg-sky-950 text-white h-16 flex justify-end items-stretch shadow-md">
      <a href="#about" className="bg-sky-950 hover:bg-sky-900 px-6 flex items-center transition-colors">
        About
      </a>
      <a href="#projects" className="bg-sky-950 hover:bg-sky-900 px-6 flex items-center transition-colors">
        Projects
      </a>
    </nav>
  );
}
