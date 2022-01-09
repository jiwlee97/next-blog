import { useState, useCallback } from "react";
import DarkTheme from "./DarkTheme";

const loadDarkMode = () => {
  if (typeof localStorage === "undefined") {
    return false;
  }
  const value = localStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
};

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  const handleClick = useCallback(() => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode((prev) => !prev);
  }, []);

  console.log("[ThemeSwitch] darkMode: ", darkMode);

  return (
    <>
      <button type="button" onClick={handleClick} suppressHydrationWarning>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {darkMode && <DarkTheme />}
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ThemeSwitch;
