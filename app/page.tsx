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
    <main className="container max-w-7xl mx-auto px-4 md:px-0">
      <section
        id="hero"
        className="py-20 h-screen text-center flex flex-col justify-center"
      >
        <h1 className="text-4xl font-bold mb-4">Rahul Shaik</h1>
        <p className="text-xl mb-8 animate-fade-in animation-delay-200">
          Full Stack Developer
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto animiate-fade-in animation-delay-400">
          Designing scalable,robust Web and Mobile Applications
        </p>
        <button className="animate-fade-in animation-delay-500">
          <Link
            href="#contact"
            className="inline-flex items-center bg-foreground text-background px-6 py-2 rounded-md"
          >
            Get in touch &nbsp; <ArrowRight />
          </Link>
        </button>
      </section>
      <section id="workexperience" className="py-20">
        <h1 className="text-center text-2xl font-bold mb-2">Work Experience</h1>
        <div className="flex flex-col gap-y-6">
          {experiences.map((exp: Experience, index: number) => (
            <WorkExperience key={index} exp={exp} index={index} />
          ))}
        </div>
      </section>
      <section id="projects" className="py-20">
        <h1 className="text-center text-2xl font-bold mb-2"> Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
          {projects.map((project: Project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section id="skills" className="py-20">
        <h1 className="text-center text-2xl font-bold mb-5"> Skills </h1>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
          {skills.map((skill: Skill) => (
            <SkillsCard key={skill.title} skill={skill} />
          ))}
        </div>
      </section>
      {testimonials.length && (
        <section id="testimonials" className="py-20">
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
        </section>
      )}
      <section id="contact" className="py-20">
        <div className="text-2xl font-bold text-center mb-5">
          Contact & Testimonials
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(500px,_1fr))] gap-10">
          <MessageForm />
          <TestimonialForm />
        </div>
      </section>
    </main>
  );
}
