import ProjectCard from "@/components/ProjectCard";
import SkillsCard from "@/components/SkillsCard";
import WorkExperience from "@/components/WorkExperience";
import { Projects, Skills, Experiences } from "@/public/textbooks";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container max-w-7xl mx-auto">
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
            className="inline-flex items-center bg-black text-white px-6 py-2 rounded-md"
          >
            Get in touch
          </Link>
        </button>
      </section>
      <section id="workexperience" className="py-20">
        <h1 className="text-center text-2xl font-bold mb-2">Work Experience</h1>
        <div className="flex flex-col gap-y-6">
          {Experiences.map((exp, index) => (
            <WorkExperience key={index} exp={exp} index={index} />
          ))}
        </div>
      </section>
      <section id="projects" className="py-20">
        <h1 className="text-center text-2xl font-bold mb-2"> Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300,_1fr))] gap-10">
          {Projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section id="skills" className="py-20">
        <h1 className="text-center text-2xl font-bold mb-5"> Skills </h1>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
          {Skills.map((skill) => (
            <SkillsCard key={skill.title} skill={skill} />
          ))}
        </div>
      </section>
      <section id="testimonials" className="py-20">
        <div> Testimonials</div>
      </section>
      <section id="contact" className="py-20">
        <form className="flex flex-col gap-3 border border-slate-300 max-w-3xl mx-auto p-6 rounded-md">
          <h2 className="h2 font-bold text-2xl text-center"> Get in touch </h2>
          <p className="text-center text-slate-500">
            I'd love to hear from you! Send me a message and I'll get back to
            you as soon as possible
          </p>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              className="border border-slate-300 py-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              className="border border-slate-300 py-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="border border-slate-300 py-2 rounded-md"
            />
          </div>
          <input
            type="sumbit"
            className="text-center bg-black text-white py-2 rounded-md"
            value="Send Message"
          />
        </form>
      </section>
    </main>
  );
}
