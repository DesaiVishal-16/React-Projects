import { useState } from 'react'
import Draggable from 'react-draggable'
import PropTypes from 'prop-types'

const Text = ({color}) => {
    const [editMode,setEditMode] = useState(false)
    const [val,setVal] = useState("Double Click")
  return (
    <Draggable>
          {
            editMode ? (<input className="text-black bg-white" onDoubleClick={()=>setEditMode(false)} value={val} onChange={(e)=>setVal(e.target.value)}/>) 
            
            : (<h1 style={{color:color}} onClick={()=>setEditMode(true)} className="text-2xl text-yellow-500 bg-transparent cursor-move">{val}</h1>)
          }
    </Draggable> 
  )
}
Text.propTypes={
    color:PropTypes.string.isRequired,
}
export default Text