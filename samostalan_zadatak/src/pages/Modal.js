import React, { useState } from "react";
import HomeForm from "../components/HomeForm";


export default function Modal({ open, onClose, handleInputChange, ...formData }) {

 // const formValues = formData.contactList.find(contact => contact.id == id)

console.log(formData.contactList)


  if (!open) return null;
  return (
    <>
      <div className="overlay"></div>

      <div className="modal">
      <HomeForm  formData={formData} handleInputChange={handleInputChange}  />
        <button className="clsbtn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </>
  );
}
