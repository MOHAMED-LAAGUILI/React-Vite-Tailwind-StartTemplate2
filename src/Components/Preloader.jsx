import { useEffect, useState } from "react";
import { tailChase } from "ldrs";

tailChase.register();

function Preloader() {
  const [theme, setTheme] = useState("light");

  // Detect theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-darkBg z-50 transition-opacity duration-500 ease-in-out">
      <l-tail-chase
        size="50"
        speed="1.5"
        color={theme === "dark" ? "#FFFFFF" : "#3758F9"}
        className="animate-fade-in"
      ></l-tail-chase>
    </div>
  );
}

export default Preloader;
