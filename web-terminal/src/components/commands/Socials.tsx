import { Fragment, useContext, useEffect } from "react";
import help from "../../styles/help.module.css";
import styles from "../../styles/output.module.css";
import {
    checkRedirect,
    getCurrentCmdArry,
    isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const socials = [
    { id: 1, title: "GitHub", url: "https://github.com/Fasping" },
    { id: 2, title: "LinkedIn", url: "https://www.linkedin.com/in/fernandocases94/" },
];

const socialIds = socials.map(({ id }) => String(id));

const Socials = () => {
    const { arg, history, rerender } = useContext(termContext);
    const currentCommand = getCurrentCmdArry(history);

    useEffect(() => {
        if (checkRedirect(rerender, currentCommand, "socials")) {
            const selected = socials.find(({ id }) => id === parseInt(arg[1]));
            if (selected) window.open(selected.url, "_blank");
        }
    }, [arg, rerender, currentCommand]);

    if (arg.length > 0) {
        return isArgInvalid(arg, "go", socialIds) ? <Usage cmd="socials" /> : null;
    }

    return (
        <div className={help.wrapper} data-testid="socials">
            <div className={styles.intro}>Here are my social links</div>
            <div className={help.list}>
                {socials.map(({ id, title, url }) => (
                    <Fragment key={id}>
                        <span className={help.cmd}>{`${id}. ${title}`}</span>
                        <span className={help.desc}>{url}</span>
                    </Fragment>
                ))}
            </div>
            <Usage cmd="socials" marginY />
        </div>
    );
};

export default Socials;
