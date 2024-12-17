import MessageForm from "@/components/MessageForm";
import ProjectCard from "@/components/ProjectCard";
import SkillsCard from "@/components/SkillsCard";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialForm from "@/components/TestimonialForm";
import WorkExperience from "@/components/WorkExperience";
import { getAllExperiences, getAllSkills } from "@/db/db";
import { ArrowRight } from "@geist-ui/icons";
import Link from "next/link";

export default async function Home() {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${baseURL}/api/Projects`);
  const { projects } = await response.json();

  const testmonial_response = await fetch(`${baseURL}/api/Testimonials`);
  const { testimonials } = await testmonial_response.json();
  let experiences = [];
  let skills = [];

  try {
    // Fetch projects data from the database
    experiences = await getAllExperiences();
    skills = await getAllSkills();
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <main className="container max-w-7xl mx-auto px-4 md:px-0 bg-opacity-50 background-blur-md shadow-md">
      <section id="hero" className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">Rahul Shaik</h1>
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
          {experiences.map((exp, index) => (
            <WorkExperience key={index} exp={exp} index={index} />
          ))}
        </div>
      </section>
      <section id="projects" className="py-20">
        <h1 className="text-center text-2xl font-bold mb-2"> Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section id="skills" className="py-20">
        <h1 className="text-center text-2xl font-bold mb-5"> Skills </h1>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
          {skills.map((skill) => (
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
            {testimonials.map((testimonial) => (
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
