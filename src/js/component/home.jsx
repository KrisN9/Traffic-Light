import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<div className="traffic-light">
		<div className="container bg-dark">
			<div className="stick"></div>
			<div className="light bg-danger"></div>
			<div className="light bg-warning"></div>
			<div className="light bg-success"></div>
		</div>
	</div>	
	);
};

export default Home;
