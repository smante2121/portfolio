/*export default function HeroSection() {
    return (
      <div className="relative flex flex-col items-left justify-center min-h-screen overflow-hidden">
        <div className="z-10 text-center p-6">
          <h1 className="text-5xl text-white" style={{ fontFamily: 'Lora, serif' }}>
            Sophia Mantegari
          </h1>
          <p className="text-xl mt-4 text-emerald-50 mx-auto text-center w-[60%]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Student at the University of Miami double majoring in Computer Science (B.S.) and Data Science & AI (B.S.) minoring in math.
          </p>
          <div className="flex gap-4 mt-8 justify-center">
            <a href="#about" className="bg-sky-950 hover:bg-sky-900 text-white font-medium px-6 py-2 rounded">About Me</a>
            <a href="#projects" className="bg-sky-950 hover:bg-sky-900 text-white font-medium px-6 py-2 rounded">Projects</a>
          </div>
        </div>
      </div>
    );
  }
*/

export default function HeroSection() {
    return (
      <div id="home" className="relative flex h-screen snap-start items-center overflow-hidden justify-start pb-20 ps-20">
        <div className="p-6 sm:p-10 text-left">
          <h1 className="text-5xl text-white mb-4 pt-30 uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>
            Sophia Mantegari
          </h1>
          <p className="text-xl  text-emerald-50  w-[55%] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Student at the University of Miami double majoring in Computer Science (B.S.) and Data Science & AI (B.S.) minoring in math.
          </p>
          <div className="flex gap-4 ">
            <a href="#about" className=" border border-white  hover:bg-sky-900 text-white font-medium px-12 py-2 rounded" style={{ fontFamily: 'Playfair Display, serif' }}>About Me</a>
            <a href="#projects" className= " border border-white  hover:bg-sky-900 text-white font-medium px-12 py-2" style={{ fontFamily: 'Playfair Display, serif' }}>Projects</a>
          </div>
        </div>
        <div className="absolute top-10 right-5 w-[1px] h-[110px] bg-white translate-y-[0px]"></div>
        <div className="absolute top-10 right-5 h-[1px] w-[65vw] bg-white translate-x-[vw]"></div>
        <div className="absolute bottom-10 left-5 w-[1px] h-[110px] bg-white translate-y-[-0px]"></div>
        <div className="absolute bottom-10 left-5 h-[1px] w-[65vw] bg-white"></div>
      </div>
    );
  }