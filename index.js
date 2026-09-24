// ============================================================
// RAHUL SHAIK - PORTFOLIO DATABASE UPDATE
// MongoDB Atlas / mongosh
//
// This script:
//   1. Updates existing projects
//   2. Inserts new projects
//   3. Updates/inserts skills
//   4. Creates unique indexes
//
// SAFE TO RUN MULTIPLE TIMES
// Existing records are matched by title/name.
// ============================================================

// ============================================================
// CONFIGURATION
// ============================================================

const dbName = "YOUR_DATABASE_NAME";

const projectsCollectionName = "projects";
const skillsCollectionName = "skills";

const database = db.getSiblingDB(dbName);

const projects = database.collection(projectsCollectionName);
const skills = database.collection(skillsCollectionName);

// ============================================================
// PROJECT DATA
// ============================================================

const projectData = [
  // ----------------------------------------------------------
  // 1. Resume RAG Platform
  // ----------------------------------------------------------

  {
    title: "Resume RAG Platform",

    img_src: "download.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "tRPC",
      "Python",
      "Pinecone",
      "Embeddings",
      "LLM APIs",
      "RAG",
      "Prompt Engineering",
    ],

    description:
      "Built a retrieval-augmented generation platform for resume knowledge retrieval. The platform processes resume information, creates document chunks, generates embeddings, stores vector representations in Pinecone, and uses LLM-powered retrieval to answer questions about professional experience, projects, skills, and career history.",

    website_url: "https://my-resume-rag.vercel.app",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 2. Voice AI Support Copilot
  // ----------------------------------------------------------

  {
    title: "Voice AI Support Copilot",

    img_src: "download.png",

    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Web Speech API",
      "LLM APIs",
      "Generative AI",
      "Prompt Engineering",
    ],

    description:
      "Developed an AI-assisted customer support workflow that captures speech, generates transcripts, analyzes customer intent, produces conversation summaries and suggested responses, and extracts action items using LLM-powered workflows.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 3. Weather AI Agent
  // ----------------------------------------------------------

  {
    title: "Weather AI Agent",

    img_src: "download.png",

    technologies: [
      "Python",
      "Pydantic AI",
      "LLMs",
      "AI Agents",
      "Tool Calling",
      "Prompt Engineering",
    ],

    description:
      "Built an AI agent using Pydantic AI that interprets natural-language travel preferences and uses weather tools to identify suitable travel periods. The project demonstrates agent workflows, tool calling, structured inputs, and LLM-based decision support.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 4. Shell Lube Analyst
  // ----------------------------------------------------------

  {
    title: "Shell Lube Analyst",

    img_src: "download.png",

    technologies: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "GraphQL",
      "REST APIs",
      "Mobile Development",
    ],

    description:
      "Led development of a mobile application that integrates laboratory test data with business rules to provide lubricant recommendations. Led a team of 5 engineers across architecture, feature development, code reviews, testing, and delivery.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 5. Shell Fleet Assistant
  // ----------------------------------------------------------

  {
    title: "Shell Fleet Assistant",

    img_src: "download.png",

    technologies: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Realm.js",
      "REST APIs",
      "Offline-First Development",
    ],

    description:
      "Led development of an offline-first mobile application supporting fleet managers and drivers. Implemented local data persistence using Realm.js and developed workflows for managing jobs, driver activity, and fleet operations.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 6. Shell DriverHub
  // ----------------------------------------------------------

  {
    title: "Shell DriverHub",

    img_src: "download.png",

    technologies: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Realm.js",
      "REST APIs",
      "Mobile Development",
    ],

    description:
      "Developed a LinkedIn-style mobile platform for Shell drivers and fleet managers. The application supports driver workflows, job discovery, fleet operations, and communication between drivers and fleet managers using reusable React Native components.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 7. Shell Scan & Go
  // ----------------------------------------------------------

  {
    title: "Shell Scan & Go",

    img_src: "download.png",

    technologies: [
      "React Native",
      "JavaScript",
      "ES6",
      "Node.js",
      "REST APIs",
      "SAP Hybris",
    ],

    description:
      "Developed a mobile Scan & Go shopping experience for Shell customers using React Native and modern JavaScript. Integrated frontend workflows with backend APIs and SAP Hybris services to support customer checkout and retail workflows.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 8. Shell Driver Hub
  // ----------------------------------------------------------

  {
    title: "Shell Driver Hub",

    img_src: "download.png",

    technologies: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Mobile Development",
      "REST APIs",
    ],

    description:
      "Developed mobile workflows for Shell drivers and fleet managers, enabling job discovery, driver activity, and fleet-related operations through a React Native application.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 9. Retail Sandbox
  // ----------------------------------------------------------

  {
    title: "Retail Sandbox",

    img_src: "download.png",

    technologies: [
      "React",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "REST APIs",
    ],

    description:
      "Developed proof-of-concepts and reusable technical solutions within the Shell Retail Sandbox to evaluate technologies, validate product ideas, and explore new approaches for retail applications.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 10. Android IoT Applications with Beacons
  // ----------------------------------------------------------

  {
    title: "Android IoT Applications with Beacons",

    img_src: "download.png",

    technologies: ["Android", "Java", "Bluetooth Beacons"],

    description:
      "Developed an Android application using Bluetooth Beacons to deliver contextual messages based on proximity. The application explored location-aware mobile experiences and event-driven contextual interactions.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 11. RemMonitor
  // ----------------------------------------------------------

  {
    title: "RemMonitor",

    img_src: "download.png",

    technologies: ["Java", "Android", "RXTX", "j2mod", "SQL", "Modbus"],

    description:
      "Developed a Java monitoring application for system monitoring and industrial communication. Implemented serial communication and Modbus integration using RXTX and j2mod with SQL-based data storage. The application is currently deployed on Navy ships.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 12. Automatic Subtitle Generator
  // ----------------------------------------------------------

  {
    title: "Automatic Subtitle Generator",

    img_src: "download.png",

    technologies: [
      "Python",
      "OpenAI Whisper",
      "Speech Recognition",
      "Audio Processing",
    ],

    description:
      "Built a Python application that processes audio and video using OpenAI Whisper to generate subtitles. The application supports speech transcription and subtitle generation for the desired language.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 13. Hybrid Cloud Smart Classroom Assistant
  // ----------------------------------------------------------

  {
    title: "Hybrid Cloud Smart Classroom Assistant",

    img_src: "download.png",

    technologies: [
      "AWS",
      "Ceph",
      "OpenFaaS",
      "DynamoDB",
      "Python",
      "Cloud Computing",
    ],

    description:
      "Developed a hybrid cloud smart classroom assistant using cloud and edge technologies to support academic information retrieval and intelligent classroom workflows.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 14. Distributed Computing Mobile Offloading
  // ----------------------------------------------------------

  {
    title: "Distributed Computing Mobile Offloading",

    img_src: "download.png",

    technologies: [
      "Android",
      "Java",
      "Kotlin",
      "Bluetooth",
      "Wi-Fi",
      "Distributed Computing",
    ],

    description:
      "Developed a mobile distributed-computing application that evaluates computational offloading between mobile devices using Bluetooth and Wi-Fi communication. The project included battery monitoring and matrix multiplication workloads to evaluate mobile computation strategies.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 15. Customer Feedback using American Sign Language
  // ----------------------------------------------------------

  {
    title: "Customer Feedback using American Sign Language",

    img_src: "download.png",

    technologies: [
      "Mobile Development",
      "Computer Vision",
      "American Sign Language",
    ],

    description:
      "Developed a mobile application focused on collecting customer feedback using American Sign Language. The project was recognized with first place at Techtonic2k18.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 16. Parking Space Availability App - ParkASU
  // ----------------------------------------------------------

  {
    title: "Parking Space Availability App - ParkASU",

    img_src: "download.png",

    technologies: [
      "Mobile Development",
      "Real-Time Systems",
      "Apple Pay",
      "Figma",
      "HCI",
    ],

    description:
      "Developed a parking availability application designed to help users identify available parking spaces in real time. The project included payment workflows and Apple Pay integration concepts with a focus on human-computer interaction and user experience.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 17. Resume Knowledge / AI Retrieval System
  // ----------------------------------------------------------

  {
    title: "Resume Knowledge AI Assistant",

    img_src: "download.png",

    technologies: [
      "RAG",
      "Pinecone",
      "Embeddings",
      "LLMs",
      "Python",
      "Next.js",
      "TypeScript",
      "Prompt Engineering",
    ],

    description:
      "Developed an AI knowledge system that organizes resume, career, project, education, and technical experience into searchable vector representations. The system uses document processing, chunking, embeddings, Pinecone retrieval, and LLM generation to answer questions about professional experience.",

    website_url: "https://my-resume-rag.vercel.app",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 18. Retail Technical POCs
  // ----------------------------------------------------------

  {
    title: "Shell Retail Technical POCs",

    img_src: "download.png",

    technologies: [
      "React",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "REST APIs",
    ],

    description:
      "Developed technical proof-of-concepts within the Shell Retail Sandbox to evaluate emerging technologies, prototype application workflows, investigate technical approaches, and validate solutions before broader implementation.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 19. Android Contextual Messaging
  // ----------------------------------------------------------

  {
    title: "Android Contextual Messaging",

    img_src: "download.png",

    technologies: [
      "Android",
      "Java",
      "Bluetooth Beacons",
      "Context-Aware Computing",
    ],

    description:
      "Developed an Android application that uses Bluetooth Beacon proximity to trigger contextual messages and create location-aware mobile experiences.",

    website_url: "",

    github_url: "",
  },

  // ----------------------------------------------------------
  // 20. Shell Fleet / Driver Workflow Platform
  // ----------------------------------------------------------

  {
    title: "Shell Fleet and Driver Workflow Platform",

    img_src: "download.png",

    technologies: [
      "React Native",
      "React",
      "JavaScript",
      "TypeScript",
      "Realm.js",
      "REST APIs",
    ],

    description:
      "Developed mobile and web workflows supporting Shell fleet managers and drivers. The platform included job management, driver workflows, fleet operations, offline-first functionality, and reusable application components.",

    website_url: "",

    github_url: "",
  },
];

// ============================================================
// UPSERT PROJECTS
// ============================================================

const projectOperations = projectData.map((project) => ({
  updateOne: {
    filter: {
      title: project.title,
    },

    update: {
      $set: {
        img_src: project.img_src,
        technologies: project.technologies,
        description: project.description,
        website_url: project.website_url,
        github_url: project.github_url,
      },
    },

    upsert: true,
  },
}));

const projectResult = await projects.bulkWrite(projectOperations);

print("\n========================================");
print("PROJECT UPDATE COMPLETE");
print("========================================");

printjson({
  matched: projectResult.matchedCount,
  modified: projectResult.modifiedCount,
  inserted: projectResult.upsertedCount,
});

// ============================================================
// SKILLS
// ============================================================

const skillData = [
  // ==========================================================
  // PROGRAMMING LANGUAGES
  // ==========================================================

  { name: "Java", category: "Programming Languages" },
  { name: "JavaScript", category: "Programming Languages" },
  { name: "TypeScript", category: "Programming Languages" },
  { name: "Python", category: "Programming Languages" },
  { name: "C", category: "Programming Languages" },
  { name: "C++", category: "Programming Languages" },
  { name: "C#", category: "Programming Languages" },
  { name: "PHP", category: "Programming Languages" },
  { name: "Solidity", category: "Programming Languages" },

  // ==========================================================
  // FRONTEND
  // ==========================================================

  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "React Query", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Responsive Design", category: "Frontend" },
  { name: "Component Architecture", category: "Frontend" },
  { name: "UI/UX", category: "Frontend" },
  { name: "Figma", category: "Frontend" },
  { name: "React Router", category: "Frontend" },
  { name: "React Native Navigation", category: "Frontend" },

  // ==========================================================
  // BACKEND
  // ==========================================================

  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Java Spring Boot", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "tRPC", category: "Backend" },
  { name: "Microservices", category: "Backend" },
  { name: "WebSockets", category: "Backend" },
  { name: "Server-Sent Events", category: "Backend" },
  { name: "Webhooks", category: "Backend" },
  { name: "API Integration", category: "Backend" },

  // ==========================================================
  // DATABASES
  // ==========================================================

  { name: "PostgreSQL", category: "Databases" },
  { name: "SQL Server", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "DynamoDB", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "Azure Cosmos DB", category: "Databases" },
  { name: "SQL", category: "Databases" },
  { name: "NoSQL", category: "Databases" },

  // ==========================================================
  // CLOUD
  // ==========================================================

  { name: "Microsoft Azure", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "AWS Lambda", category: "Cloud" },
  { name: "AWS SQS", category: "Cloud" },
  { name: "AWS Step Functions", category: "Cloud" },
  { name: "AWS CloudWatch", category: "Cloud" },
  { name: "Azure App Services", category: "Cloud" },
  { name: "Azure Monitor", category: "Cloud" },
  { name: "Azure SQL", category: "Cloud" },
  { name: "Azure AD", category: "Cloud" },
  { name: "Azure Cognitive Services", category: "Cloud" },
  { name: "Azure Event Hubs", category: "Cloud" },
  { name: "Azure Logic Apps", category: "Cloud" },

  // ==========================================================
  // DEVOPS / CI/CD
  // ==========================================================

  { name: "Git", category: "DevOps" },
  { name: "GitHub", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Azure DevOps", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
  { name: "Continuous Integration", category: "DevOps" },
  { name: "Continuous Delivery", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Build Automation", category: "DevOps" },

  // ==========================================================
  // TESTING
  // ==========================================================

  { name: "Jest", category: "Testing" },
  { name: "Vitest", category: "Testing" },
  { name: "React Testing Library", category: "Testing" },
  { name: "Playwright", category: "Testing" },
  { name: "Cypress", category: "Testing" },
  { name: "Selenium", category: "Testing" },
  { name: "SpecFlow", category: "Testing" },
  { name: "JUnit", category: "Testing" },
  { name: "Unit Testing", category: "Testing" },
  { name: "Integration Testing", category: "Testing" },
  { name: "End-to-End Testing", category: "Testing" },
  { name: "E2E Testing", category: "Testing" },
  { name: "TDD", category: "Testing" },
  { name: "BDD", category: "Testing" },
  { name: "Automated Testing", category: "Testing" },

  // ==========================================================
  // AI / MACHINE LEARNING
  // ==========================================================

  { name: "Artificial Intelligence", category: "AI" },
  { name: "Generative AI", category: "AI" },
  { name: "LLMs", category: "AI" },
  { name: "LLM APIs", category: "AI" },
  { name: "AI Agents", category: "AI" },
  { name: "RAG", category: "AI" },
  { name: "Retrieval-Augmented Generation", category: "AI" },
  { name: "MCP", category: "AI" },
  { name: "Prompt Engineering", category: "AI" },
  { name: "Embeddings", category: "AI" },
  { name: "Vector Databases", category: "AI" },
  { name: "Pinecone", category: "AI" },
  { name: "Pydantic AI", category: "AI" },
  { name: "NVIDIA NIM", category: "AI" },
  { name: "Ollama", category: "AI" },
  { name: "Open Source Models", category: "AI" },
  { name: "Tool Calling", category: "AI" },

  // ==========================================================
  // AI-ASSISTED DEVELOPMENT
  // ==========================================================

  { name: "Claude", category: "AI-Assisted Development" },
  { name: "Codex", category: "AI-Assisted Development" },
  { name: "Pi", category: "AI-Assisted Development" },

  // ==========================================================
  // SOFTWARE ENGINEERING
  // ==========================================================

  { name: "Software Architecture", category: "Engineering" },
  { name: "System Architecture", category: "Engineering" },
  { name: "System Design", category: "Engineering" },
  { name: "API Design", category: "Engineering" },
  { name: "Software Design", category: "Engineering" },
  { name: "Design Patterns", category: "Engineering" },
  { name: "Data Structures", category: "Engineering" },
  { name: "Algorithms", category: "Engineering" },
  { name: "Performance Optimization", category: "Engineering" },
  { name: "Debugging", category: "Engineering" },
  { name: "Code Reviews", category: "Engineering" },
  { name: "Code Refactoring", category: "Engineering" },
  { name: "Feature Flags", category: "Engineering" },
  { name: "A/B Testing", category: "Engineering" },
  { name: "Production Debugging", category: "Engineering" },
  { name: "Problem Solving", category: "Engineering" },

  // ==========================================================
  // DEVELOPMENT PRACTICES
  // ==========================================================

  { name: "Agile Development", category: "Development Practices" },
  { name: "Requirements Analysis", category: "Development Practices" },
  { name: "Cross-Functional Collaboration", category: "Development Practices" },
  { name: "Technical Documentation", category: "Development Practices" },
  { name: "API Documentation", category: "Development Practices" },
  { name: "Defensive Programming", category: "Development Practices" },
  { name: "AI-Generated Code Validation", category: "Development Practices" },
  { name: "Clean Code", category: "Development Practices" },
  { name: "Continuous Improvement", category: "Development Practices" },
];

// ============================================================
// UPSERT SKILLS
// ============================================================

const skillOperations = skillData.map((skill) => ({
  updateOne: {
    filter: {
      name: skill.name,
    },

    update: {
      $set: {
        category: skill.category,
      },
    },

    upsert: true,
  },
}));

const skillResult = await skills.bulkWrite(skillOperations);

print("\n========================================");
print("SKILL UPDATE COMPLETE");
print("========================================");

printjson({
  matched: skillResult.matchedCount,
  modified: skillResult.modifiedCount,
  inserted: skillResult.upsertedCount,
});

// ============================================================
// UNIQUE INDEXES
// ============================================================
//
// These prevent duplicate titles/names in future updates.
//
// If you already have duplicate documents, index creation will
// fail. In that case, remove these two createIndex statements,
// clean duplicates first, and run them again.
// ============================================================

try {
  await projects.createIndex({ title: 1 }, { unique: true });

  print("Project unique index created.");
} catch (error) {
  print("Project index: " + error.message);
}

try {
  await skills.createIndex({ name: 1 }, { unique: true });

  print("Skill unique index created.");
} catch (error) {
  print("Skill index: " + error.message);
}

// ============================================================
// FINAL SUMMARY
// ============================================================

print("\n========================================");
print("PORTFOLIO UPDATE FINISHED");
print("========================================");

print("Projects processed: " + projectData.length);
print("Skills processed: " + skillData.length);

print("\nDatabase: " + dbName);
print("Projects collection: " + projectsCollectionName);
print("Skills collection: " + skillsCollectionName);

print("\nYou can now refresh Atlas Browse Collections.");
