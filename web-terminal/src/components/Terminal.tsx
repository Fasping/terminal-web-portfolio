import React, { useCallback, useEffect, useRef, useState } from "react";
import Output from "./Output";
import TermInfo from "./TermInfo";
import styles from "../styles/terminal.module.css";
import { COMMAND_NAMES, isCommand } from "../commands/registry";
import { Term, termContext } from "../context/terminal";
import { argTab } from "../utils/funcs";

const Terminal = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [inputValue, setInputValue] = useState<string>("");
    const [cmdHistory, setCmdHistory] = useState<string[]>(["welcome"]);
    const [rerender, setRerender] = useState<boolean>(false);
    const [hints, setHints] = useState<string[]>([]);
    const [pointer, setPointer] = useState<number>(-1);

    // Clicking anywhere focuses the prompt, but not at the cost of losing a
    // text selection or swallowing a click on a link.
    useEffect(() => {
        const handleDocumentClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;

            if (target?.closest("a, button")) return;
            if (window.getSelection()?.toString()) return;

            inputRef.current?.focus();
        };

        document.addEventListener("click", handleDocumentClick);
        return () => document.removeEventListener("click", handleDocumentClick);
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

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            setRerender(false);
            const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
            const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

            if (e.key === "Tab" || ctrlI) {
                e.preventDefault();
                if (!inputValue) return;

                let hintsCmds = COMMAND_NAMES.filter(cmd => cmd.startsWith(inputValue));

                const returnedHints = argTab(inputValue, setInputValue, setHints, hintsCmds);
                hintsCmds = returnedHints ? [...hintsCmds, ...returnedHints] : hintsCmds;

                if (hintsCmds.length > 1) {
                    setHints(hintsCmds);
                } else if (hintsCmds.length === 1) {
                    const currentCmd = inputValue.split(" ");
                    setInputValue(
                        currentCmd.length !== 1
                            ? `${currentCmd[0]} ${currentCmd[1]} ${hintsCmds[0]}`
                            : hintsCmds[0]
                    );
                    setHints([]);
                }
            }

            if (ctrlL) clearHistory();

            if (e.key === "ArrowUp") {
                // Stops the caret jumping to the start of the input.
                e.preventDefault();
                if (pointer + 1 >= cmdHistory.length) return;

                setInputValue(cmdHistory[pointer + 1]);
                setPointer(prev => prev + 1);
            }

            if (e.key === "ArrowDown") {
                e.preventDefault();
                if (pointer < 0) return;

                if (pointer === 0) {
                    setInputValue("");
                    setPointer(-1);
                    return;
                }

                setInputValue(cmdHistory[pointer - 1]);
                setPointer(prev => prev - 1);
            }
        },
        [inputValue, cmdHistory, pointer, clearHistory]
    );

    useEffect(() => {
        const timer = setTimeout(() => inputRef.current?.focus(), 1);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={styles.wrapper}
            data-testid="terminal-wrapper"
            ref={containerRef}
            role="log"
            aria-live="polite"
            aria-label="Terminal output"
        >
            {hints.length > 1 && (
                <div>
                    {hints.map(hint => (
                        <span className={styles.hint} key={hint}>
                            {hint}
                        </span>
                    ))}
                </div>
            )}
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="terminal-input">
                    <TermInfo /> <br className={styles.mobileBr} />
                    <span className={styles.mobileSpan}>&#62;</span>
                </label>
                <input
                    className={styles.input}
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
            </form>

            {cmdHistory.map((cmdH, index) => {
                const [name, ...args] = cmdH.trim().split(" ");
                const contextValue: Term = {
                    arg: args,
                    history: cmdHistory,
                    rerender,
                    index,
                    clearHistory,
                };

                return (
                    <div key={`${cmdH}_${index}`}>
                        <div>
                            <TermInfo />
                            <br className={styles.mobileBr} />
                            <span className={styles.mobileSpan}>&#62;</span>
                            <span data-testid="input-command">{cmdH}</span>
                        </div>
                        {isCommand(name) ? (
                            <termContext.Provider value={contextValue}>
                                <Output index={index} cmd={name} />
                            </termContext.Provider>
                        ) : cmdH === "" ? (
                            <div className={styles.empty} />
                        ) : (
                            <div className={styles.notFound} data-testid={`not-found-${index}`}>
                                command not found: {cmdH}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Terminal;
