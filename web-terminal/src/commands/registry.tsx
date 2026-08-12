import { ReactElement } from "react";
import About from "../components/commands/About";
import Clear from "../components/commands/Clear";
import Echo from "../components/commands/Echo";
import Education from "../components/commands/Education";
import Email from "../components/commands/Email";
import Experience from "../components/commands/Experience";
import GeneralOutput from "../components/commands/GeneralOutput";
import Help from "../components/commands/Help";
import History from "../components/commands/History";
import Resume from "../components/commands/Resume";
import Skills from "../components/commands/Skills";
import Socials from "../components/commands/Socials";
import Themes from "../components/commands/Themes";
import Welcome from "../components/commands/Welcome";
import { socialIds } from "../data/socials";
import { THEMES } from "../themes";

export type CommandArgs = {
  /** The verb the command expects, e.g. `socials go 1`. */
  action: "go" | "set";
  options: readonly string[];
};

export type Command = {
  cmd: string;
  desc: string;
  element: ReactElement;
  /** Hidden commands still run, they just don't show up in `help`. */
  hidden?: boolean;
  args?: CommandArgs;
  /** Free-form arguments, like `echo`. */
  freeArgs?: boolean;
};

export const COMMANDS: Command[] = [
  { cmd: "about", desc: "about Fernando Cases", element: <About /> },
  { cmd: "clear", desc: "clear the terminal", element: <Clear /> },
  { cmd: "echo", desc: "print out anything", element: <Echo />, freeArgs: true },
  { cmd: "education", desc: "my education background", element: <Education /> },
  { cmd: "email", desc: "send an email to me", element: <Email /> },
  { cmd: "experience", desc: "my work experience", element: <Experience /> },
  { cmd: "help", desc: "check available commands", element: <Help /> },
  { cmd: "history", desc: "view command history", element: <History /> },
  { cmd: "resume", desc: "open my resume (PDF)", element: <Resume /> },
  { cmd: "skills", desc: "my tech stack & tools", element: <Skills /> },
  {
    cmd: "socials",
    desc: "check out my socials",
    element: <Socials />,
    args: { action: "go", options: socialIds },
  },
  {
    cmd: "themes",
    desc: "check available themes",
    element: <Themes />,
    args: { action: "set", options: THEMES },
  },
  { cmd: "welcome", desc: "display hero section", element: <Welcome /> },
  { cmd: "whoami", desc: "about current user", element: <GeneralOutput>visitor</GeneralOutput> },
  { cmd: "cv", desc: "alias for `resume`", element: <Resume />, hidden: true },
];

export const VISIBLE_COMMANDS = COMMANDS.filter(({ hidden }) => !hidden);

export const COMMAND_NAMES = COMMANDS.map(({ cmd }) => cmd);

const byName = new Map(COMMANDS.map(command => [command.cmd, command]));

export const getCommand = (name: string) => byName.get(name);

export const isCommand = (name: string) => byName.has(name);
