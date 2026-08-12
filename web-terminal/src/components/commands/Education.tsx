import entries from "../../styles/entries.module.css";
import styles from "../../styles/output.module.css";

const Education = () => (
    <div className={styles.wrapper} data-testid="education">
        <div className={styles.intro}>Here is my education background!</div>
        {eduBg.map(({ title, desc }) => (
            <div className={`${entries.entry} ${entries.compact}`} key={title}>
                <div className={entries.title}>{title}</div>
                <div className={entries.desc}>{desc}</div>
            </div>
        ))}
    </div>
);

const eduBg = [
    {
        title: "Web Development Full-Time Bootcamp",
        desc: "Ironhack | Berlin, Germany | 2021",
    },
    {
        title: "Psychology",
        desc: "UOC - Universitat Oberta de Catalunya | Barcelona, Spain | 2013 ~ 2016",
    },
    {
        title: "Bachelor's degree, Art",
        desc: "IES Puig de la Creu | Barcelona, Spain | 2011 ~ 2013",
    },
];

export default Education;
