import ProjectCard from "./ProjectCards";
import AboutLine from "./AboutLine";

export default function ProjectsSection() {
  const tiles = [
    "EZ Spine",
    "AGN DB",
    "Predicting Anime Success",
    "CNN and MLP",
    "Patient Answering System",
    "Dexcom Glucose Tracking",
    "Libre Glucose Tracking",
    "STT > Gemini > TTS"

  ];

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center snap-start relative  pt-20 pb-20"
    >
      <AboutLine />

      <h2
        className="uppercase text-5xl font-bold mb-10 self-start ps-20"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Projects
      </h2>

      {/* Grid wrapper — centered horizontally */}
      <div className="w-[80%] max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          {tiles.map((title, index) => (
            <div key={index} className="w-full">
              <ProjectCard title={title} />
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}
