
import { useState, useEffect } from 'react';
import  './Modal.css'
import { FiTrash } from "react-icons/fi";
import PropTypes from 'prop-types'



const Modal = ({handleSave,contact}) => {
    const [closeModal,setCloseModal]=useState(false)
    const [name,setName]=useState('')
    const [des,setDes]=useState('')
    const [num,setNum]=useState('')
    const [email,setEmail]=useState('')
    const [img,setImg]=useState(null)
       
    useEffect(() => {
        if (contact) {
          setName(contact.name || '');
          setDes(contact.des || '');
          setNum(contact.num || '');
          setEmail(contact.email || '');
          setImg(contact.img || null);
        }
      }, [contact]);
    
   
    const  toggleClose=()=>{
    setCloseModal(!closeModal)
    }
    function handleSaveChanges(){
        handleSave(name,des,num,email,img)
    }
    const toggleRemove=()=>{
         setName('') 
         setDes('') 
         setNum('') 
         setEmail('') 
         setImg(null) 
    }
  return (
    <div className={`modal  ${closeModal ? 'hidden' : ''}`}>
        <div className='modal-details'>
        <div className='modal-header'>
        <h1>Enter Contact Details</h1>
        <button onClick={toggleClose}>X</button>
        </div>

        <div className='contact-details'>
        <form className='forms'>  
            <div className='labels'>
                <label htmlFor="img"> Enter Contact Picture : </label>
                <label htmlFor="name"> Enter Contact Name : </label>
                <label htmlFor="description">Enter Contact Description : </label>
                <label htmlFor="number">Enter Contact Mob/Tel No : </label>
                <label htmlFor="email">Enter Contact Email : </label>
            </div>

            <div className='inputs'>
               <input onChange={(e)=>setImg(e.target.files[0])} style={{color:"#000000"}} name="img" type="file"  accept="image/*"/> 
               <input value={name} onChange={(e)=>setName(e.target.value)} name="name" type="text" placeholder="ex: John" required />
               <input value={des} onChange={(e)=>setDes(e.target.value)} name="description" type="text" placeholder="ex: Java Developer" />
               <input value={num} onChange={(e)=>setNum(e.target.value)} name="number" type="number" placeholder="ex: 9876543201"  required />
               <input value={email} onChange={(e)=>setEmail(e.target.value)} name="email" type="email" placeholder="ex: John@email.com" />  
            </div>
        </form>
        </div>
        </div>
        <div className='modal-footer'>
            <button className='remove' onClick={toggleRemove}> <FiTrash/>&nbsp;<span>Remove</span></button>
            <button className='cancel' onClick={toggleClose}><span>Cancel</span> </button>
            <button className='save' onClick={handleSaveChanges}> <span>Save Changes</span> </button>
        </div>
    </div>
  )
}
 Modal.propTypes={
    handleSave:PropTypes.func,
    contact: PropTypes.object
 }

export default Modal