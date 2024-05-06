import { useState } from "react";
import PropTypes from 'prop-types';

useState

const InputAddTask = ({onClick}) => {
  
    const [inputVal, setInputVal] = useState("");

    function handleAdditems(e) {
      e.preventDefault();
      if(inputVal === "") return
      onClick(inputVal)
      setInputVal("")
    }
    

  return (
    <div className='newTask'>
    <input className="input-task" placeholder="Type Task..." value={inputVal} onChange={e => setInputVal(e.target.value)} type="text" />
    <button className='addTaskBtn' onClick={handleAdditems}>ADD</button>
  </div>
  )
}
InputAddTask.propTypes = {
  onClick: PropTypes.func.isRequired,
};


export default InputAddTask