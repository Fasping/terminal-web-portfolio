import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import { DEFAULT_THEME, THEME_STORAGE_KEY } from "../src/themes";

describe("App", () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.removeAttribute("data-theme");
        render(<App />);
    });

    it("starts on the default theme", () => {
        expect(document.documentElement.dataset.theme).toBe(DEFAULT_THEME);
    });

    it("switches theme and remembers the choice", async () => {
        await userEvent.type(screen.getByTitle("terminal-input"), "themes set tokyo-night{enter}");

        expect(document.documentElement.dataset.theme).toBe("tokyo-night");
        expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("tokyo-night");
    });
});
