import { getAllProjects } from "@/db/db";
import { Project } from "@/types/project_schema";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectsSection() {
  const projects = (await getAllProjects()) ?? [];

  return (
    <div className="container max-w-7xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-2"> Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
