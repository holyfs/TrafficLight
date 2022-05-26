import React, { useState } from "react";
import "/workspace/TrafficLight/src/styles/BotonDeCambio.css";

function BotonDeCambio(props) {
	return (
		<>
			<div className="boton-heading">
				You can press any color to start or you can press the
				<strong>button!</strong>
			</div>
			<button
				onClick={props.onClick}
				className={props.className}
				type={props.type}>
				Change the light
			</button>
		</>
	);
}

export default BotonDeCambio;
