import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
const Filter = ({ value, onChange }) => (
  <div className={s.filterWrapper}>
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.filterInput}
      />
    </label>
  </div>
);

Filter.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
