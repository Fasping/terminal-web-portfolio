import styles from "../styles/output.module.css";

type Props = {
    cmd: "themes" | "socials";
    marginY?: boolean;
};

const arg = {
    themes: { placeholder: "theme-name", example: "ubuntu" },
    socials: { placeholder: "social-no", example: "1" },
};

const Usage = ({ cmd, marginY = false }: Props) => {
    const action = cmd === "themes" ? "set" : "go";

    return (
        <div
            data-testid={`${cmd}-invalid-arg`}
            className={`${styles.usage} ${marginY ? styles.usageSpaced : ""}`}
        >
            Usage: {cmd} {action} &lt;{arg[cmd].placeholder}&gt; <br />
            eg: {cmd} {action} {arg[cmd].example}
        </div>
    );
};

export default Usage;
