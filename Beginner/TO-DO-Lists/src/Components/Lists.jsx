import ItemLists from "./ItemLists"
import PropTypes from 'prop-types';


const Lists = ({todos,handleChecked,handleDeleteTask}) => {
  return (
    <div className='task-item'>
    {todos.map(todo => (
     <ItemLists {...todo} key={todo.id} handleChecked={handleChecked} handleDeleteTask={handleDeleteTask}/>
    ))}
     </div>
)
}
Lists.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })).isRequired,
    handleChecked:PropTypes.func.isRequired,
    handleDeleteTask:PropTypes.func.isRequired
  };

export default Lists

