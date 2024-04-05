import { useEffect, useState } from "react";
import themes from "../components/styles/themes";
import { setToLS, getFromLS } from "../utils/storage";
import { DefaultTheme } from "styled-components";

type ThemeName = keyof typeof themes;

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.dark);
  const [themeLoaded, setThemeLoaded] = useState<boolean>(false);

  const setMode = (mode: DefaultTheme) => {
    setToLS("tsn-theme", mode.name);
    setTheme(mode);
  };

  useEffect(() => {
    const localThemeName = getFromLS("tsn-theme") as ThemeName | null;
    const selectedTheme = localThemeName ? themes[localThemeName] : themes.dark;
    setTheme(selectedTheme);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};