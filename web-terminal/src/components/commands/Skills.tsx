import entries from "../../styles/entries.module.css";
import styles from "../../styles/output.module.css";
import { skills } from "../../data/skills";

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

export default Skills;
