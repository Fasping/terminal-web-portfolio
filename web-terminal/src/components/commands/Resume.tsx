import { useContext, useEffect } from "react";
import styles from "../../styles/output.module.css";
import { profile } from "../../data/profile";
import { getCurrentCmdArry } from "../../utils/funcs";
import { termContext } from "../../context/terminal";

const Resume = () => {
    const { history, rerender } = useContext(termContext);
    const currentCommand = getCurrentCmdArry(history);

    useEffect(() => {
        if (
            rerender &&
            ["resume", "cv"].includes(currentCommand[0]) &&
            currentCommand.length <= 1
        ) {
            window.open(profile.resumeUrl, "_blank");
        }
    }, [rerender, currentCommand]);

    return (
        <div className={styles.wrapper} data-testid="resume">
            <div>Opening my resume in a new tab...</div>
            <div>
                If nothing happens, grab it here:{" "}
                <a
                    className={styles.link}
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    {profile.name} — CV (PDF)
                </a>
            </div>
        </div>
    );
};

export default Resume;
