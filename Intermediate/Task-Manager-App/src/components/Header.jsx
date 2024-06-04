import useTheme from "../context/useTheme";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { darkTheme } from "../Theme/darkTheme";
import { IoIosAddCircleOutline } from "react-icons/io";
import { lightTheme } from "../Theme/lightTheme";
import PropTypes from "prop-types";

const Header = ({ onOpen }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="flex items-center justify-between"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div className="flex flex-col gap-2 order-1 bg-inherit">
        <h1 className="bg-inherit text-xl md:text-3xl font-bold">All Task</h1>
        <span
          className={`w-14 border-2 ${
            theme === lightTheme ? "border-gray-800" : "border-gray-200"
          }`}
        ></span>
      </div>

      <div className="flex items-center gap-4 order-last bg-transparent">
        <div className="bg-transparent cursor-pointer">
          {theme === darkTheme ? (
            <MdDarkMode
              className="text-2xl fill-white bg-inherit"
              onClick={toggleTheme}
            />
          ) : (
            <MdLightMode
              className="text-black text-2xl bg-inherit"
              onClick={toggleTheme}
            />
          )}
        </div>

        <div className="bg-transparent">
          <button className="addTask-btn" onClick={onOpen}>
            <IoIosAddCircleOutline
              className={`bg-inherit text-4xl ${
                theme === lightTheme ? "fill-gray-600" : "fill-gray-300"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
export default Header;
