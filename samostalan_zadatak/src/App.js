import React, { useState } from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ContactTable } from "./pages/ContactTable";



function App() {
  const [contactList, setContactList] = useState([]);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              <Home setContactList={setContactList} contactList={contactList} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/contact-table"
            element={
              <ContactTable
                setContactList={setContactList}
                contactList={contactList}                
              />
            }
          />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
