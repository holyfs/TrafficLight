import React, { useState } from "react";
import "/workspace/react-hello/src/styles/BotonDeCambio.css";

function BotonDeCambio(props) {
	return (
		<button
			onClick={props.onClick}
			className={props.className}
			type={props.type}>
			Change Color
		</button>
	);
}

export default BotonDeCambio;
