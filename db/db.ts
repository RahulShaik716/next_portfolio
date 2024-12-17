import mongoose from "mongoose";
import Projects from "./models/Projects";
declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-var
  var mongoose: any; // This must be a `var` and not a `let / const`
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI!;
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;

export const getAllProjects = async () => {
  const conn = await dbConnect(); // Ensure the database connection is established
  const db = conn.connection.useDb("Portfolio");
  try {
    // Use the Mongoose model to query the projects collection
    const projects = await db.collection("Projects").find({}).toArray();
    return projects;
  } catch (error) {
    console.error("Error retrieving projects:", error);
    throw error;
  }
};
export const getAllExperiences = async () => {
  const conn = await dbConnect();
  const db = conn.connection.useDb("Portfolio");
  try {
    const experiences = await db.collection("Experiences").find({}).toArray();
    const plainExperiences = experiences.map((experience) => {
      return {
        // Convert MongoDB _id to a string
        title: experience.title,
        company: experience.company,
        period: experience.period,
        description: experience.description,
        achievements: experience.achievements,
      };
    });

    return plainExperiences;
  } catch (error) {
    console.log("error retrieving experiences", error);
  }
};
export const getAllSkills = async () => {
  const conn = await dbConnect();
  const db = conn.connection.useDb("Portfolio");
  try {
    const skills = await db.collection("Skills").find({}).toArray();
    return skills;
  } catch (error) {
    console.log("error fetching skills", error);
  }
};

export const getTestimonials = async () => {
  const conn = await dbConnect();
  const db = conn.connection.useDb("Portfolio");
  try {
    const testimonials = await db.collection("Testimonials").find({}).toArray();
    return testimonials;
  } catch (error) {
    console.log("error fetching testimonials", error);
  }
};

export const insertTestimonial = async (testimonial) => {
  const conn = await dbConnect();
  const db = conn.connection.useDb("Portfolio");
  try {
    await db.collection("Testimonials").insertOne(testimonial);
    console.log("Inserted successfully");
    return true;
  } catch (error) {
    console.error("Error inserting testimonial:", error);
    return false;
  }
};
