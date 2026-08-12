import { COMMANDS, getCommand } from "../commands/registry";

/**
 * Check a command's arguments, e.g. `themes set ubuntu`.
 * @returns true when the arguments are *not* valid
 */
export const isArgInvalid = (
  arg: string[],
  action: string,
  options: readonly string[]
) => arg[0] !== action || !options.includes(arg[1]) || arg.length > 2;

/** Turns the latest history entry into `["socials", "go", "1"]`. */
export const getCurrentCmdArry = (history: string[]) =>
  (history[0] ?? "").trim().split(" ");

/** True when the submitted command is a valid `<cmd> go <id>` redirect. */
export const checkRedirect = (
  rerender: boolean,
  currentCommand: string[],
  command: string
): boolean => {
  const spec = getCommand(command);

  return (
    rerender &&
    currentCommand[0] === command &&
    currentCommand[1] === "go" &&
    currentCommand.length === 3 &&
    !!spec?.args?.options.includes(currentCommand[2])
  );
};

/** True when the submitted command is a valid `themes set <name>`. */
export const checkThemeSwitch = (
  rerender: boolean,
  currentCommand: string[],
  themes: readonly string[]
): boolean =>
  rerender &&
  currentCommand[0] === "themes" &&
  currentCommand[1] === "set" &&
  currentCommand.length === 3 &&
  themes.includes(currentCommand[2]);

/**
 * Tab completion for arguments. Everything is derived from the command
 * registry, so a new command with `args` gets completion for free.
 */
export const argTab = (
  inputVal: string,
  setInputVal: (value: React.SetStateAction<string>) => void,
  setHints: (value: React.SetStateAction<string[]>) => void,
  hintsCmds: string[]
): string[] | undefined => {
  const [name, action, option] = inputVal.split(" ");
  const spec = COMMANDS.find(command => command.cmd === name);

  if (!spec?.args) return;

  const expected = spec.args.action;

  // `themes ` or a partially typed action -> complete the action
  if (action !== undefined && action !== expected && expected.startsWith(action)) {
    setInputVal(`${name} ${expected}`);
    return [];
  }

  if (action !== expected) return;

  // `themes set ` -> list every option
  if (option === undefined || option === "") {
    setHints([...spec.args.options]);
    return [];
  }

  // `themes set u` -> narrow the list down
  return [
    ...hintsCmds,
    ...spec.args.options.filter(value => value.startsWith(option)),
  ];
};
