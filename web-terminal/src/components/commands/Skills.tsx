import { SkillsGroup, SkillsIntro } from "../styles/Skills.styled";
import { Wrapper } from "../styles/Output.styled";

const Skills: React.FC = () => {
    return (
        <Wrapper data-testid="skills">
            <SkillsIntro>Here are the tools I work with!</SkillsIntro>
            {skills.map(({ group, items }) => (
                <SkillsGroup key={group}>
                    <div className="group">{group}</div>
                    <div className="items">{items.join(" · ")}</div>
                </SkillsGroup>
            ))}
        </Wrapper>
    );
};

const skills = [
    {
        group: "Languages",
        items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
        group: "Frameworks & Libraries",
        items: ["React", "Next.js", "React Context API", "Lodash"],
    },
    {
        group: "Styling",
        items: ["TailwindCSS", "Sass", "styled-components", "Responsive design"],
    },
    {
        group: "Design Systems & UI",
        items: ["Storybook", "Figma", "Accessibility (a11y)", "Component libraries"],
    },
    {
        group: "Content & Tooling",
        items: ["Strapi CMS", "Vite", "Git & GitHub", "Vitest"],
    },
    {
        group: "CI/CD",
        items: ["Jenkins pipelines", "Automated releases"],
    },
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
    {
        group: "Spoken Languages",
        items: ["English", "Spanish", "Catalan"],
    },
];

export default Skills;
