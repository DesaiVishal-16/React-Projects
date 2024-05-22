import PropTypes from 'prop-types'
const Square = ({onClick,value}) => {
  return (
    <div className="square" onClick={onClick}>
        <h5>{value}</h5>
    </div>
  )
}

Square.propTypes={
    onClick : PropTypes.func,
    value : PropTypes.string
}

export default Square

