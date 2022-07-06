import React, { useState, useId } from "react";
import {
  BrowserRouter as Router, Routes, Route,
  useNavigate,
} from "react-router-dom";
import HomeForm from '../components/HomeForm'

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  dob: "",
  contactType: "",
  contact: "",
};

function Home({ contactList, setContactList }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Login");
  }


  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [error, setError] = useState("");
  const id = useId();

  const handleReset = () => {
    setFormData(INITIAL_STATE);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataCopy = { ...formData };
    const { firstName, lastName, dob, contactType, contact } = formDataCopy;

    if (!firstName || !lastName || !dob || !contactType || !contact) {
      setError("Please fill out all required fields!");
      return;
    }
    alert("Your form has been submitted successfuly!");
    handleReset();

    formDataCopy.id = id;
    setContactList([...contactList, formDataCopy]);
    navigate("/contact-table");
  };
  
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };  
  

  return (
  <HomeForm handleSubmit={handleSubmit} error={error} formData={formData} handleInputChange={handleInputChange} handleReset={handleReset} handleClick={handleClick}/>
  );
}

export default Home;
