import styles from "../../styles/about.module.css";

const About = () => (
    <div className={styles.wrapper} data-testid="about">
        <p>
            Hi, my name is <span className={styles.name}>Fernando Cases</span> — most
            people call me Nando!
        </p>
        <p>
            I'm a <span className={styles.alt}>Frontend Developer &amp; Technical Project Manager</span>{" "}
            based in Madrid, Spain.
        </p>
        <p>
            I build web products and I keep teams moving so things actually ship. I
            learned to code in Berlin, spent four years working in Stockholm, and I'm
            now based in Madrid.
        </p>
        <p>
            Day to day I live in <span className={styles.alt}>React</span> and{" "}
            <span className={styles.alt}>TypeScript</span>, and I also handle the
            planning side: sprints, backlogs, and keeping design, product and
            engineering talking to each other.
        </p>
        <p>
            Outside of tech I run <span className={styles.alt}>Planka Records</span>, my
            own vinyl label, which taught me more about deadlines and budgets than any
            tool ever did. The rest of the time I'm making music with synths, playing
            padel or traveling.
        </p>
        <p>
            Always up for a chat or for building something new. Type{" "}
            <span className={styles.name}>experience</span>,{" "}
            <span className={styles.name}>skills</span> or{" "}
            <span className={styles.name}>resume</span> to know more.
        </p>
    </div>
);

export default About;
