import { getAllExperiences } from "@/db/db";
import { Experience } from "@/types/experience_schema";
import WorkExperience from "@/components/WorkExperience";

export default async function WorkExperienceSection() {
  const experiences = (await getAllExperiences()) ?? [];

  return (
    <div className="container max-w-7xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-2">Work Experience</h1>
      <div className="flex flex-col gap-y-6">
        {experiences.map((exp: Experience, index: number) => (
          <WorkExperience key={index} exp={exp} index={index} />
        ))}
      </div>
    </div>
  );
}
