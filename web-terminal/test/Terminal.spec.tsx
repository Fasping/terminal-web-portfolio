import React from 'react';

import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Terminal from "../src/components/Terminal";

describe("Terminal Component", () => {
    let terminalInput;

    beforeEach(() => {
        render(<Terminal />);
        terminalInput = screen.getByTitle("terminal-input");
    });

    describe("Input Features & Initial State", () => {
        it("should display welcome cmd by default", () => {
            expect(screen.getByTestId("input-command").textContent).toBe("welcome");
        });

        it("should change input value", async () => {
            await userEvent.type(terminalInput, "demo");
            expect(terminalInput.value).toBe("demo");
        });

        it("should clear input value when click enter", async () => {
            await userEvent.type(terminalInput, "demo{enter}");
            expect(terminalInput.value).toBe("");
        });
    });

    // Other test cases...
});
