import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      {theme === "dark" ? <FaSun className="w-6 h-6 text-yellow-400" /> : <FaMoon className="w-6 h-6 text-gray-900" />}
    </button>
  );
};

export default ThemeToggle;
