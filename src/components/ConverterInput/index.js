import React from 'react';
import "./ConverterInput.css";

const ConverterInput = ({ value, onChange, ...props }) => {
  return (
    <input 
    	className="ConverterInput"
    	type="number" 
    	value={value} 
    	onChange={onChange} 
    	placeholder="Enter Number here..."
    />
  )
}

export default ConverterInput;