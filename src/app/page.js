import StarBackground from "@/components/StarBackground";

export default function Home() {
  return (
    //<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-black p-6">
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
      <StarBackground />
      <div className="z-10 text-center p-6">
        <h1 className="text-5xl font-extrabold text-sky-200">Sophia Mantegari</h1>
        <p className="text-xl mt-4 text-slate-400">
          Student at the University of Miami double majoring in Computer Science (B.S.) and Data Science & AI (B.S.) minoring in math.</p>

        <div className="flex gap-4 mt-8 justify-center">
          <a
            href="/about"
            className="bg-sky-600 hover:bg-sky-500 text-white font-medium px-6 py-2 rounded"
          >
            About Me
          </a>
          <a
            href="/projects"
            className="border border-sky-500 hover:bg-sky-200 text-sky-500 font-medium px-6 py-2 rounded"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}
