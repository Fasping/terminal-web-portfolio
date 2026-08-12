import { useContext } from "react";
import styles from "../../styles/output.module.css";
import { termContext } from "../Terminal";

const History = () => {
    const { history, index } = useContext(termContext);
    const reversedHistory = history.slice(index).reverse();

    return (
        <div className={styles.wrapper} data-testid="history">
            {reversedHistory.map((cmd, idx) => (
                <div key={idx}>{cmd}</div>
            ))}
        </div>
    );
};

export default History;
