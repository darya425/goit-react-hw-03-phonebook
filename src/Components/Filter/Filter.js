import React from 'react';
import PropTypes, { func } from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <label className={styles.filter}>Find contact by name:</label>
    <input
      className={styles.name_input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </>
);

Filter.protoTypes = {
  value: PropTypes.string.isRequired,
  onChange: func.isRequired,
};

export default Filter;
