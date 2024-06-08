import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./custom-datepicker.css";
import useTheme from "../context/useTheme";
import { darkTheme } from "../Theme/darkTheme";

const Modal = ({ onClose, handleSubmit, taskToEdit }) => {
  const { theme } = useTheme();
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [important, setImportant] = useState(false);
  const [doItNow, setDoItNow] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDes(taskToEdit.des);
      setStartDate(new Date(taskToEdit.date));
      setIsCompleted(taskToEdit.isCompleted);
      setImportant(taskToEdit.important);
      setDoItNow(taskToEdit.doItNow);
    }
  }, [taskToEdit]);

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit({
      title,
      des,
      date: startDate.toISOString().split("T")[0],
      important,
      doItNow,
      isCompleted,
    });
  };

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
        className={`relative flex flex-col justify-evenly gap-5  border border-gray-300 rounded-lg p-6 w-full max-w-md mx-4 overflow-hidden ${
          theme === darkTheme ? "bg-zinc-800" : "bg-gray-50"
        }`}
      >
        <div className="modal-header flex justify-between bg-inherit">
          <h1 className="text-2xl  bg-inherit">Create a Task</h1>
          <button onClick={onClose} className="text-xl bg-inherit">
            X
          </button>
        </div>

        <form
          id="modal-form"
          onSubmit={submitForm}
          className="flex flex-col gap-4 bg-inherit"
        >
          <label
            htmlFor="title"
            className="bg-inherit flex flex-col gap-2 text-lg"
          >
            Title
            <input
              required
              id="title"
              name="title"
              type="text"
              placeholder="Hello World"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              id="description"
              name="description"
              type="text"
              value={des}
              onChange={(e) => setDes(e.target.value)}
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
              id="date"
              selected={startDate}
              onChange={(selectedDate) => setStartDate(selectedDate)}
              dateFormat="dd/MM/yyyy"
              minDate={startDate}
              maxDate={new Date(2030, 11, 31)}
              className={` w-full py-1.5 px-2 outline-none ${
                theme === darkTheme ? "bg-black" : "bg-gray-200"
              }`}
            />
          </label>

          <div className="toggle-next bg-inherit flex flex-col gap-4">
            <h1 className="bg-inherit flex justify-between">
              Important
              <input
                onClick={(e) => setImportant(e.target.checked)}
                type="checkbox"
              />
            </h1>
            <h1 className="bg-inherit flex justify-between">
              Do It Now
              <input
                onClick={(e) => setDoItNow(e.target.checked)}
                type="checkbox"
              />
            </h1>
            <h1 className="bg-inherit flex justify-between">
              Completed
              <input
                onClick={(e) => setIsCompleted(e.target.checked)}
                type="checkbox"
              />
            </h1>
          </div>
          <div className="create-task-btn bg-inherit justify-self self-center md:pl-32">
            <button
              type="submit"
              className="text-xl text-white flex justify-center gap-2 items-center bg-blue-500 rounded-lg py-1 px-2 hover:bg-blue-600"
            >
              <FaPlus className="bg-inherit" />
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  taskToEdit: PropTypes.object,
};

export default Modal;
