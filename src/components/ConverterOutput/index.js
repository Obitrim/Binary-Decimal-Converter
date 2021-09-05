import React from 'react';
import "./ConverterOutput.css";

const ConverterOutput = (props) => {
  return (
    <output className="ConverterOutput">{props.result}</output>
  )
}

export default ConverterOutput;