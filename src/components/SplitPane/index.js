import React from 'react';
import "./SplitPane.css";

const SplitPane = ({left, cssVars, right, ...props}) => {
	// useEffect(() => {
	// 	const splitPane = document.getElementById("SplitPane");
	// 	if (typeof cssVars !== "object" || Object.keys(cssVars).length > 0) {
	// 		for (let entry of Object.entries(cssVars)) {
	// 			splitPane.style.setProperty(`--${entry[0]}`, `${entry[1]}`);
	// 		}
	// 	}
	// }, [cssVars]);

	return (
		<div id="SplitPane" className="SplitPane">
			<div className="SplitPane__Left">{left}</div>
			<div className="SplitPane__Right">{right}</div>
		</div>
	)
}

export default SplitPane;