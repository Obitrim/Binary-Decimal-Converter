import React, { useState, useEffect } from 'react';


import "./App.css";
import bgImg from "../../assets/bg.jpg";
import ConverterInput from "../../components/ConverterInput";
import ConverterOutput from "../../components/ConverterOutput";

const App = (props) => {
	const [mode, setMode] = useState("B2D");
	const [userInput, setUserInput] = useState("");
	const [result, setResult] = useState(getResult());
	const [invalidDigitError, setInvalidDigitError] = useState(false);

	function toDecimal(binary) {
		if (/[2-9]/.test(`${binary}`)) return "";

		binary = parseInt(binary);
	    let decimal = 0;
	    let exponent = 0;
	    while (binary > 0) {
	        decimal += (binary % 10) * (2**exponent);
	        exponent += 1;
	        binary = Math.floor(binary / 10);
	    }
	    return decimal;
	}

	function toBinary(decimal) {
		let binary = "";
		decimal = parseInt(decimal);

	    do {
	        binary = decimal % 2 + binary;
	        decimal = Math.floor(decimal / 2);
	    } while (decimal > 0);
	    return parseInt(binary);
	}

	function handleOnChange(evt) {
		setUserInput(evt.target.value);
	}

	function getResult() {
		if (userInput.trim() === "" ) return "";

		return mode === "B2D" ? toDecimal(userInput) : toBinary(userInput);
	}

	useEffect(() => {
		setResult(getResult());
	}, [userInput])

	useEffect(() => {
		let tmp = userInput;
		setUserInput(result.toString());
		setResult(tmp);
	}, [mode]);

	return (
		<main className="AppWrapper">
			<img src={bgImg} alt="binary numbers" />
			<header className="AppHeader">
				<h1>Binary Decimal Converter</h1>
				<p>Convert Base two numerals to Base ten numerals with ease</p>
			</header>
			<section className="App">
				<ConverterInput onChange={handleOnChange} value={userInput} />
				<button className="App__Switch" onClick={() => setMode(mode === "B2D" ? "D2B" : "B2D")}>{mode}</button>
				<ConverterOutput result={result} />
			</section>
		</main>
	)
}

export default App; 