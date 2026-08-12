/** Theme names. The colours themselves live in `styles/themes.css`. */
export const THEMES = [
  "dark",
  "light",
  "blue-matrix",
  "espresso",
  "green-goblin",
  "ubuntu",
  "tokyo-night",
  "catppuccin",
] as const;

export type ThemeName = (typeof THEMES)[number];

export const DEFAULT_THEME: ThemeName = "dark";

export const THEME_STORAGE_KEY = "tsn-theme";

export const isThemeName = (value: unknown): value is ThemeName =>
  typeof value === "string" && (THEMES as readonly string[]).includes(value);

/** Applies a theme by flipping one attribute on <html>. */
export const applyTheme = (theme: ThemeName) => {
  document.documentElement.dataset.theme = theme;
};
