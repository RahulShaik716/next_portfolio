import Image from "next/image";

export default async function TestimonialCard({ testimonial }) {
  return (
    <div className="border border-slate-200 max-w-md px-4 py-4 rounded-lg flex flex-col gap-3">
      <p className="italic tracking-wide leading-normal">
        {testimonial.content}
      </p>
      <div className="flex flex-row gap-x-2">
        <Image
          src={testimonial.img_src}
          width={48}
          height={48}
          alt="Testimonial_profile_picture"
          className="rounded-full"
        />
        <div className="gap-y-1">
          <h3 className="font-bold h3"> {testimonial.name} </h3>
          <p className="text-slate-400 "> {testimonial.role} </p>
        </div>
      </div>
    </div>
  );
}
