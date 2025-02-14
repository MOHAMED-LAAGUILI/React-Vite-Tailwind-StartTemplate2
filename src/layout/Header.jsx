import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuData from "./MenuData";
import ThemeToggler from "./ThemeToggler";
import { FaAngleDown } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full bg-white bg-opacity-30 backdrop-blur-sm transition-all duration-300 ${
        sticky ? "shadow-md" : ""
      } dark:bg-gray-900 dark:bg-opacity-30`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042"
              alt="logo"
              className="w-16 h-10"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Logo
            </span>
          </Link>

          <div className="hidden lg:flex items-center justify-center flex-grow">
            <nav>
              <ul className="flex space-x-8">
                {menuData.map((menuItem, index) => (
                  <li key={menuItem.id} className="relative group">
                    {menuItem.path ? (
                      <Link
                        to={menuItem.path}
                        className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                        >
                          {menuItem.title}
                          <FaAngleDown className="ml-1 mt-1" />
                          </button>
                        <div
                          className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                            openIndex === index
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          }`}
                        >
                          <div className="py-1">
                            {menuItem.submenu.map((submenuItem) => (
                              <Link
                                key={submenuItem.id}
                                to={submenuItem.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggler />
            <div className="lg:hidden">
              <button
                onClick={navbarToggleHandler}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none transition-all delay-300 "
              >
                {navbarOpen ? (
                  <AiOutlineClose  size={30} className="mt-2" />
                ) : (
                  <HiMiniBars3BottomRight  size={30} className="mt-2" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${navbarOpen ? "block" : "hidden"}`}>
        <nav className="px-4 pt-2 pb-4 space-y-2 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90">
          {menuData.map((menuItem, index) => (
            <div key={menuItem.id}>
              {menuItem.path ? (
                <Link
                  to={menuItem.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {menuItem.title}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => handleSubmenu(index)}
                    className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    {menuItem.title}
                    <FaAngleDown />
                  </button>
                  <div
                    className={`mt-2 space-y-2 ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {menuItem.submenu.map((submenuItem) => (
                      <Link
                        key={submenuItem.id}
                        to={submenuItem.path}
                        className="block pl-6 pr-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
