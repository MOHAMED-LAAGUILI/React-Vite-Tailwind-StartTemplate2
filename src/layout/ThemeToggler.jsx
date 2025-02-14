import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-lg border"
    >
      {theme === "dark" ? <MdOutlineWbSunny  className="w-6 h-6 text-yellow-400" /> : <IoMoonOutline  className="w-6 h-6 text-blue-900" />}
    </button>
  );
};

export default ThemeToggle;
