import styles from "../../styles/welcome.module.css";
import output from "../../styles/output.module.css";
import { profile } from "../../data/profile";

const Welcome = () => (
    <div className={styles.hero} data-testid="welcome">
        <div className="info-section">
            <pre className={styles.pre}>
                {`
███████╗███████╗██████╗ ███╗   ██╗ █████╗ ███╗   ██╗██████╗  ██████╗      ██████╗ █████╗ ███████╗███████╗███████╗
██╔════╝██╔════╝██╔══██╗████╗  ██║██╔══██╗████╗  ██║██╔══██╗██╔═══██╗    ██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝
█████╗  █████╗  ██████╔╝██╔██╗ ██║███████║██╔██╗ ██║██║  ██║██║   ██║    ██║     ███████║███████╗█████╗  ███████╗
██╔══╝  ██╔══╝  ██╔══██╗██║╚██╗██║██╔══██║██║╚██╗██║██║  ██║██║   ██║    ██║     ██╔══██║╚════██║██╔══╝  ╚════██║
██║     ███████╗██║  ██║██║ ╚████║██║  ██║██║ ╚████║██████╔╝╚██████╔╝    ╚██████╗██║  ██║███████║███████╗███████║
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝      ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
          `}
            </pre>
            <div className={styles.preWrapper}>
                <pre className={styles.preMobile}>
                    {`
╔═╗╔═╗╦═╗╔╗╔╔═╗╔╗╔╔╦╗╔═╗  ╔═╗╔═╗╔═╗╔═╗╔═╗
╠╣ ║╣ ╠╦╝║║║╠═╣║║║ ║║║ ║  ║  ╠═╣╚═╗║╣ ╚═╗
╚  ╚═╝╩╚═╝╚╝╩ ╩╝╚╝═╩╝╚═╝  ╚═╝╩ ╩╚═╝╚═╝╚═╝
                     `}
                </pre>
            </div>
            <div>Welcome to my terminal portfolio. (Version {profile.version})</div>
            <div className={styles.separator}>----</div>
            <div>
                This project's source code can be found in this project's{" "}
                <a
                    className={output.link}
                    href={profile.repoUrl}
                >
                    GitHub repo
                </a>
                .
            </div>
            <div className={styles.separator}>----</div>
            <div>
                {profile.role} — {profile.location}.
            </div>
            <div className={styles.separator}>----</div>
            <div>
                For a list of available commands, type `<span className={styles.cmd}>help</span>
                `. Start with `<span className={styles.cmd}>about</span>`, `
                <span className={styles.cmd}>experience</span>`, `
                <span className={styles.cmd}>skills</span>` or `
                <span className={styles.cmd}>resume</span>`.
            </div>
        </div>
    </div>
);

export default Welcome;
