import { useCallback, useEffect, useState } from "react";
import {
  applyTheme,
  DEFAULT_THEME,
  isThemeName,
  THEME_STORAGE_KEY,
  ThemeName,
} from "../themes";
import { getFromLS, setToLS } from "../utils/storage";

/** Read synchronously so the first render already has the right theme. */
const readStoredTheme = (): ThemeName => {
  const stored = getFromLS(THEME_STORAGE_KEY);
  return isThemeName(stored) ? stored : DEFAULT_THEME;
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeName>(readStoredTheme);

  // The inline script in index.html already set this before first paint;
  // this keeps it correct if storage and DOM ever disagree.
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setMode = useCallback((mode: ThemeName) => {
    applyTheme(mode);
    setToLS(THEME_STORAGE_KEY, mode);
    setTheme(mode);
  }, []);

  return { theme, setMode };
};
