import { useContext } from "react";
import styles from "../../styles/output.module.css";
import { termContext } from "../Terminal";

/** Strips one layer of matching quotes or backticks around the text. */
const unquote = (value: string) => {
    const quotes = ["'", '"', "`"];
    return quotes.some(q => value.startsWith(q) && value.endsWith(q) && value.length > 1)
        ? value.slice(1, -1)
        : value;
};

const Echo = () => {
    const { arg } = useContext(termContext);

    return <div className={styles.wrapper}>{unquote(arg.join(" "))}</div>;
};

export default Echo;
