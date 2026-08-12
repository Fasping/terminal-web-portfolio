import styles from "../../styles/output.module.css";

type Props = {
    children: string;
};

const GeneralOutput = ({ children }: Props) => (
    <div className={styles.wrapper}>{children}</div>
);

export default GeneralOutput;
