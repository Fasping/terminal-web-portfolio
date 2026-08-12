import { useContext } from "react";
import styles from "../styles/output.module.css";
import { termContext } from "./Terminal";
import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import Experience from "./commands/Experience";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import History from "./commands/History";
import Resume from "./commands/Resume";
import Skills from "./commands/Skills";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import Welcome from "./commands/Welcome";

type Props = {
    index: number;
    cmd: string;
};

/** Commands that take arguments; everything else rejects them. */
const commandsWithArgs = ["socials", "themes", "echo"];

const Output = ({ index, cmd }: Props) => {
    const { arg } = useContext(termContext);

    if (!commandsWithArgs.includes(cmd) && arg.length > 0)
        return (
            <div className={styles.usage} data-testid="usage-output">
                Usage: {cmd}
            </div>
        );

    const commandsMap: Record<string, JSX.Element> = {
        about: <About />,
        clear: <Clear />,
        cv: <Resume />,
        echo: <Echo />,
        education: <Education />,
        email: <Email />,
        experience: <Experience />,
        help: <Help />,
        history: <History />,
        resume: <Resume />,
        skills: <Skills />,
        socials: <Socials />,
        themes: <Themes />,
        welcome: <Welcome />,
        whoami: <GeneralOutput>visitor</GeneralOutput>,
    };

    return (
        <div
            className={styles.container}
            data-testid={index === 0 ? "latest-output" : undefined}
        >
            {commandsMap[cmd]}
        </div>
    );
};

export default Output;
