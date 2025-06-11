import ProjectCard from "./ProjectCards";
import AboutLine from "./AboutLine";
import projects from "./projectData";

export default function ProjectsSection() {

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center snap-start relative  pt-20 pb-30"
    >
      <AboutLine />

      <h2
        className="uppercase text-5xl font-bold mb-10 self-start ps-20 text-white text-shadow-lg"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Projects
      </h2>

      {/* Grid wrapper — centered horizontally */}
      <div className="w-[80%] max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              <ProjectCard
                title={project.title}
                about={project.about}
                motivation={project.motivation}
                languages={project.languages}
                libraries={project.libraries}
                skills={project.skills}
                type={project.type}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
