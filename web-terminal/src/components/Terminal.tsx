import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import { CmdNotFound, Empty, Form, Hints, Input, MobileBr, MobileSpan, Wrapper } from "./styles/Terminal.styled";
import { argTab } from "../utils/funcs";

type Command = {
    cmd: string;
    desc: string;
    tab: number;
}[];

// eslint-disable-next-line react-refresh/only-export-components
export const commands: Command = [
    { cmd: "about", desc: "about Fernando Cases", tab: 8 },
    { cmd: "clear", desc: "clear the terminal", tab: 8 },
    { cmd: "echo", desc: "print out anything", tab: 9 },
    { cmd: "education", desc: "my education background", tab: 4 },
    { cmd: "email", desc: "send an email to me", tab: 8 },
    { cmd: "help", desc: "check available commands", tab: 9 },
    { cmd: "history", desc: "view command history", tab: 6 },
    { cmd: "socials", desc: "check out my socials", tab: 6 },
    { cmd: "themes", desc: "check available themes", tab: 7 },
    { cmd: "welcome", desc: "display hero section", tab: 6 },
    { cmd: "whoami", desc: "about current user", tab: 7 },
];

type Term = {
    arg: string[];
    history: string[];
    rerender: boolean;
    index: number;
    clearHistory?: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const termContext = createContext<Term>({
    arg: [],
    history: [],
    rerender: false,
    index: 0,
});

const Terminal = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [inputValue, setInputValue] = useState<string>("");
    const [cmdHistory, setCmdHistory] = useState<string[]>(["welcome"]);
    const [rerender, setRerender] = useState<boolean>(false);
    const [hints, setHints] = useState<string[]>([]);
    const [pointer, setPointer] = useState<number>(-1);

    useEffect(() => {
        const handleDivClick = () => {
            inputRef.current && inputRef.current.focus();
        };

        document.addEventListener("click", handleDivClick);
        return () => {
            document.removeEventListener("click", handleDivClick);
        };
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRerender(false);
        setInputValue(e.target.value);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCmdHistory([inputValue, ...cmdHistory]);
        setInputValue("");
        setRerender(true);
        setHints([]);
        setPointer(-1);
    };

    const clearHistory = useCallback(() => {
        setCmdHistory(["help"]);
        setHints([]);
    }, []);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        setRerender(false);
        const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
        const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

        if (e.key === "Tab" || ctrlI) {
            e.preventDefault();
            if (!inputValue) return;

            let hintsCmds: string[] = [];
            commands.forEach(({ cmd }) => {
                if (_.startsWith(cmd, inputValue)) {
                    hintsCmds = [...hintsCmds, cmd];
                }
            });

            const returnedHints = argTab(inputValue, setInputValue, setHints, hintsCmds);
            hintsCmds = returnedHints ? [...hintsCmds, ...returnedHints] : hintsCmds;

            if (hintsCmds.length > 1) {
                setHints(hintsCmds);
            } else if (hintsCmds.length === 1) {
                const currentCmd = _.split(inputValue, " ");
                setInputValue(currentCmd.length !== 1 ? `${currentCmd[0]} ${currentCmd[1]} ${hintsCmds[0]}` : hintsCmds[0]);
                setHints([]);
            }
        }

        if (ctrlL) {
            clearHistory();
        }

        if (e.key === "ArrowUp") {
            if (pointer >= cmdHistory.length) return;

            if (pointer + 1 === cmdHistory.length) return;

            setInputValue(cmdHistory[pointer + 1]);
            setPointer(prevState => prevState + 1);
            inputRef?.current?.blur();
        }

        if (e.key === "ArrowDown") {
            if (pointer < 0) return;

            if (pointer === 0) {
                setInputValue("");
                setPointer(-1);
                return;
            }

            setInputValue(cmdHistory[pointer - 1]);
            setPointer(prevState => prevState - 1);
            inputRef?.current?.blur();
        }
    }, [inputValue, cmdHistory, pointer, clearHistory]);

    useEffect(() => {
        const timer = setTimeout(() => {
            inputRef?.current?.focus();
        }, 1);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Wrapper data-testid="terminal-wrapper" ref={containerRef}>
            {hints.length > 1 && (
                <div>
                    {hints.map(hCmd => (
                        <Hints key={hCmd}>{hCmd}</Hints>
                    ))}
                </div>
            )}
            <Form onSubmit={handleSubmit}>
                <label htmlFor="terminal-input">
                    <TermInfo /> <MobileBr />
                    <MobileSpan>&#62;</MobileSpan>
                </label>
                <Input
                    title="terminal-input"
                    type="text"
                    id="terminal-input"
                    autoComplete="off"
                    spellCheck="false"
                    autoFocus
                    autoCapitalize="off"
                    ref={inputRef}
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                />
            </Form>

            {cmdHistory.map((cmdH, index) => {
                const commandArray = _.split(_.trim(cmdH), " ");
                const validCommand = _.find(commands, { cmd: commandArray[0] });
                const contextValue: Term = {
                    arg: _.drop(commandArray),
                    history: cmdHistory,
                    rerender,
                    index,
                    clearHistory,
                };

                return (
                    <div key={`${cmdH}_${index}`}>
                        <div>
                            <TermInfo />
                            <MobileBr />
                            <MobileSpan>&#62;</MobileSpan>
                            <span data-testid="input-command">{cmdH}</span>
                        </div>
                        {validCommand ? (
                            <termContext.Provider value={contextValue}>
                                <Output index={index} cmd={commandArray[0]} />
                            </termContext.Provider>
                        ) : cmdH === "" ? (
                            <Empty />
                        ) : (
                            <CmdNotFound data-testid={`not-found-${index}`}>
                                command not found: {cmdH}
                            </CmdNotFound>
                        )}
                    </div>
                );
            })}
        </Wrapper>
    );
};

export default Terminal;