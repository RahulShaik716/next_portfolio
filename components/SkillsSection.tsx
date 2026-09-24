import { getAllSkills } from "@/db/db";
import { Skill } from "@/types/experience_schema";
import SkillsCard from "@/components/SkillsCard";

export default async function SkillsSection() {
  const skills = (await getAllSkills()) ?? [];

  return (
    <div className="container max-w-7xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-5"> Skills </h1>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
        {skills.map((skill: Skill) => (
          <SkillsCard key={skill.title} skill={skill} />
        ))}
      </div>
    </div>
  );
}
