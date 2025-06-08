import DecorativeLines from "./DecorativeLines";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="snap-start h-screen flex items-center justify-start relative">
      <DecorativeLines />
      <div className="ps-30 pt-10">
        <h1
          className="text-5xl text-white mb-4 uppercase"
          style={{ fontFamily: 'Playfair Display, serif' }}>
          Sophia Mantegari
        </h1>
        <p
          className="text-xl text-slate-200 w-[55%] mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}>
          Student at the University of Miami double majoring in Computer Science (B.S.) and Data Science & AI (B.S.) minoring in math.
        </p>

        <div className="flex gap-4">
          <a
            href="#about"
            className="border border-white hover:bg-sky-900 text-white font-medium px-12 py-2 shadow-2xl shadow-slate-900"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            About Me
          </a>
          <a
            href="#projects"
            className="border border-white hover:bg-sky-900 text-white font-medium px-12 py-2 shadow-2xl shadow-slate-900"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Projects
          </a>
        </div>
      </div>
    </section>
  );
}
