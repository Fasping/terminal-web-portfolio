import styles from "../styles/terminal.module.css";

const TermInfo = () => (
    <span className={styles.termInfo}>
        <span className={styles.user}>visitor</span>@
        <span className={styles.website}>terminal.fernandocases.dev</span>:~$
    </span>
);

export default TermInfo;
