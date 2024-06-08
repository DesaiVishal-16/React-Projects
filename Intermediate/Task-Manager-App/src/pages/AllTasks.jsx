import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";
import { useOutletContext } from "react-router-dom";

const AllTasks = () => {
  const { tasks, handleOpenModal, handleDelete, handleEdit, handleToggle } =
    useOutletContext();

  return (
    <div className="tasks-lists grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 bg-inherit">
      {tasks &&
        tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            des={task.des}
            date={task.date}
            isCompleted={task.isCompleted}
            handleEdit={() => handleEdit(index)}
            handleDelete={() => handleDelete(index)}
            handleToggle={() => handleToggle(index)}
          />
        ))}

      <CreateTask onClick={handleOpenModal} />
    </div>
  );
};

export default AllTasks;
