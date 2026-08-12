import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// Unmount the rendered tree after every test so queries don't
// find leftover nodes from previous renders.
afterEach(() => {
    cleanup();
});
