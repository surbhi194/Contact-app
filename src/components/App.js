import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {

  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = contacts;
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  }
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts)
      setContacts(retrieveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className='ui container'>
       <Header/> 
      <Router>
     
     <Routes>
      <Route path="/" exact element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/> 
     <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
     <Route path="/contact/:id" element={<ContactDetail/>}/>
     </Routes>
     </Router>
      {/* <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>
  );
}

export default App;
