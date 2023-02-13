import React from 'react';
import ContactListItem from './ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import './ContactList.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    const normalizedFilter = filterValue.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <ul className="contact-list">
      {filteredContacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
