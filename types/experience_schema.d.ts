export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};
export type Skill = {
  title: string;
  skills: string[];
};
export type Testimonial = {
  content: string;
  name: string;
  role: string;
  company: string;
};
export type DBExperience = {
  _id: object;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};
