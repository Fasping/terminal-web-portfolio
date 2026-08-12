import { useContext, useEffect } from "react";
import { CSSProperties } from "react";
import { ThemeContext } from "../../App";
import styles from "../../styles/themes.module.css";
import output from "../../styles/output.module.css";
import { checkThemeSwitch, getCurrentCmdArry, isArgInvalid } from "../../utils/funcs";
import { termContext } from "../Terminal";
import { THEMES, ThemeName } from "../../themes";
import Usage from "../Usage";

const Themes = () => {
    const { arg, history, rerender } = useContext(termContext);
    const themeSwitcher = useContext(ThemeContext);
    const currentCommand = getCurrentCmdArry(history);

    useEffect(() => {
        if (checkThemeSwitch(rerender, currentCommand, [...THEMES])) {
            themeSwitcher(currentCommand[2] as ThemeName);
        }
    }, [arg, rerender, currentCommand, themeSwitcher]);

    if (arg.length > 0) {
        return isArgInvalid(arg, "set", [...THEMES]) ? <Usage cmd="themes" /> : null;
    }

    return (
        <div className={output.wrapper} data-testid="themes">
            <div className={styles.list}>
                {THEMES.map(theme => (
                    <span
                        key={theme}
                        className={styles.theme}
                        style={{ "--swatch": `var(--swatch-${theme})` } as CSSProperties}
                    >
                        {theme}
                    </span>
                ))}
            </div>
            <Usage cmd="themes" marginY />
        </div>
    );
};

export default Themes;
