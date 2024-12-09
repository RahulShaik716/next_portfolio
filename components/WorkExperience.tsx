"use client";

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
    <div className="space-y-8 border border-slate-300 p-2 rounded-md">
      <div key={index} className="relative overflow-hidden">
        <div className="absolute left-2 top-4 bottom-2 w-0.5 bg-black"></div>
        <div className="absolute left-2 top-1 w-3 h-3 rounded-full bg-black -translate-x-1/2"></div>
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
              className="mt-4 bg-slate-200 px-4 py-2 rounded-lg flex flex-row items-center gap-x-2"
              onClick={() => toggleExpand(index)}
            >
              {expandedIndex === index ? (
                <>
                  Hide details
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.93933 9.24999L4.46966 8.71966L7.29288 5.89644C7.68341 5.50592 8.31657 5.50592 8.7071 5.89644L11.5303 8.71966L12.0607 9.24999L11 10.3107L10.4697 9.78032L7.99999 7.31065L5.53032 9.78032L4.99999 10.3107L3.93933 9.24999Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </>
              ) : (
                <>
                  Show details
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
