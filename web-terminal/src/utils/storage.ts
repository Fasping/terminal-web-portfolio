/**
 * localStorage throws in Safari private mode and when storage is disabled,
 * so every access is guarded.
 */
export const setToLS = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable — not worth breaking the terminal over */
  }
};

export const getFromLS = (key: string): string | null => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};
