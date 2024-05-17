import { useState, useEffect } from 'react';
import BookHeader from './components/BookHeader';
import AllContacts from './components/AllContacts';
import Favorites from './components/FavContacts';
import Modal from './components/Modal';
import { IoIosSearch } from "react-icons/io";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery,setSearchQuery] = useState('')
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [favContacts, setFavContacts] = useState(() => {
    const savedFavContacts = localStorage.getItem('favContacts');
    return savedFavContacts ? JSON.parse(savedFavContacts) : [];
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    localStorage.setItem('favContacts', JSON.stringify(favContacts));
  }, [contacts, favContacts]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setEditIndex(null);
  };

  const handleSave = (newName, newDes, newNum, newEmail, newImg) => {
    if (editIndex !== null) {
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = { name: newName, des: newDes, num: newNum, email: newEmail, img: newImg, fav: updatedContacts[editIndex].fav };
      setContacts(updatedContacts);
    } else {
      const newContact = { name: newName, des: newDes, num: newNum, email: newEmail, img: newImg, fav: false };
      setContacts([...contacts, newContact]);
    }
    setIsModalOpen(false);
  };

  const handleFav = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].fav = !updatedContacts[index].fav;
    setContacts(updatedContacts);

    const currentContact = updatedContacts[index];
    if (currentContact.fav) {
      setFavContacts([...favContacts, currentContact]);
    } else {
      const newFavContacts = favContacts.filter((contact) => contact !== currentContact);
      setFavContacts(newFavContacts);
    }
  };

  const handleDelete = (index) => {
    const updatedContacts = [...contacts];
    const deletedContact = updatedContacts.splice(index, 1)[0];
    setContacts(updatedContacts);
    const updatedFavContacts = favContacts.filter(contact => contact !== deletedContact);
  setFavContacts(updatedFavContacts);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setIsModalOpen(true);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  return (
    <div className='address-book'>
      <BookHeader toggleModalBtn={toggleModal} />
      <div className='main-container'>
        <div className='left-container'>
          <div className='left-header'>
            <h1>All Contacts</h1>
            <div className='left-search'>
              <IoIosSearch className='left-search-icon'/>
              <input type="search" onChange={handleSearch} placeholder='Search Contacts...'/>
            </div>
          </div>
          <div className='account-details'>
            <div className='modal-box'>
              {isModalOpen && <Modal handleSave={handleSave} editIndex={editIndex !== null ? editIndex : undefined} 
              contact={editIndex !== null ? contacts[editIndex] : undefined} />}
            </div>
            {filteredContacts.map((contact, index) => (
              <AllContacts key={index} contact={contact} handleEdit={() => handleEdit(index)} handleFav={() => handleFav(index)}
               handleDelete={() => handleDelete(index)} />
            ))}
          </div>
        </div>
        <div className='right-container'>
          <div className='right-header'>
            <h1>Fav Contacts</h1>
          </div>
          <Favorites favContacts={favContacts} />
        </div>
      </div>
    </div>
  );
}

export default App;
