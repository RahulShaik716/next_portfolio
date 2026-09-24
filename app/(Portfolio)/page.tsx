import MessageForm from "@/components/MessageForm";
import TestimonialForm from "@/components/TestimonialForm";
import Hero from "@/components/Hero";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

function SectionSkeleton() {
  return (
    <div className="container max-w-7xl mx-auto animate-pulse">
      <div className="h-8 w-48 bg-slate-200 rounded mx-auto mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
        <div className="h-40 bg-slate-100 rounded-lg" />
        <div className="h-40 bg-slate-100 rounded-lg" />
        <div className="h-40 bg-slate-100 rounded-lg" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto px-4 md:px-0 bg-gradient-to-r from-slate-50 to-white">
      <section>
        <Suspense fallback={<div id="hero" className="h-screen" />}>
          <Hero />
        </Suspense>
      </section>

      <section id="workexperience" className="py-20">
        <Suspense fallback={<SectionSkeleton />}>
          <WorkExperienceSection />
        </Suspense>
      </section>
      <section id="projects" className="py-20">
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsSection />
        </Suspense>
      </section>
      <section id="skills" className="py-20">
        <Suspense fallback={<SectionSkeleton />}>
          <SkillsSection />
        </Suspense>
      </section>
      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>
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
