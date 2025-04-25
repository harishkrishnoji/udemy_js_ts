import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-1 rounded-full hover:bg-gray-700 transition-colors duration-300"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <SunIcon className="w-5 h-5 text-white" />
      ) : (
        <MoonIcon className="w-5 h-5 text-white" />
      )}
    </button>
  );
}
export default ThemeToggle;