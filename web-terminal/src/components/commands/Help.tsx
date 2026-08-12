import { Fragment } from "react";
import styles from "../../styles/help.module.css";
import { commands } from "../Terminal";

const Help = () => (
    <div className={styles.wrapper} data-testid="help">
        <div className={styles.list}>
            {commands.map(({ cmd, desc }) => (
                <Fragment key={cmd}>
                    <span className={styles.cmd}>{cmd}</span>
                    <span className={styles.desc}>{desc}</span>
                </Fragment>
            ))}
        </div>
        <div className={styles.keys}>
            <span>Tab or Ctrl + i</span>
            <span>autocompletes the command</span>
            <span>Up Arrow</span>
            <span>go back to previous command</span>
            <span>Ctrl + l</span>
            <span>clear the terminal</span>
        </div>
    </div>
);

export default Help;
