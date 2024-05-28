import PropTypes from 'prop-types'
import { ImSearch } from "react-icons/im";

const FetchButton = ({onClick}) => {
  return (
    <div>
        <button className="bg-blue-800 p-2 rounded-r-md hover:bg-blue-700 border-none" onClick={onClick}><ImSearch className='text-xl text-white'/></button>
    </div>
  )
}
FetchButton.propTypes={
    onClick : PropTypes.func.isRequired,
}
export default FetchButton