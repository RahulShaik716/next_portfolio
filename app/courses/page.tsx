import T_card from "@/components/TextBookCard";
import { Textbooks } from "@/public/textbooks";

export default function Page() {
  const data = Textbooks;
  return (
    <section id="courses" className="container max-w-7xl mx-auto py-20">
      {/* tabs for masters,bachelors and javascript */}
      <div className="flex flex-row items-center justify-center gap-6 mt-2 border-b">
        <div className="hover:border-b border-slate-400 cursor-pointer p-2">
          {`Bachelor's`}
        </div>
        <div className="hover:border-b border-slate-400 p-2">{`Master's`}</div>
        <div className="hover:border-b border-slate-400 p-2">Javascript</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10">
        {data.map((i) => (
          <T_card key={i.name} textbook={i} />
        ))}
      </div>
    </section>
  );
}
