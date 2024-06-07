import Header from "./Header";
import useTheme from "../context/useTheme";
import { useEffect, useState } from "react";
import Modal from "../Model/Modal";
import { Outlet, useLocation } from "react-router-dom";
import { useStorage } from "../Hooks/useStorage";

const MainComponent = () => {
  const { theme } = useTheme();
  const [tasks, setTasks] = useStorage("tasks", []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const [isOpenModal, setIsOpenModal] = useStorage("isOpenModal", []);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => {
    setIsOpenModal(false);
    setTaskToEdit(null);
  };
  const [taskToEdit, setTaskToEdit] = useState(null);

  function handleSubmit(task) {
    setTasks((prevTasks) => {
      if (!Array.isArray(prevTasks)) {
        prevTasks = [];
      }

      if (taskToEdit !== null) {
        return prevTasks.map((t, i) => (i === taskToEdit.index ? task : t));
      } else {
        return [task, ...prevTasks];
      }
    });
    handleCloseModal();
  }

  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function handleEdit(index) {
    const taskEdit = tasks[index];
    setTaskToEdit({ ...taskEdit, index });
    handleOpenModal(taskEdit);
  }
  function handleToggle(index) {
    const updatedTask = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTask);
  }

  const location = useLocation();
  const pageTitle =
    {
      "/": "All Task",
      "/important": "Important",
      "/completed": "Completed",
      "/do-it-now": "Do It Now",
    }[location.pathname] || "All Task";

  return (
    <div
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      className="bg-zinc-800 border-2 border-gray-600 rounded-lg w-80 md:w-5/6 overflow-hidden p-5 md:p-10 my-20 mx-2 md:w-full lg:my-0"
    >
      <div className="common-header">
        <Header onOpen={handleOpenModal} pageTitle={pageTitle} />
      </div>

      <div className="modal">
        {isOpenModal && (
          <Modal
            onClose={handleCloseModal}
            handleSubmit={handleSubmit}
            taskToEdit={taskToEdit}
          />
        )}
      </div>

      <div className="all-components bg-inherit p-2 w-full h-[480px] overflow-y-auto hide-scrollbar">
        <Outlet
          context={{
            tasks,
            setTasks,
            handleOpenModal,
            handleDelete,
            handleEdit,
            handleToggle,
          }}
        />
      </div>
    </div>
  );
};

export default MainComponent;
