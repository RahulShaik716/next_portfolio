import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  technologies: [String],
  description: String,
  img_src: String,
  website_url: String,
  github_url: String,
});

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", projectSchema);

export default Projects;
