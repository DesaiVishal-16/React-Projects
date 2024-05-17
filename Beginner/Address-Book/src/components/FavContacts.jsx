import userImg from '../assets/userImg.jpg';
import PropTypes from 'prop-types'

const Favorites = ({ favContacts }) => {
     
  return (
    <div className='fav-cards'>
      {favContacts.map((contact, index) => (
        <div className='fcards' key={index}>
          <img src={contact.img ? URL.createObjectURL(contact.img) : userImg} alt="Profile Picture"/>
          <div className='finfo'>
            <p className='faccount-name'>
              <b>{contact.name}</b>
              <span>{contact.des}</span>
            </p>
            <p className='faccount-contact'>
              <strong>{contact.num}</strong>
              <span>{contact.email}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
Favorites.propTypes={
    favContacts : PropTypes.array
}
export default Favorites;
