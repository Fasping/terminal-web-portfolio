import entries from "../../styles/entries.module.css";
import styles from "../../styles/output.module.css";
import { education } from "../../data/education";

const Education = () => (
    <div className={styles.wrapper} data-testid="education">
        <div className={styles.intro}>Here is my education background!</div>
        {education.map(({ title, desc }) => (
            <div className={`${entries.entry} ${entries.compact}`} key={title}>
                <div className={entries.title}>{title}</div>
                <div className={entries.desc}>{desc}</div>
            </div>
        ))}
    </div>
);

export default Education;
