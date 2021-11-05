import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={s.contactItem}>
      {contact.name}: {contact.number}
      <button
        type="button"
        className={s.btnDel}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.prototype = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;
