import React, { useState } from "react";

//create your first component
const Home = () => {
	const [light, setLight] = useState("");

	return (
		<>
		<div className="traffic-top"></div>
		<div className="traffic-light">
			<div onClick={() => setLight("red")} className={"light red"+(light === "red" ? " red-on" : "")}></div>
			<div onClick={() => setLight("yellow")} className={"light yellow"+(light === "yellow" ? " yellow-on" : "")}></div>
			<div onClick={() => setLight("green")} className={"light green"+(light === "green" ? " green-on" : "")}></div>
		</div>
		</>	
	);
};

export default Home;
