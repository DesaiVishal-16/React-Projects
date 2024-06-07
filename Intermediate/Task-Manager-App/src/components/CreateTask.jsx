import { FaPlus } from "react-icons/fa";
import useTheme from "../context/useTheme";
import PropTypes from "prop-types";

const CreateTask = ({ onClick }) => {
  const { theme } = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      className={`border-2 border-gray-700 bg-zinc-800 rounded-xl w-60 h-48 flex justify-center items-center gap-2 max-w-sm shadow-lg hover:scale-95 hover:ease-in hover:delay-100 hover:bg-green-400 cursor-pointer `}
      onClick={onClick}
    >
      <FaPlus className="text-lg bg-inherit" />
      <span className="text-md bg-inherit">Add New Task</span>
    </div>
  );
};
CreateTask.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default CreateTask;
