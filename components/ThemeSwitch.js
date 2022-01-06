import { useState, useCallback } from "react";
import DarkTheme from "./DarkTheme";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  console.log("[ThemeSwitch] darkMode: ", darkMode);

  return (
    <>
      <button type="button" onClick={toggleTheme}>
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
