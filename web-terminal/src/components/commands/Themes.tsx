import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import { Wrapper } from "../styles/Output.styled";
import { ThemeSpan, ThemesWrapper } from "../styles/Themes.styled";
import { checkThemeSwitch, getCurrentCmdArry, isArgInvalid } from "../../utils/funcs";
import { termContext } from "../Terminal";
import theme from "../styles/themes";
import Usage from "../Usage";

const Themes: React.FC = () => {
    const { arg, history, rerender } = useContext(termContext);
    const themeSwitcher = useContext(ThemeContext);
    const currentCommand = getCurrentCmdArry(history);

    useEffect(() => {
        if (checkThemeSwitch(rerender, currentCommand, Object.keys(theme))) {
            themeSwitcher?.(theme[currentCommand[2]]);
        }
    }, [arg, rerender, currentCommand, themeSwitcher]);

    if (arg.length > 0 || arg.length > 2) {
        return isArgInvalid(arg, "set", Object.keys(theme)) ? <Usage cmd="themes" /> : null;
    }

    return (
        <Wrapper data-testid="themes">
            <ThemesWrapper>
                {Object.keys(theme).map(myTheme => (
                    <ThemeSpan key={myTheme}>{myTheme}</ThemeSpan>
                ))}
            </ThemesWrapper>
            <Usage cmd="themes" marginY />
        </Wrapper>
    );
};

export default Themes;