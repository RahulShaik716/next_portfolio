export default function SkillsCard({ skill }) {
  return (
    <div className="border border-slate-200 max-w-md px-4 py-4 rounded-lg flex flex-col gap-3">
      <h1 className="font-bold text-xl">{skill.title}</h1>
      <div className="flex flex-row gap-3 flex-wrap">
        {skill.skills.map((s) => (
          <div
            key={s}
            className="px-3 py-2 bg-slate-100 font-medium rounded-full"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
