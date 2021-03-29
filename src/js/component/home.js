import React from "react";
import Cards from "./Cards";
import Jumbotron from "./Jumbotron";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg"

//create your first component

const Home = () => {
	return (
		<div className="container-fluid w-75">
			<Jumbotron />
			<Cards />
		</div>
	);
};

export default Home;
