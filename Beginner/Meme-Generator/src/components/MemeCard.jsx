import PropTypes from 'prop-types'


const MemeCard = ({src,name,onClick}) => {

  return (
    <div className="border-2 border-yellow-500 flex flex-col justify-center items-center gap-4 p-2">
        <b className='text-lg text-white truncate '>{name}</b>     
        <img src={src} className='size-60'/>
        <button onClick={onClick} className='text-xl text-gray-100 bg-yellow-500 px-4 py-2 rounded-md'>Edit</button>
    </div>
  )
}
MemeCard.propTypes={
src : PropTypes.string.isRequired,
name : PropTypes.string.isRequired,
onClick : PropTypes.func.isRequired,
}
export default MemeCard