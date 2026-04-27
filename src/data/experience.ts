import { Experience } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    role: "Full Stack Developer (SE-2)",
    company: "Euromonitor International",
    location: "Bangalore",
    period: "January 2024 - Present",
    highlights: [
      "Led end-to-end development of micro-frontend UIs and scalable REST APIs using Angular, C#, .NET, and Node.js, serving 10K+ users across multiple services.",
      "Implemented AI-driven workflows using Python and Prompt Flow, integrating Number Station pipelines with secure OIDC authentication.",
      "Modernized legacy .NET applications into microservices-based architecture applying clean architecture, SOLID principles, and design patterns.",
      "Implemented end-to-end observability for AKS workloads with Grafana dashboards, reducing production incident detection time by 40%.",
      "Designed ETL data pipelines using Azure Data Factory, processing large-scale datasets across SQL Server and PostgreSQL environments.",
      "Developed and published a GPT-4 powered AI Code Reviewer on the Microsoft Marketplace, automating code quality checks across internal repositories.",
      "Built automated CI/CD pipelines in Azure DevOps for AKS deployments and containerized Cron Jobs, reducing manual deployment effort by 50%.",
    ],
  },
  {
    role: "Full Stack Developer (SE-1)",
    company: "Euromonitor International",
    location: "Bangalore",
    period: "April 2022 - December 2023",
    highlights: [
      "Engineered scalable Micro UIs using Angular and ReactJS within an Nx monorepo, utilising RxJS and Redux for reactive state management.",
      "Developed high-performance RESTful APIs using C# and .NET, following SOLID principles and Repository-Service-Controller architecture.",
      "Optimised data-intensive interfaces with AG Grid — dynamic row highlighting, Excel exports, and complex filtering for API-driven datasets.",
      "Enhanced database performance by writing complex SQL Server CTEs, Views, and subqueries, refactoring stored procedures for high-volume data transformations.",
      "Led code quality initiatives by increasing unit test coverage to 90% and eliminating SonarCloud code smells.",
      "Improved system reliability by designing Grafana dashboards and managing CI/CD pipelines to automate Micro UI releases.",
    ],
  },
];
