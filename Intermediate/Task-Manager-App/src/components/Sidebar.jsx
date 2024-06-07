import { MdHome } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import useTheme from "../context/useTheme";
import { lightTheme } from "../Theme/lightTheme";
import { useState } from "react";
import { RiMenuUnfold3Line, RiMenuFold3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinkClass = (isActive, lightActiveClass, darkActiveClass) => {
    const baseClass = `flex items-center gap-3 px-8 py-3 bg-inherit text-lg hover:border-r-4 hover:border-green-500 cursor-pointer`;
    const hoverClass =
      theme === lightTheme ? "hover:bg-gray-200" : "hover:bg-zinc-700";
    const activeClass = isActive
      ? theme === lightTheme
        ? lightActiveClass
        : darkActiveClass
      : "";
    return `${baseClass} ${hoverClass} ${activeClass}`;
  };

  return (
    <div className="absolute md:relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block lg:hidden text-gray-500 focus:outline-none p-4"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <RiMenuFold3Fill className="text-white text-2xl" />
        ) : (
          <RiMenuUnfold3Line className="text-white text-2xl" />
        )}
      </button>

      <div
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        className={`side-bar flex flex-col border-2 border-gray-600 rounded-lg  w-64 h-full  fixed top-0 left-0 transition-transform transform
         ${
           isOpen ? "translate-x-0" : "-translate-x-full"
         } lg:translate-x-0 lg:relative overflow-hidden`}
      >
        <div className="profile flex flex-col items-center pt-6 bg-inherit">
          <img
            src="logo.png"
            className="w-16 fill-white h-16 rounded-full border-2 border-gray-500"
            alt="User"
          />
          <h1 className="text-2xl mt-4 bg-inherit ">TaskEase</h1>
        </div>
        <nav className="nav-bar mt-40 bg-inherit">
          <ul className="flex flex-col gap-3 bg-inherit pb-20">
            <NavLink
              to="/"
              className={({ isActive }) =>
                NavLinkClass(
                  isActive,
                  "bg-zinc-300 border-r-4 border-green-500",
                  "bg-zinc-700 border-r-4 border-green-500"
                )
              }
            >
              <MdHome className="text-2xl bg-inherit" />
              All Task
            </NavLink>
            <NavLink
              to="/important"
              className={({ isActive }) =>
                NavLinkClass(
                  isActive,
                  "bg-zinc-300 border-r-4 border-green-500",
                  "bg-zinc-700 border-r-4 border-green-500"
                )
              }
            >
              <FaListCheck className="text-xl bg-inherit" />
              Important
            </NavLink>
            <NavLink
              to="/completed"
              className={({ isActive }) =>
                NavLinkClass(
                  isActive,
                  "bg-zinc-300 border-r-4 border-green-500",
                  "bg-zinc-700 border-r-4 border-green-500"
                )
              }
            >
              <FaCheck className="text-xl bg-inherit" />
              Completed
            </NavLink>
            <NavLink
              to="/do-it-now"
              className={({ isActive }) =>
                NavLinkClass(
                  isActive,
                  "bg-zinc-300 border-r-4 border-green-500",
                  "bg-zinc-700 border-r-4 border-green-500"
                )
              }
            >
              <LuClipboardList className="text-xl bg-inherit" />
              Do it Now
            </NavLink>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <RiMenuFold3Fill
          onClick={() => setIsOpen(false)}
          className="fixed left-56 top-5 text-white text-2xl inset-0 bg-gray-800 opacity-50 lg:hidden"
          aria-label="Close Sidebar"
        />
      )}
    </div>
  );
};

export default Sidebar;
