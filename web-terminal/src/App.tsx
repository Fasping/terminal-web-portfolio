import { createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";



type ThemeSwitcher = (switchTheme: DefaultTheme) => void;

export const ThemeContext = createContext<ThemeSwitcher | null>(null);

function App() {
  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<DefaultTheme>(theme);

  useEffect(() => {
    window.addEventListener(
      "keydown",
      (e) => {
        ["ArrowUp", "ArrowDown"].includes(e.code) && e.preventDefault();
      },
      false
    );
  }, []);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded, theme]);

  useEffect(() => {
    const themeColor = theme.colors?.body;

    const updateMetaTagColors = () => {
      const metaThemeColor = document.querySelector("meta[name='theme-color']");
      const maskIcon = document.querySelector("link[rel='mask-icon']");
      const metaMsTileColor = document.querySelector(
        "meta[name='msapplication-TileColor']"
      );

      metaThemeColor && metaThemeColor.setAttribute("content", themeColor);
      metaMsTileColor && metaMsTileColor.setAttribute("content", themeColor);
      maskIcon && maskIcon.setAttribute("color", themeColor);
    };

    updateMetaTagColors();

  }, [selectedTheme, theme.colors?.body]);

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