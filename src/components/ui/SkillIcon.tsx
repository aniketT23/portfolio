"use client";

import {
  SiAngular, SiReact, SiRedux, SiHtml5, SiCss, SiDotnet,
  SiNodedotjs, SiExpress, SiTypescript, SiJavascript, SiPython,
  SiMongodb, SiPostgresql, SiMysql,
  SiKubernetes, SiGrafana, SiGit, SiPostman, SiJest, SiCypress,
  SiSonarqubecloud, SiOpenai,
} from "react-icons/si";
import { VscAzure, VscServerProcess, VscLayout, VscSymbolMisc } from "react-icons/vsc";
import { TbApi, TbBrain, TbGrid3X3 } from "react-icons/tb";
import { HiOutlineCog } from "react-icons/hi";
import type { IconType } from "react-icons";

const ICON_MAP: Record<string, IconType> = {
  "Angular": SiAngular,
  "React": SiReact,
  "Redux Toolkit": SiRedux,
  "HTML5": SiHtml5,
  "CSS3 / Tailwind": SiCss,
  "Ag-Grid": TbGrid3X3,
  "Responsive Design": VscLayout,
  ".NET Core": SiDotnet,
  ".NET Framework": SiDotnet,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST API Design": TbApi,
  "MicroServices": VscServerProcess,
  "C#": SiDotnet,
  "TypeScript": SiTypescript,
  "JavaScript (ES6+)": SiJavascript,
  "Python": SiPython,
  "SQL": SiMysql,
  "SQL Server": SiMysql,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Azure DevOps CI/CD": VscAzure,
  "AKS / Kubernetes": SiKubernetes,
  "Azure Data Factory": VscAzure,
  "Azure Functions": VscAzure,
  "Grafana": SiGrafana,
  "GenAI / GPT-4": SiOpenai,
  "Prompt Flow": TbBrain,
  "AI Code Review": SiOpenai,
  "Git": SiGit,
  "Postman": SiPostman,
  "Jest": SiJest,
  "Cypress": SiCypress,
  "Karma": HiOutlineCog,
  "SonarCloud": SiSonarqubecloud,
};

interface SkillIconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SkillIcon({ name, className = "", style }: SkillIconProps) {
  const Icon = ICON_MAP[name] ?? VscSymbolMisc;
  return <Icon className={className} style={style} />;
}
