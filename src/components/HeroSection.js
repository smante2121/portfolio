import DecorativeLines from "./DecorativeLines";



export default function HeroSection() {
  return (
    <section
      id="home"
      className="snap-start h-screen flex items-center justify-start relative">
      <DecorativeLines />
      <div className="ps-30 pt-10">
        <h1
          className="text-5xl text-white mb-4 uppercase text-shadow-lg"
          style={{ fontFamily: 'Playfair Display, serif' }}>
          Sophia Mantegari
        </h1>
        <p
          className="text-xl text-slate-200 w-[55%] mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}>
          Student at the University of Miami double majoring in Computer Science (B.S.) and Data Science & AI (B.S.) minoring in math.
        </p>

        <div className="flex gap-4 drop-shadow- drop-shadow-slate-900">
          <a href="#about"  >
            <button href="#projects" className="relative inline-block font-medium group py-2 px-10 cursor-pointer ">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1.5 translate-y-1.5 bg-[#345167] group-hover:-translate-x-0 group-hover:-translate-y-0 shadow-xl shadow-slate-900"></span>
              <span className="absolute  inset-0 w-full h-full bg-[#0b263e] border border-white group-hover:bg-sky-900"></span>
              <span className="relative text-white text-lg" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
                About Me
              </span> 
            </button>  
          </a>
          <a href="#projects" >
            <button href="#projects" className="relative inline-block font-medium group py-2 px-10 cursor-pointer ">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1.5 translate-y-1.5 bg-[#345167] group-hover:-translate-x-0 group-hover:-translate-y-0 shadow-xl shadow-slate-900"></span>
              <span className="absolute  inset-0 w-full h-full bg-[#0b263e] border border-white group-hover:bg-sky-900"></span>
              <span className="relative text-white text-lg" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
                Projects</span> 
            </button>  
          </a>
        </div>
      </div>
    </section>
  );
}
