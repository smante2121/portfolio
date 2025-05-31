import ProjectCard from "./ProjectCards";

export default function ProjectsSection() {
  const projectTitles = [
    "Project One", "Project Two", "Project Three",
    "Project Four", "Project Five", "Project Six",
    "Project Seven", "Project Eight", "Project Nine"
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center py-20"
    >
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[70%] max-w-6xl">
        {projectTitles.map((title, index) => (
          <ProjectCard key={index} title={title} />
        ))}
      </div>
    </section>
  );
}
