import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./custom-datepicker.css"; // Import the custom styles
import useTheme from "../context/useTheme";
import { darkTheme } from "../Theme/darkTheme";

const Modal = ({ onClose }) => {
  const { theme } = useTheme();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div
      style={{
        backgroundColor: `${theme.backgroundColor}99`,
        color: theme.color,
      }}
      className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-20"
    >
      <div
        style={{ color: theme.color }}
        className={`relative flex flex-col justify-evenly gap-5 bg-zinc-800 border border-gray-300 rounded-lg p-6 w-full max-w-md mx-4 overflow-hidden ${
          theme === darkTheme ? "" : "bg-gray-50"
        }`}
      >
        <div className="modal-header flex justify-between bg-inherit">
          <h1 className="text-2xl  bg-inherit">Create a Task</h1>
          <button onClick={onClose} className="text-xl bg-inherit">
            X
          </button>
        </div>
        <div className="text-task-fields flex flex-col gap-4 bg-inherit">
          <label
            htmlFor="title"
            className="bg-inherit flex flex-col gap-2 text-lg"
          >
            Title
            <input
              name="title"
              type="text"
              placeholder="Hello World"
              className={`rounded-sm py-1.5 px-2 outline-none ${
                theme === darkTheme ? "bg-black" : "bg-gray-200"
              }`}
            />
          </label>
          <label
            htmlFor="description"
            className="bg-inherit flex flex-col gap-2 text-lg"
          >
            Description
            <textarea
              name="description"
              type="text"
              placeholder="Watch a video about Next.js"
              className={`rounded-sm py-1.5 px-2 outline-none ${
                theme === darkTheme ? "bg-black" : "bg-gray-200"
              }`}
            />
          </label>
          <label
            htmlFor="date"
            className="bg-inherit flex flex-col gap-2 text-lg"
          >
            Date
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={startDate}
              maxDate={new Date(2030, 11, 31)}
              className={`bg-inherit w-full py-1.5 px-2 outline-none ${
                theme === darkTheme ? "bg-black" : "bg-gray-200"
              }`}
            />
          </label>
        </div>
        <div className="toggle-next bg-inherit flex flex-col gap-4">
          <h1 className="bg-inherit flex justify-between">
            Toggle Completed <input type="checkbox" />
          </h1>
          <h1 className="bg-inherit flex justify-between">
            Toggle Important <input type="checkbox" />
          </h1>
        </div>
        <div className="create-task-btn bg-inherit pl-10 md:pl-32">
          <button className="text-xl text-white flex justify-center gap-2 items-center bg-blue-500 rounded-lg py-1 px-2 hover:bg-blue-600">
            <FaPlus className="bg-inherit" />
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
