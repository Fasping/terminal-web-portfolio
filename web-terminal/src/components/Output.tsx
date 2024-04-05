import React, { useContext } from "react";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import History from "./commands/History";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import Welcome from "./commands/Welcome";

type Props = {
    index: number;
    cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
    const { arg } = useContext(termContext);

    const specialCmds = ["projects", "socials", "themes", "echo"];

    // Return 'Usage: <cmd>' if command arg is not valid (e.g., about tt)
    if (!specialCmds.includes(cmd) && arg.length > 0)
        return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

    const commandsMap: { [key: string]: JSX.Element } = {
        about: <About />,
        clear: <Clear />,
        echo: <Echo />,
        education: <Education />,
        email: <Email />,
        help: <Help />,
        history: <History />,
        socials: <Socials />,
        themes: <Themes />,
        welcome: <Welcome />,
        whoami: <GeneralOutput>visitor</GeneralOutput>,
    };

    const outputComponent = commandsMap[cmd];

    return (
        <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
            {outputComponent}
        </OutputContainer>
    );
};

export default Output;