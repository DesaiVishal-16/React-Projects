import { FaPlusCircle } from "react-icons/fa";
import PropTypes from 'prop-types'

const BookHeader = ({toggleModalBtn}) => {
    
  return (
    <div className='header'>
        <img src="logo.svg" alt="logo-img"/>
        <h1>Address Book</h1>
        <button onClick={toggleModalBtn}><FaPlusCircle/> <span>New Contact</span></button>
      </div>
  )
}
BookHeader.propTypes={
    toggleModalBtn:PropTypes.func
}
export default BookHeader