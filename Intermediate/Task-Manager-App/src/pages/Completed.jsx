import { useOutletContext } from "react-router-dom";
import TaskCard from "../components/TaskCard";

const Completed = () => {
  const { tasks, handleDelete, handleEdit, handleToggle } = useOutletContext();
  const urgentTasks = tasks
    ? tasks.filter((task) => task.isCompleted === true)
    : [];
  return (
    <div className="important-lists grid grid-cols-1 sm:justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 bg-inherit">
      {urgentTasks.length > 0 ? (
        urgentTasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            des={task.des}
            date={task.date}
            isCompleted={true}
            handleEdit={() => handleEdit(index)}
            handleDelete={() => handleDelete(index)}
            handleToggle={() => handleToggle(index)}
          />
        ))
      ) : (
        <div className="bg-inherit text-2xl col-span-2 w-full text-center mt-28 md:mt-40 lg:mt-40 lg:ml-60 md:text-4xl">
          You have tasks that are not yet completed.
        </div>
      )}
    </div>
  );
};

export default Completed;
