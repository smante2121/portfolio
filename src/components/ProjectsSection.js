import ProjectCard from "./ProjectCards"; // adjust path if needed

export default function ProjectsSection() {
    const tiles = [
      "EZ Spine",
      "AGN DB",
      "Predicting Anime Success",
      "CNN and MLP",
      "Patient Answering System",
      "Dexcom Glucose Tracking",
      "Libre Glucose Tracking",
      "STT > Gemini > TTS",
      "Master Mind"
    ];
  
    return (
      <section
        id="projects"
        className="min-h-screen w-full text-white flex flex-col items-center snap-start justify-center px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-10 tracking-wider">Projects</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[70%]">
          {tiles.map((title, index) => (
            <ProjectCard key={index} title={title} />
          ))}
        </div>
      </section>
    );
  }
  