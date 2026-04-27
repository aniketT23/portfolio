import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "GPT-4 AI Code Reviewer",
    description:
      "A GPT-4 powered AI Code Reviewer published on the Microsoft Marketplace as an Azure Function. Integrates into repositories to automate and standardize code quality checks across teams.",
    tags: ["GenAI", "GPT-4", "Azure Functions", "C#", ".NET", "DevOps"],
    jutsu: "chidori",
  },
  {
    title: "Frontend Master Clone",
    description:
      "A clone of Frontend Master — an online education website offering web development courses. Users can search courses, subscribe with yearly/monthly plans, and track progress on a dashboard.",
    tags: ["Express.js", "Node.js", "EJS", "MongoDB", "HTML", "CSS"],
    liveUrl: "https://frontendmasterclone.netlify.app/",
    sourceUrl: "https://github.com/aniketT23/FrontEnd-Master-2.0",
    jutsu: "rasengan",
  },
  {
    title: "Yatra Clone",
    description:
      "A Yatra clone with features like login, searching for flights, checking fares, and payment for booked flights. Built to replicate the real experience as closely as possible.",
    tags: ["React", "Express.js", "Node.js", "MongoDB", "HTML", "CSS"],
    liveUrl: "https://yatra.vercel.app/",
    sourceUrl: "https://github.com/aniketT23/Yatra-Clone",
    jutsu: "sharingan",
  },
];
