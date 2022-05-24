import React, { useState } from "react";

function Semaforo(props) {
	return (
		<>
			<div
				onClick={props.onClick}
				className={props.color + props.brillo}></div>
		</>
	);
}

export default Semaforo;
