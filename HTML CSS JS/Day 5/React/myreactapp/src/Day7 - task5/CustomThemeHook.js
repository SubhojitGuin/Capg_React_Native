import { useState } from "react";

export default function CustomThemeHook() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return { theme, toggleTheme };
}