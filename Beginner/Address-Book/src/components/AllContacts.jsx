import { FaRegEdit, FaHeart } from "react-icons/fa"
import { CiHeart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import userImg from '../assets/userImg.jpg'
import PropTypes from 'prop-types'


const AllContacts = ({ contact, handleEdit, handleFav, handleDelete, index }) => {
  const renderImage = () => {
    if (contact.img && Object.keys(contact.img).length !== 0) {
      return <img src={URL.createObjectURL(contact.img)} alt="Profile Picture" />;
    } else {
      return <img src={userImg} alt="Default Profile Picture" />;
    }
  };

  return (
    <div className='cards'>
      {renderImage()}
      <div className='info'>
        <p className='account-name'>
          <b>{contact.name}</b>
          <span>{contact.des}</span>
        </p>
        <p className='account-contact'>
          <strong>{contact.num}</strong>
          <span>{contact.email}</span>
        </p>
      </div>
      <div className='account-button'>
        <button className='edit-btn' onClick={() => handleEdit(index)}><FaRegEdit/></button>
        <button className={`fav ${contact.fav ? 'clicked' : ''}`} onClick={() => handleFav(index)}>
          {contact.fav ? <FaHeart/> : <CiHeart/>}
        </button>
        <button className='delete' onClick={() => handleDelete(index)}><MdDelete/></button>
      </div>
    </div>
  );
};

AllContacts.propTypes = {
  contact: PropTypes.object,
  handleEdit: PropTypes.func,
  handleFav: PropTypes.func,
  handleDelete: PropTypes.func,
  index: PropTypes.number
};

export default AllContacts;