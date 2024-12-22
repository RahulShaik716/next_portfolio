import MessageForm from "@/components/MessageForm";
import ProjectCard from "@/components/ProjectCard";
import SkillsCard from "@/components/SkillsCard";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialForm from "@/components/TestimonialForm";
import WorkExperience from "@/components/WorkExperience";
import { ArrowRight } from "@geist-ui/icons";
import Link from "next/link";
import { Experience, Skill, Testimonial } from "@/types/experience_schema";
import { Project } from "@/types/project_schema";
import Image from "next/image";
export const dynamic = "force-dynamic";
export default async function Home() {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${baseURL}/api/Projects`);
  const { projects } = await response.json();

  const testmonial_response = await fetch(`${baseURL}/api/Testimonials`);
  const { testimonials } = await testmonial_response.json();

  const experiences_response = await fetch(`${baseURL}/api/Experiences`);
  const { experiences } = await experiences_response.json();

  const skills_response = await fetch(`${baseURL}/api/Skills`);
  const { skills } = await skills_response.json();

  return (
    <main className="mx-auto px-4 md:px-0 bg-gradient-to-r from-slate-50 to-white">
      <section
      // className="bg-contain bg-center bg-no-repeat"
      // style={{
      //   backgroundImage: "url('/hero_modified-1.png')",
      // }}
      >
        <div
          id="hero"
          className="py-20 h-screen container max-w-7xl text-center flex flex-col justify-center mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">Rahul Shaik</h1>
          <p className="text-xl mb-8 animate-fade-in animation-delay-200 font-semibold">
            Full Stack Developer
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto animiate-fade-in animation-delay-400 font-semibold">
            Crafting seamless digital experiences, one line of code at a time.
          </p>
          <button className="animate-fade-in animation-delay-500">
            <Link
              href="#contact"
              className="inline-flex items-center bg-foreground text-background px-6 py-2 rounded-md"
            >
              Get in touch &nbsp; <ArrowRight />
            </Link>
          </button>
          <div className="self-center flex flex-col lg:flex-row mt-6 justify-center items-center gap-x-2">
            <Image
              src="/hero.jpg"
              alt="display picture"
              width={40}
              height={40}
              className="rounded-full w-32 h-32"
              unoptimized
            />
            <p className="leading-relaxed text-pretty max-w-[66ch]">
              {`11 years of computer science experience. About 8 years of software engineering experience. Trying to make my mark in the field of computer science and software engineering, interested in Full Stack Development and Artifical Intelligence. `}
            </p>
          </div>
        </div>
      </section>

      <section id="workexperience" className="py-20">
        <div className="container max-w-7xl mx-auto">
          <h1 className="text-center text-2xl font-bold mb-2">
            Work Experience
          </h1>
          <div className="flex flex-col gap-y-6">
            {experiences.map((exp: Experience, index: number) => (
              <WorkExperience key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="py-20">
        <div className="container max-w-7xl mx-auto">
          <h1 className="text-center text-2xl font-bold mb-2"> Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
            {projects.map((project: Project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="py-20">
        <div className="container max-w-7xl mx-auto">
          <h1 className="text-center text-2xl font-bold mb-5"> Skills </h1>
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
            {skills.map((skill: Skill) => (
              <SkillsCard key={skill.title} skill={skill} />
            ))}
          </div>
        </div>
      </section>
      {testimonials.length != 0 && (
        <section id="testimonials" className="py-20">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center text-2xl font-bold mb-5">
              Testimonials
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
              {testimonials.map((testimonial: Testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      <section id="contact" className="py-20">
        <div className="container max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-center mb-5">
            Contact & Testimonials
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(500px,_1fr))] gap-10">
            <MessageForm />
            <TestimonialForm />
          </div>
        </div>
      </section>
    </main>
  );
}
