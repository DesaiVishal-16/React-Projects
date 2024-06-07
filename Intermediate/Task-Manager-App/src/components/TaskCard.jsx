import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import useTheme from "../context/useTheme";
import { darkTheme } from "../Theme/darkTheme";
import PropTypes from "prop-types";

const TaskCard = ({
  title,
  des,
  date,
  handleEdit,
  handleDelete,
  isCompleted,
  handleToggle,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col justify-between rounded-xl w-60 h-48 max-w-sm shadow-xl cursor-pointer py-2 px-3 ${
        theme === darkTheme
          ? "bg-neutral-700 border-2 border-gray-600"
          : "bg-gray-400 border-none text-neutral-100"
      }`}
    >
      <div className="tasks detail bg-inherit flex flex-col gap-3 capitalize">
        <h1 className="text-md bg-inherit whitespace-nowrap flex-grow overflow-x-auto w-full hide-scrollbar cursor-text">
          {title}
        </h1>
        <p className="text-sm bg-inherit break-all flex-grow overflow-y-auto h-16 hide-scrollbar cursor-text">
          {des}
        </p>
      </div>
      <div className="date bg-inherit pt-3 pl-1">
        <b className="text-sm bg-inherit">{date}</b>
      </div>
      <div className="tasks-btn bg-inherit flex items-center justify-between">
        <button
          onClick={handleToggle}
          className={`completed text-gray-200 flex justify-center items-center rounded-2xl w-28 h-7
            ${
              isCompleted
                ? "bg-green-600 hover:bg-green-500"
                : "bg-red-600 hover:bg-red-500 "
            }`}
        >
          {isCompleted ? "Completed" : "Incomplete"}
        </button>
        <button onClick={handleEdit} className="edit bg-inherit pl-12">
          <MdEditDocument className="text-2xl hover:fill-gray-200 bg-inherit" />
        </button>
        <button onClick={handleDelete} className="delete bg-inherit">
          <MdDelete className="text-2xl hover:fill-gray-200 bg-inherit" />
        </button>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string,
  des: PropTypes.string,
  date: PropTypes.string,
  isCompleted: PropTypes.bool,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  handleToggle: PropTypes.func,
};
export default TaskCard;
