import React, {Component, PropTypes} from 'react';


export default ({ onSortChange, options }) => (
  <select id="selectBox" onChange={onSortChange}>
    {options.map((option) => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
)

onSortChange.PropTypes = {
  onChange: PropTypes.func.isRequired,
}