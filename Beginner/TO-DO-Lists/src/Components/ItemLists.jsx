import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ItemLists = ({completed,id,title,handleChecked,handleDeleteTask}) => {
  return (
    <li className='list-item'>
    <input className="checkbox" type="checkbox" onChange={(e) => handleChecked(e, id)} checked={completed} />
     <span className='task-text' style={{ textDecoration: completed ? 'line-through' : 'none'}}>{title}</span>
     <button className='deleteBtn' onClick={()=>(handleDeleteTask(id))}><FontAwesomeIcon className="deleteIcon" icon={faTrash} /></button>
   </li>
  )
}
ItemLists.propTypes={
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      handleChecked:PropTypes.func.isRequired,
      handleDeleteTask:PropTypes.func.isRequired
}

export default ItemLists