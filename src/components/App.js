import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
      id: "1",
      name: "John",
      email: "johndoe@gmail.com"

    },
    {
      id:"2",
      name: "Chris",
      email:"chris@futur.com"
    }
  ]

  return (
    <div className = "ui container">
      <Header />
      <AddContact />
      <ContactList value = {contacts}/>
    </div>
  );
}

export default App;
