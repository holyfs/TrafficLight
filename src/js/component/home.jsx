import React, { useState } from "react";
import BotonDeCambio from "./BotonDeCambio.jsx";
import Semaforo from "./Semaforo.jsx";

//create your first component
const Home = () => {
	const [glow1, setglow1] = useState(" ");
	const [glow2, setglow2] = useState(" ");
	const [glow3, setglow3] = useState(" ");
	const agregarGlow = (e) => {
		if (e.target.className.startsWith("color1")) {
			setglow1(" glow");
			setglow2(" ");
			setglow3(" ");
		}
		if (e.target.className.startsWith("color2")) {
			setglow1(" ");
			setglow2(" glow");
			setglow3(" ");
		}
		if (e.target.className.startsWith("color3")) {
			setglow1(" ");
			setglow2(" ");
			setglow3(" glow");
		}
	};

	const cambiarGlow = (e) => {
		console.log("entra");
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
				onClick={cambiarGlow}
				className={"cambioDeColor"}
				type={"button"}
			/>
		</div>
	);
};

export default Home;
