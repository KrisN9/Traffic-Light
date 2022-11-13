import React from "react";
import Light from "./light";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Light style={"red"} />
			<Light style={"yellow"} />
			<Light style={"green"} />
		</div>	
	);
};

export default Home;
