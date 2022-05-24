import React, { useState } from "react";
import BotonDeCambio from "./BotonDeCambio.jsx";
import Semaforo from "./Semaforo.jsx";

//create your first component
const Home = () => {
	const [glow1, setglow1] = useState("");
	const [glow2, setglow2] = useState("");
	const [glow3, setglow3] = useState("");
	const agregarGlow = (e) => {
		if (e.target.className.startsWith("color1")) {
			setglow1(" glow");
			setglow2("");
			setglow3("");
		}
		if (e.target.className.startsWith("color2")) {
			setglow1("");
			setglow2(" glow");
			setglow3("");
		}
		if (e.target.className.startsWith("color3")) {
			setglow1("");
			setglow2("");
			setglow3(" glow");
		}
	};
	let arrayOfFunctions = [glow1, glow2, glow3];
	const cambiaDeColor = (arr) => {
		if (glow1 === "" && glow2 === "" && glow3 === "") {
			arr[0] = " glow";
		}
		for (let i = 0; i < arr.length; i++) {
			if (i > 0) {
				let el = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = el;
			}
		}
		setglow1(arr[0]);
		setglow2(arr[1]);
		setglow3(arr[2]);
	};

	return (
		<div>
			<div className="stick"></div>
			<div className="container">
				<Semaforo
					onClick={agregarGlow}
					brillo={glow1}
					color={"color1"}
				/>
				<Semaforo
					onClick={agregarGlow}
					brillo={glow2}
					color={"color2"}
				/>
				<Semaforo
					onClick={agregarGlow}
					brillo={glow3}
					color={"color3"}
				/>
			</div>
			<BotonDeCambio
				onClick={() => cambiaDeColor(arrayOfFunctions)}
				className={"cambioDeColor"}
				type={"button"}
			/>
		</div>
	);
};

export default Home;
