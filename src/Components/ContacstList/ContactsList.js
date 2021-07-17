import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

import Contact from '../Contact';

const ContactsList = ({ contactData, onDeleteContact }) => (
  <ul className={styles.list}>
    {contactData.map(({ id, name, number }) => (
      <li className={styles.item} key={id}>
        <Contact name={name} number={number} />
        <button
          className={styles.btn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contactData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactsList;
