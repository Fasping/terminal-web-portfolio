import { ReactNode } from "react";
import styles from "../styles/layout.module.css";

type Props = {
    title?: string;
    children: ReactNode;
};

const TerminalWindow = ({ title = "fernandocases — ~/portfolio — zsh", children }: Props) => (
    <div className={styles.page}>
        <main className={styles.window}>
            <header className={styles.titleBar}>
                <div className={styles.lights} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </div>
                <div className={styles.title}>{title}</div>
                <div className={styles.spacer} aria-hidden="true" />
            </header>
            <div className={styles.body}>{children}</div>
        </main>
    </div>
);

export default TerminalWindow;
