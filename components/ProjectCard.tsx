import Image from "next/image";
type props = {
  img_src: string;
  title: string;
  technologies: string[];
  description: string;
};
export default function ProjectCard({ project }: { project: props }) {
  return (
    <div className="flex flex-col max-w-2xl  border border-slate-200 dark:border-slate-800 rounded-lg">
      <Image
        src={project.img_src}
        alt="project_image"
        width={400}
        height={200}
        className="object-cover h-48 w-full"
        unoptimized
      />
      <div className="flex flex-col p-4 gap-4">
        <div>
          <h2 className="font-bold text-xl"> {project.title} </h2>
          <p className="text-slate-400">{project.technologies.join(" ,")}</p>
        </div>
        <p className="mt-2 max-h-24 overflow-clip">{project.description}</p>
        <button className="p-2 border border-slate-200 dark:border-slate-800 text-left w-fit rounded-lg">
          <p>Learn More</p>
        </button>
      </div>
    </div>
  );
}
