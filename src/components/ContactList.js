import React from 'react';
import ContactCard from "./ContactCard";

function ContactList(props) {

    const renderContactList = props.value.map((contact) => {
        return <ContactCard contact = {contact}/>
    })

    return (
        <div className = "ui celled list">
            {renderContactList}
        </div>
    )

}


export default ContactList;