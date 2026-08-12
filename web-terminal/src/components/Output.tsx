import { useContext } from "react";
import styles from "../styles/output.module.css";
import { getCommand } from "../commands/registry";
import { termContext } from "../context/terminal";

type Props = {
    index: number;
    cmd: string;
};

const Output = ({ index, cmd }: Props) => {
    const { arg } = useContext(termContext);
    const command = getCommand(cmd);

    if (!command) return null;

    const acceptsArgs = command.freeArgs || !!command.args;

    if (!acceptsArgs && arg.length > 0)
        return (
            <div className={styles.usage} data-testid="usage-output">
                Usage: {cmd}
            </div>
        );

    return (
        <div
            className={styles.container}
            data-testid={index === 0 ? "latest-output" : undefined}
        >
            {command.element}
        </div>
    );
};

export default Output;
