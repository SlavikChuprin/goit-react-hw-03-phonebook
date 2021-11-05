import PropTypes from 'prop-types';
import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import s from './ContactList.module.css';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {visibleContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.prototype = {
  visibleContacts: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
