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
        className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-10 tracking-wider">Projects</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[70%]">
          {tiles.map((title, index) => (
            <div
              key={index}
              className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex items-center justify-center text-center p-4"
            >
              <h3 className="text-2xl font-semibold uppercase leading-snug tracking-wide">{title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  