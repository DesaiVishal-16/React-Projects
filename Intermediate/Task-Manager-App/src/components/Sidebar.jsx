import userImg from "../assets/userImg.jpg";
import { MdHome } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import useTheme from "../context/useTheme";
import { lightTheme } from "../Theme/lightTheme";
import { useState } from "react";
import { RiMenuUnfold3Line, RiMenuFold3Fill } from "react-icons/ri";

const Sidebar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute lg:relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block lg:hidden text-gray-500 focus:outline-none p-4"
      >
        {isOpen ? (
          <RiMenuFold3Fill className="text-white text-2xl" />
        ) : (
          <RiMenuUnfold3Line className="text-white text-2xl" />
        )}
      </button>

      <div
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        className={`side-bar flex flex-col  bg-zinc-800 border-2 border-gray-600 rounded-lg w-64 h-full overflow-hidden fixed top-0 left-0 transition-transform transform
         ${
           isOpen ? "translate-x-0" : "-translate-x-full"
         } lg:translate-x-0 lg:relative lg:flex lg:h-full lg:overflow-hidden`}
      >
        <div className="profile flex flex-col items-center p-6 bg-inherit">
          <img
            src={userImg}
            className="w-16 h-16 rounded-full border-2 border-gray-500"
            alt="User"
          />
          <h1 className="text-2xl truncate mt-4 bg-inherit">John ddg</h1>
        </div>
        <div className="nav-bar mt-40 bg-inherit">
          <ul className="flex flex-col gap-3 bg-inherit pb-20">
            <li
              className={`flex items-center gap-3 px-10 py-3 bg-inherit text-lg hover:border-r-4 hover:border-green-500 cursor-pointer
            ${
              theme === lightTheme ? "hover:bg-gray-200" : "hover:bg-zinc-700"
            }`}
            >
              <MdHome className="text-2xl bg-inherit" />
              All Task
            </li>
            <li
              className={`flex items-center gap-3 px-10 py-3 bg-inherit text-lg hover:border-r-4 hover:border-green-500 cursor-pointer
            ${
              theme === lightTheme ? "hover:bg-gray-200" : "hover:bg-zinc-700"
            }`}
            >
              <FaListCheck className="text-xl bg-inherit" />
              Important
            </li>
            <li
              className={`flex items-center gap-3 px-10 py-3 bg-inherit text-lg hover:border-r-4 hover:border-green-500 cursor-pointer
            ${
              theme === lightTheme ? "hover:bg-gray-200" : "hover:bg-zinc-700"
            }`}
            >
              <FaCheck className="text-xl bg-inherit" />
              Completed
            </li>
            <li
              className={`flex items-center gap-3 px-10 py-3 bg-inherit text-lg hover:border-r-4 hover:border-green-500 cursor-pointer
            ${
              theme === lightTheme ? "hover:bg-gray-200" : "hover:bg-zinc-700"
            }`}
            >
              <LuClipboardList className="text-xl bg-inherit" />
              Do it Now
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <RiMenuFold3Fill
          onClick={() => setIsOpen(false)}
          className="fixed left-56 top-5 text-white text-2xl inset-0 bg-inherit opacity-50 lg:hidden"
        ></RiMenuFold3Fill>
      )}
    </div>
  );
};

export default Sidebar;
