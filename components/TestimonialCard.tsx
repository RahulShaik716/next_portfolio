import Image from "next/image";
type props = {
  content: string;
  img_src: string;
  name: string;
  role: string;
};
export default async function TestimonialCard({
  testimonial,
}: {
  testimonial: props;
}) {
  return (
    <div className="border border-slate-200 dark:border-slate-800 max-w-md px-4 py-4 rounded-lg flex flex-col gap-3 ">
      <p className="italic tracking-wide leading-normal">
        {testimonial.content}
      </p>
      <div className="flex flex-row gap-x-2 items-center">
        {testimonial.img_src ? (
          <Image
            src={testimonial.img_src}
            width={48}
            height={48}
            alt="Testimonial_profile_picture"
            className="rounded-full object-fit w-16 h-16"
          />
        ) : (
          <div className="w-16 h-16 bg-slate-300 dark:bg-slate-900 rounded-full"></div>
        )}
        <div className="gap-y-1">
          <h3 className="font-bold h3"> {testimonial.name} </h3>
          <p className="text-slate-400 dark:text-slate-600">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
