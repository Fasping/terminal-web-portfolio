import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Terminal from "../src/components/Terminal";
import { VISIBLE_COMMANDS } from "../src/commands/registry";
import { education } from "../src/data/education";
import { experience } from "../src/data/experience";
import { skills } from "../src/data/skills";
import { socials } from "../src/data/socials";
import { THEMES } from "../src/themes";

const run = async (command: string) => {
    const input = screen.getByTitle("terminal-input");
    await userEvent.type(input, `${command}{enter}`);
};

describe("Terminal", () => {
    beforeEach(() => {
        vi.stubGlobal("open", vi.fn());
        render(<Terminal />);
    });

    describe("input", () => {
        it("runs welcome by default", () => {
            expect(screen.getByTestId("input-command").textContent).toBe("welcome");
        });

        it("clears the input after submitting", async () => {
            await run("about");
            expect(screen.getByTitle("terminal-input")).toHaveValue("");
        });

        it("reports unknown commands", async () => {
            await run("nope");
            expect(screen.getByTestId("not-found-0")).toHaveTextContent(
                "command not found: nope"
            );
        });

        it("rejects arguments on commands that take none", async () => {
            await run("about tt");
            expect(screen.getByTestId("usage-output")).toHaveTextContent("Usage: about");
        });

        it("autocompletes a command with Tab", async () => {
            const input = screen.getByTitle("terminal-input");
            await userEvent.type(input, "expe{Tab}");
            expect(input).toHaveValue("experience");
        });

        it("recalls the previous command with ArrowUp", async () => {
            await run("skills");
            await userEvent.type(screen.getByTitle("terminal-input"), "{ArrowUp}");
            expect(screen.getByTitle("terminal-input")).toHaveValue("skills");
        });
    });

    describe("content commands", () => {
        it("lists every visible command in help, and no aliases", async () => {
            await run("help");
            const help = screen.getByTestId("help");

            VISIBLE_COMMANDS.forEach(({ cmd }) => {
                expect(within(help).getByText(cmd)).toBeInTheDocument();
            });
            expect(within(help).queryByText("cv")).not.toBeInTheDocument();
        });

        it("renders every job from the experience data", async () => {
            await run("experience");
            const output = screen.getByTestId("experience");

            experience.forEach(({ company }) => {
                expect(within(output).getByText(company)).toBeInTheDocument();
            });
        });

        it("renders every skill group", async () => {
            await run("skills");
            const output = screen.getByTestId("skills");

            skills.forEach(({ group }) => {
                expect(within(output).getByText(group)).toBeInTheDocument();
            });
        });

        it("renders every education entry", async () => {
            await run("education");
            const output = screen.getByTestId("education");

            education.forEach(({ title }) => {
                expect(within(output).getByText(title)).toBeInTheDocument();
            });
        });

        it("renders the about section", async () => {
            await run("about");
            expect(screen.getByTestId("about")).toHaveTextContent("Fernando Cases");
        });
    });

    describe("commands with arguments", () => {
        it("lists the socials", async () => {
            await run("socials");
            const output = screen.getByTestId("socials");

            socials.forEach(({ title, url }) => {
                expect(within(output).getByText(`${socials.find(s => s.title === title)?.id}. ${title}`)).toBeInTheDocument();
                expect(within(output).getByText(url)).toBeInTheDocument();
            });
        });

        it("opens a social link with `socials go <id>`", async () => {
            await run("socials go 1");
            expect(window.open).toHaveBeenCalledWith(socials[0].url, "_blank");
        });

        it("shows usage for an out-of-range social", async () => {
            await run("socials go 9");
            expect(screen.getByTestId("socials-invalid-arg")).toHaveTextContent(
                "Usage: socials go <social-no>"
            );
        });

        it("lists every theme", async () => {
            await run("themes");
            const output = screen.getByTestId("themes");

            THEMES.forEach(theme => {
                expect(within(output).getByText(theme)).toBeInTheDocument();
            });
        });

        it("shows usage for an unknown theme", async () => {
            await run("themes set nope");
            expect(screen.getByTestId("themes-invalid-arg")).toBeInTheDocument();
        });

        it("echoes its arguments", async () => {
            await run('echo "hello there"');
            expect(screen.getByTestId("latest-output")).toHaveTextContent("hello there");
        });
    });

    describe("clear", () => {
        it("resets the history to a single help entry", async () => {
            await run("about");
            await run("clear");
            expect(screen.getAllByTestId("input-command")).toHaveLength(1);
            expect(screen.getByTestId("help")).toBeInTheDocument();
        });
    });
});
