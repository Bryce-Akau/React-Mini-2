import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer" 
        onChange = {event => props.update(parseInt(event.target.value, 10))}
        value = {props.fontSize}
      >
      <option value="12"> 12 </option>
      <option value="24"> 24 </option>
      <option value="32"> 32 </option>
    </select>
  )
}