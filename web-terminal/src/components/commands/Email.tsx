import { useContext, useEffect } from "react";
import styles from "../../styles/output.module.css";
import { profile } from "../../data/profile";
import { termContext } from "../../context/terminal";

const Email = () => {
    const { history, rerender } = useContext(termContext);

    useEffect(() => {
        const currentCommand = (history[0] ?? "").trim().split(" ");

        if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
            window.open(`mailto:${profile.email}`, "_self");
        }
    }, [rerender, history]);

    return (
        <div className={styles.wrapper} data-testid="email">
            <span>{profile.email}</span>
        </div>
    );
};

export default Email;
