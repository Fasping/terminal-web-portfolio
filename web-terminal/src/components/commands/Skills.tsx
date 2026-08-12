import entries from "../../styles/entries.module.css";
import styles from "../../styles/output.module.css";

const Skills = () => (
    <div className={styles.wrapper} data-testid="skills">
        <div className={styles.intro}>Here are the tools I work with!</div>
        {skills.map(({ group, items }) => (
            <div className={`${entries.entry} ${entries.compact}`} key={group}>
                <div className={entries.title}>{group}</div>
                <div className={entries.desc}>{items.join(" · ")}</div>
            </div>
        ))}
    </div>
);

const skills = [
    { group: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
    {
        group: "Frameworks & Libraries",
        items: ["React", "Next.js", "React Context API"],
    },
    {
        group: "Styling",
        items: ["TailwindCSS", "Sass", "CSS Modules", "Responsive design"],
    },
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

export default Skills;
