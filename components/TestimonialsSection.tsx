import { getTestimonials } from "@/db/db";
import { Testimonial } from "@/types/experience_schema";
import TestimonialCard from "@/components/TestimonialCard";

export default async function TestimonialsSection() {
  const testimonials = (await getTestimonials()) ?? [];

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center text-2xl font-bold mb-5">
          Testimonials
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
          {testimonials.map((testimonial: Testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
