import { createContext, useEffect } from "react";
import { profile } from "./data/profile";
import { useTheme } from "./hooks/useTheme";
import Terminal from "./components/Terminal";
import TerminalWindow from "./components/TerminalWindow";
import { ThemeName } from "./themes";

type ThemeSwitcher = (theme: ThemeName) => void;

export const ThemeContext = createContext<ThemeSwitcher>(() => {});

function App() {
  const { theme, setMode } = useTheme();

  // Keep the browser chrome (mobile address bar, pinned tab) in sync with the theme.
  useEffect(() => {
    const bodyColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-body")
      .trim();

    if (!bodyColor) return;

    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bodyColor);
    document
      .querySelector("meta[name='msapplication-TileColor']")
      ?.setAttribute("content", bodyColor);
    document.querySelector("link[rel='mask-icon']")?.setAttribute("color", bodyColor);
  }, [theme]);

  return (
    <>
      <h1 className="sr-only">
        {profile.name} — {profile.role}
      </h1>
      <ThemeContext.Provider value={setMode}>
        <TerminalWindow>
          <Terminal />
        </TerminalWindow>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
