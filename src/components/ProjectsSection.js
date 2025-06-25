import ProjectCard from "./ProjectCards";
import projects from "./projectData";
import ProjectLines from "./ProjectLines";

export default function ProjectsSection() {

  return (
    <section
      id="projects"
      className="h-auto sm:h-full w-full flex flex-col items-center snap-start relative  pt-15 sm:pt-20  pb-20 sm:pb-30 px-6 sm:px-15 md:px-20">
      <ProjectLines />
      <h2
        className="uppercase  text-4xl sm:text-5xl font-bold mb-8 sm:mb-10  text-white text-shadow-lg w-full pl-[1vw]  "
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Projects
      </h2>

      {/* Grid wrapper — centered horizontally */}
      <div className="w-[100%] max-w-6xl mx-auto  px-2 ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-7 sm:gap-10 justify-items-center">
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
