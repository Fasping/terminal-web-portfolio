import { createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";

type ThemeSwitcher = (switchTheme: DefaultTheme) => void;

export const ThemeContext = createContext<ThemeSwitcher>(() => { }); // Provide a dummy function for compatibility

function App() {
  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<DefaultTheme>(theme);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown"].includes(e.code)) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded, theme]);

  useEffect(() => {
    const updateMetaTagColors = () => {
      const themeColor = selectedTheme.colors?.body;

      const metaThemeColor = document.querySelector("meta[name='theme-color']");
      const maskIcon = document.querySelector("link[rel='mask-icon']");
      const metaMsTileColor = document.querySelector("meta[name='msapplication-TileColor']");

      if (metaThemeColor) metaThemeColor.setAttribute("content", themeColor);
      if (maskIcon) maskIcon.setAttribute("color", themeColor);
      if (metaMsTileColor) metaMsTileColor.setAttribute("content", themeColor);
    };

    updateMetaTagColors();
  }, [selectedTheme]);

  const themeSwitcher: ThemeSwitcher = (switchTheme) => {
    setSelectedTheme(switchTheme);
    setMode(switchTheme);
  };

  return (
    <>
      <h1 className="sr-only" aria-label="Terminal Portfolio">
        Terminal Portfolio
      </h1>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle theme={selectedTheme} />
          <ThemeContext.Provider value={themeSwitcher}>
            <Terminal />
          </ThemeContext.Provider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
