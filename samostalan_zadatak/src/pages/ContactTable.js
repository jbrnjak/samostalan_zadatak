import React, { useState } from "react";
import Modal from "./Modal";

export const ContactTable = ({ contactList, setContactList }) => {


  const handleDelete = (e) => {
    const filteredContacts = contactList.filter(
      (contact) => contact.id !== e.target.id
    );
    setContactList(filteredContacts);
  };

 const [isOpen, setIsOpen] = useState(false)



 const handleInputChange = () => {
  
  console.log(contactList, "nesto")
};  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Date of birth</th>
            <th>Contact type</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <tr>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.dob}</td>
                <td>{contact.contactType}</td>
                <td>{contact.contact}</td>
               

                <td>
                  <button className="table-btn" onClick={()=> setIsOpen(true) }>Update</button>
                  <button
                    contactList={contactList}
                    className="table-btn"
                    type="reset"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
      
                  <Modal open = {isOpen} onClose={()=>setIsOpen(false)} setContactList={setContactList}
                contactList={contactList} onChange={handleInputChange}>
                  </Modal>
            
    </div>
  );
};
