import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container text-center mt-5">
			<div className="row">
				<div className="col-12">
					<h1 className="display-4">Welcome to JD Automotive</h1>
					<p className="lead">Your trusted partner in automotive excellence.</p>
				</div>
			</div>
		</div>
	);
};

export default Home;