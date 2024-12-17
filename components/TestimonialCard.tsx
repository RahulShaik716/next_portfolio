type props = {
  content: string;
  name: string;
  role: string;
  company: string;
};
export default async function TestimonialCard({
  testimonial,
}: {
  testimonial: props;
}) {
  return (
    <div className="border border-slate-200 dark:border-slate-800 max-w-md px-4 py-4 rounded-lg flex flex-col gap-3 ">
      <p className="italic tracking-wide leading-normal">
        {`"${testimonial.content}"`}
      </p>
      <div className="flex flex-row gap-x-2 items-center">
        <div className="gap-y-1">
          <h3 className="font-bold h3"> {testimonial.name} </h3>
          <p className="text-slate-400 dark:text-slate-600">
            {`${testimonial.role}, ${testimonial.company}`}
          </p>
        </div>
      </div>
    </div>
  );
}
