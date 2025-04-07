import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-toggle-button">
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
}

export default ThemeToggle;
