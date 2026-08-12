import styles from "../styles/terminal.module.css";
import { profile } from "../data/profile";

const TermInfo = () => (
    <span className={styles.termInfo}>
        <span className={styles.user}>{profile.user}</span>@
        <span className={styles.website}>{profile.host}</span>:~$
    </span>
);

export default TermInfo;
