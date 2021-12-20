import React from 'react';
import ContactItem from './ContactItem';

const ContactsList = (props) => {
  const { contacts, onUpdate, onEvent4 } = props;

  const onUpdateList = (contact) => {
    onUpdate(contact);
  };

  const onEvent3 = (contact) => {
    onEvent4(contact);
  };

  const getItems = () => {
    return contacts.map((contact) => {
      return (
        <ContactItem
          key={contact.id}
          contact={contact}
          onContactChanged={onUpdateList}
          onEvent2={onEvent3}
        ></ContactItem>
      );
    });
  };

  return <ul className="list-group">{getItems()}</ul>;
};

export default ContactsList;
