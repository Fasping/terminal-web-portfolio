import { useContext, useEffect } from "react";
import styles from "../../styles/output.module.css";
import { termContext } from "../Terminal";

export const EMAIL = "nandocasesgarcia@gmail.com";

const Email = () => {
    const { history, rerender } = useContext(termContext);

    useEffect(() => {
        const currentCommand = history[0]?.trim().split(" ") ?? [];

        if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
            window.open(`mailto:${EMAIL}`, "_self");
        }
    }, [rerender, history]);

    return (
        <div className={styles.wrapper} data-testid="email">
            <span>{EMAIL}</span>
        </div>
    );
};

export default Email;
