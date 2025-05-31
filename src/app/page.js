import StarBackground from "@/components/StarBackground";

//Glassmorphism / Frosted Blur Cards for projects
export default function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
        <StarBackground />
        <div className="z-10 text-center p-6">
          <h1 className="text-5xl text-sky-200" style={{ fontFamily: 'Lora, serif' }}>
            Sophia Mantegari
          </h1>
          <p className="text-xl mt-4 text-slate-400 mx-auto text-center w-[60%]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Student at the University of Miami double majoring in Computer Science (B.S.) and Data Science & AI (B.S.) minoring in math.
          </p>
          <div className="flex gap-4 mt-8 justify-center">
            <a href="#about"
              className="bg-sky-600 hover:bg-sky-500 text-white font-medium px-6 py-2 rounded">
              About Me
            </a>
            <a href="#projects"
              className="border border-sky-500 hover:bg-sky-200 text-sky-500 font-medium px-6 py-2 rounded">
              Projects
            </a>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section
        id="about"
        className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-xl text-center text-lg text-slate-400 px-4">
          This is a placeholder for the About Me section.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="max-w-xl text-center text-lg text-slate-400 px-4">
          This is a placeholder for the Projects section.
        </p>
      </section>
    </>
  );
}
