import { useContext, useEffect } from "react";
import styles from "../../styles/output.module.css";
import { termContext } from "../../context/terminal";

const Clear = () => {
    const { arg, clearHistory } = useContext(termContext);

    useEffect(() => {
        if (arg.length === 0 && clearHistory) {
            clearHistory();
        }
    }, [arg.length, clearHistory]);

    return arg.length > 0 ? <div className={styles.usage}>Usage: clear</div> : null;
};

export default Clear;
