"use client";

import { ChevronDown, ChevronUp } from "@geist-ui/icons";
import { useState } from "react";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

interface WorkExperienceProps {
  exp: Experience;
  index: number;
}

export default function WorkExperience({ exp, index }: WorkExperienceProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className="space-y-8 shadow-xl bg-opacity-50 background-blur-lg  p-2 rounded-md">
      <div key={index} className="relative overflow-hidden">
        <div className="absolute left-2 top-4 bottom-2 w-0.5 bg-foreground"></div>
        <div className="absolute left-2 top-1 w-3 h-3 rounded-full bg-foreground -translate-x-1/2"></div>
        <div className="ml-6">
          <div>
            <div className="font-bold text-xl">{exp.title}</div>
            <div className="font-semibold">
              {exp.company} | {exp.period}
            </div>
          </div>
          <div>
            <p className="text-slate-600">{exp.description}</p>
            {expandedIndex === index && (
              <ul className="list-disc list-inside mt-4 space-y-2">
                {exp.achievements.map((achievement: string, i: number) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            )}
            <button
              className="mt-4 bg-slate-200 px-4 py-2 rounded-lg flex flex-row items-center gap-x-2 text-foreground"
              onClick={() => toggleExpand(index)}
            >
              {expandedIndex === index ? (
                <>
                  Hide details
                  <ChevronUp />
                </>
              ) : (
                <>
                  Show details
                  <ChevronDown />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
