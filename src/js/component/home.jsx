import React, { useState } from "react";
import Light from "./light";

//create your first component
const Home = () => {
	const [lights, setLights] = useState({
		red: 'off',
		yellow: 'off',
		green: 'off'
	})
	return (
		<div className="text-center">
			<Light  />
		</div>	
	);
};

export default Home;
