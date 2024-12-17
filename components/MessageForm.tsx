export default function MessageForm() {
  return (
    <form
      className="flex flex-col gap-3 border border-slate-300 dark:border-slate-900 max-w-3xl mx-auto p-6 rounded-md
    bg-opacity-50 background-blur-md shadow-md text-foreground bg-background
    "
    >
      <h2 className="h2 font-bold text-2xl text-center"> Get in touch </h2>
      <p className="text-center text-slate-500 max-w-[500px]">
        {`I'd love to hear from you! Send me a message and I'll get back to
          you as soon as possible`}
      </p>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          className="border border-slate-300  py-2 rounded-md bg-inherit"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="border border-slate-300 py-2 rounded-md bg-inherit"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          className="border border-slate-300 py-2 rounded-md bg-inherit"
        />
      </div>
      <input
        type="sumbit"
        className="text-center bg-foreground text-background py-2 rounded-md"
        value="Send Message"
      />
    </form>
  );
}
