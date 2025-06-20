import ProjectCard from "./ProjectCards";
import AboutLine from "./AboutLine";
import projects from "./projectData";

export default function ProjectsSection() {

  return (
    <section
      id="projects"
      className="h-full w-full flex flex-col items-center snap-start relative pt-20 pb-30 px-10 sm:px-15 md:px-20">
      <AboutLine />
      <h2
        className="uppercase text-5xl font-bold mb-10  text-white text-shadow-lg w-full pl-[1vw]"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Projects
      </h2>

      {/* Grid wrapper — centered horizontally */}
      <div className="w-[100%] max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
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
