import { useContext, useEffect } from "react";
import styles from "../../styles/output.module.css";
import { getCurrentCmdArry } from "../../utils/funcs";
import { termContext } from "../Terminal";

export const RESUME_URL = "/Fernando-Cases-CV.pdf";

const Resume = () => {
    const { history, rerender } = useContext(termContext);
    const currentCommand = getCurrentCmdArry(history);

    useEffect(() => {
        if (
            rerender &&
            (currentCommand[0] === "resume" || currentCommand[0] === "cv") &&
            currentCommand.length <= 1
        ) {
            window.open(RESUME_URL, "_blank");
        }
    }, [rerender, currentCommand]);

    return (
        <div className={styles.wrapper} data-testid="resume">
            <div>Opening my resume in a new tab...</div>
            <div>
                If nothing happens, grab it here:{" "}
                <a className={styles.link} href={RESUME_URL} target="_blank" rel="noreferrer">
                    Fernando Cases — CV (PDF)
                </a>
            </div>
        </div>
    );
};

export default Resume;
