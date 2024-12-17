import { ObjectId } from "mongodb";
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
  _id: ObjectId;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};
export type Lead = {
  name: string;
  email: string;
  message: string;
};
