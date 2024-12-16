export default function TestimonialForm() {
  return (
    <form
      className="flex flex-col gap-3 border border-slate-300 dark:border-slate-900 max-w-3xl mx-auto p-6 rounded-md
      bg-opacity-50 background-blur-md shadow-md
    "
    >
      <h2 className="h2 font-bold text-2xl text-center">Leave a testimonial</h2>
      <p className="text-center text-slate-500 max-w-[500px]">
        {`Your feedback is greatly appreciated. Share your experience working with me!`}
      </p>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          className="border border-slate-300 dark:border-slate-900 py-2 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Role</label>
        <input
          name="email"
          className="border border-slate-300 dark:border-slate-900 py-2 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Company</label>
        <input
          name="message"
          className="border border-slate-300 dark:border-slate-800 py-2 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Testimonial</label>
        <textarea
          name="testimonial"
          placeholder="Share your experience working with me..."
          className="border border-slate-300 dark:border-slate-800 py-2 rounded-md"
        />
      </div>
      <input
        type="sumbit"
        className="text-center bg-foreground text-background py-2 rounded-md"
        value="Submit Testimonial"
      />
    </form>
  );
}
