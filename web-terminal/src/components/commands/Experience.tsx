import entries from "../../styles/entries.module.css";
import styles from "../../styles/output.module.css";
import { experience } from "../../data/experience";

const Experience = () => (
    <div className={styles.wrapper} data-testid="experience">
        <div className={styles.intro}>Here is my professional experience!</div>
        {experience.map(({ role, company, meta, desc }) => (
            <div className={entries.entry} key={`${company}-${role}`}>
                <div className={entries.title}>{role}</div>
                <div className={entries.highlight}>{company}</div>
                <div className={entries.meta}>{meta}</div>
                <div className={entries.desc}>{desc}</div>
            </div>
        ))}
    </div>
);

export default Experience;
