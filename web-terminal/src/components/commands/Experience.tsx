import { ExpIntro, ExpList } from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
    return (
        <Wrapper data-testid="experience">
            <ExpIntro>Here is my professional experience!</ExpIntro>
            {experience.map(({ role, company, meta, desc }) => (
                <ExpList key={`${company}-${role}`}>
                    <div className="role">{role}</div>
                    <div className="company">{company}</div>
                    <div className="meta">{meta}</div>
                    <div className="desc">{desc}</div>
                </ExpList>
            ))}
        </Wrapper>
    );
};

const experience = [
    {
        role: "Senior Frontend Developer",
        company: "Knowmad Mood",
        meta: "Apr 2026 ~ Aug 2026 | Spain (Remote) | Client: El Corte Inglés Viajes",
        desc: "Senior Frontend Developer on the El Corte Inglés Viajes project, leading the migration to a new component-based design system. Built and maintained reusable, accessible UI components with React, TypeScript and JavaScript (ES6+), documented and tested in Storybook. Partnered with design and product to define component standards, improve UI consistency and speed up delivery across squads.",
    },
    {
        role: "Frontend Developer",
        company: "Leadtech Group",
        meta: "Sep 2024 ~ Dec 2025 | Spain (Remote)",
        desc: "Helped shape a modern web platform built with React, Next.js and TypeScript, crafting clean UIs with TailwindCSS, Sass and styled-components. Maintained a shared Storybook design system, brought content to life through Strapi CMS, and worked with Product and QA to ship reliable features. Kept the release flow running smoothly with Jenkins CI/CD pipelines.",
    },
    {
        role: "Frontend Game Developer & Project Manager",
        company: "Quickspin",
        meta: "Jan 2024 ~ Sep 2024 | Stockholm, Sweden",
        desc: "Built games with JavaScript and TypeScript, integrating art and driving animations with precise coordinates. Alongside development I took on the project manager role: planning sprints, managing the backlog in Jira and coordinating priorities between design, art and development to keep releases on track, working with both small and large teams.",
    },
    {
        role: "Frontend Developer",
        company: "Hayyp Group",
        meta: "Feb 2023 ~ Jan 2024 | Stockholm, Sweden",
        desc: "Crafted pixel-perfect interfaces and enhanced user experiences. Collaborated with a multidisciplinary team to develop web applications, adhering to best practices and coding standards.",
    },
    {
        role: "Frontend Developer",
        company: "ComeOn Group",
        meta: "Nov 2021 ~ Feb 2023 | Stockholm, Sweden",
        desc: "Developed and maintained React.js solutions, turning Figma templates into functional apps. Wrote clean, well-documented code and worked with cross-functional teams using Agile methodologies, applying responsive design, SEO and performance optimization.",
    },
    {
        role: "Founder & Project Manager",
        company: "Planka Records",
        meta: "2020 ~ Present | Worldwide | Independent vinyl label",
        desc: "Founder and owner of an independent electronic vinyl label that I run end to end: creative and A&R direction, closing deals with artists, managing the release pipeline with pressing plants and distributors, and owning budgets, licensing and timelines. I also produce and promote the label's events and built its digital presence.",
    },
];

export default Experience;
