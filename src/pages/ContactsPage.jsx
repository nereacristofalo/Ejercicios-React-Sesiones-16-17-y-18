import React, { useEffect, useState } from 'react';
import AddContact from '../components/AddContact';
import ContactsList from '../components/ContactsList';
import { Contact } from '../models/contact.model';

const ContactsPage = () => {
  const [list, setList] = useState([
    new Contact('pepe argento', false, 1),
    new Contact('moni argento', false, 2),
    new Contact('fatiga argento', true, 3),
  ]);

  const onAddContact = (name) => {
    setLoading(true);
    setList([...list, new Contact(name, false, list[list.length - 1].id + 1)]);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [list]);

  const onUpdateContact = (contact) => {
    console.log('contact', contact);
    setList((oldList) => {
      const newList = oldList.map((e) => {
        if (e.id === contact.id) {
          return { ...e, isOnline: !e.isOnline };
        }
        return e;
      });
      console.log('LISTAS', newList, oldList);
      return newList;
    });
  };

  const onEvent5 = (contact) => {
    const index = list.indexOf(contact);
    const tempTasks = [...list];
    tempTasks.splice(index, 1);
    setList(tempTasks);

    // OTRA FORMA DE ELIMINAR ELEMENTOS DE UNA LISTA USANDO .filter
    // const newList = list.filter((e) => e.id !== contact.id);
    // setList(newList);
  };

  const loadingStyle = {
    color: 'grey',
    fontSize: '15px',
    fontWeight: 'bold',
  };

  return (
    <div className="w-25">
      <AddContact onContactAdded={onAddContact} />
      {loading ? (
        <p style={loadingStyle}>Loading tasks...</p>
      ) : (
        <ContactsList
          contacts={list}
          onUpdate={onUpdateContact}
          onEvent4={onEvent5}
        />
      )}
    </div>
  );
};
export default ContactsPage;
