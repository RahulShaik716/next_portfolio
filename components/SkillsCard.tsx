type Props = {
  title: string;
  skills: string[];
};

export default function SkillsCard({ skill }: { skill: Props }) {
  return (
    <div className="border border-slate-200 dark:border-slate-800 max-w-md px-4 py-4 rounded-lg flex flex-col gap-3">
      <h1 className="font-bold text-xl">{skill.title}</h1>
      <div className="flex flex-row gap-3 flex-wrap">
        {skill.skills.map((s) => (
          <div
            key={s}
            className="px-3 py-2 bg-slate-100 dark:bg-slate-900 font-medium rounded-full"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
