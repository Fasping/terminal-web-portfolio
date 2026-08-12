export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  { group: "Frameworks & Libraries", items: ["React", "Next.js", "React Context API"] },
  { group: "Styling", items: ["TailwindCSS", "Sass", "CSS Modules", "Responsive design"] },
  {
    group: "Design Systems & UI",
    items: ["Storybook", "Figma", "Accessibility (a11y)", "Component libraries"],
  },
  { group: "Content & Tooling", items: ["Strapi CMS", "Vite", "Git & GitHub", "Vitest"] },
  { group: "CI/CD", items: ["Jenkins pipelines", "Automated releases"] },
  {
    group: "Project Management",
    items: [
      "Agile / Scrum",
      "Sprint planning",
      "Backlog management (Jira)",
      "Cross-team coordination",
    ],
  },
  {
    group: "Performance & SEO",
    items: ["Web performance optimization", "SEO best practices"],
  },
  { group: "Spoken Languages", items: ["English", "Spanish", "Catalan"] },
];
