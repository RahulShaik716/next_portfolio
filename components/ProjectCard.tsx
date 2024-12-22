"use client";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
type props = {
  img_src: string;
  title: string;
  technologies: string[];
  description: string;
  github_url: string;
  website_url: string;
};
export default function ProjectCard({ project }: { project: props }) {
  const [modal, showModal] = useState(false);
  return (
    <div className="flex flex-col max-w-2xl bg-opacity-50 background-blur-xl shadow-2xl rounded-lg">
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
        <button className="p-2 border border-slate-200  text-left w-fit rounded-lg bg-black text-white hover:bg-white hover:text-black  ">
          <p onClick={() => showModal(() => !modal)} className="text-sm">
            Learn More
          </p>
        </button>
      </div>
      {modal && <ProjectModal project={project} showModal={showModal} />}
    </div>
  );
}
