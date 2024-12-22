import { X } from "@geist-ui/icons";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type props = {
  img_src: string;
  title: string;
  technologies: string[];
  description: string;
  github_url: string;
  website_url: string;
};
export default function ProjectModal({
  project,
  showModal,
}: {
  project: props;
  showModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg text-wrap h-fit overflow-y-auto">
        <button
          className="absolute top-4 right-4  p-2 hover:bg-slate-300 focus:outline-none"
          onClick={() => showModal(false)}
          aria-label="Close modal"
        >
          <X />
        </button>
        <div className="overflow-y-auto mt-6 md:mt-0  px-6 py-4">
          <h1 id="modal-title" className="text-2xl font-bold text-center mb-4">
            {project.title}
          </h1>
          <p className="text-center text-slate-400 font-semibold mb-6">
            {project.technologies.join(", ")}
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src={project.img_src}
              alt="Project image"
              width={400}
              height={400}
              className="object-contain h-48 w-full"
              unoptimized
            />
          </div>
          <div className="max-w-[66ch] mx-auto text-justify leading-relaxed mb-6">
            {project.description}
          </div>
          <div className="flex justify-evenly">
            <a
              href={project.website_url}
              className={`px-4 py-2 ${
                project.website_url
                  ? "bg-black text-white rounded-lg hover:bg-white hover:text-black cursor-pointer"
                  : "cursor-not-allowed"
              } `}
            >
              {project.website_url ? "Project Link" : "Private App"}
            </a>
            <a
              href={project.github_url}
              className={`px-4 py-2 ${
                project.github_url
                  ? "bg-black text-white rounded-lg hover:bg-white hover:text-black cursor-pointer"
                  : "cursor-not-allowed"
              } `}
            >
              {project.github_url ? "Github Link" : "Private Repo"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
