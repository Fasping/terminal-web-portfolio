import React, { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
    checkRedirect,
    generateTabs,
    getCurrentCmdArry,
    isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const socials = [
    {
        id: 1,
        title: "GitHub",
        url: "https://github.com/Fasping",
        tab: 3,
    },
    {
        id: 2,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/fernandocases94/",
        tab: 3,
    },
];

const Socials: React.FC = () => {
    const { arg, history, rerender } = useContext(termContext);
    const currentCommand = getCurrentCmdArry(history);

    useEffect(() => {
        if (checkRedirect(rerender, currentCommand, "socials")) {
            const selectedSocial = socials.find(({ id }) => id === parseInt(arg[1]));
            if (selectedSocial) {
                window.open(selectedSocial.url, "_blank");
            }
        }
    }, [arg, rerender, currentCommand]);

    const renderSocials = () => {
        return socials.map(({ id, title, url, tab }) => (
            <CmdList key={id}>
                <Cmd>{`${id}. ${title}`}</Cmd>
                {generateTabs(tab)}
                <CmdDesc>- {url}</CmdDesc>
            </CmdList>
        ));
    };

    const renderContent = () => {
        if (arg.length > 0 || arg.length > 2) {
            return isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
                <Usage cmd="socials" />
            ) : null;
        } else {
            return (
                <HelpWrapper data-testid="socials">
                    <ProjectsIntro>Here are my social links</ProjectsIntro>
                    {renderSocials()}
                    <Usage cmd="socials" marginY />
                </HelpWrapper>
            );
        }
    };

    return renderContent();
};

export default Socials;