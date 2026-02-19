import React from "react";

import oilChange from "../../img/oil-change.jpg";
import tuneUp from "../../img/tune-up.jpg"
import brakes from "../../img/brakes.jpg"
import acDiag from "../../img/ac-diag.jpg"


import "../../styles/main.css";
import Cards from "./Cards";
import Description from "./Description";

//Work on mapping through the cards list for the card component.
const Home = () => {
	var cardsList = [
		{
			title: "Oil Change",
			img : oilChange
		},
		{
			title: "Tune-Ups",
			img : tuneUp
		},
		{
			title: "Brakes",
			img : brakes
		},
		{
			title: "A/C & Diagnostics",
			img : acDiag
		},
		{
			title: "Auto Detailing",
			img: "N/A"
		},
		{
			title: "Free Inspection",
			img: "N/A"
		},
		{
			title: "Engine Repair",
			img: "N/A"
		},
		{
			title: "Suspension & Alignment",
			img: "N/A"
		}
	]

	return (
		<div className="container text-center mt-5">
			<div className="row">
				<div className="col-12">
					<h1 className="display-4">Welcome to JD Automotive</h1>
					<p className="lead">Your trusted partner in automotive excellence.</p>
				</div>
			</div>
			<div className="row text-center mt-2 mx-auto p-0">
				{cardsList.map((card, ind)=>{
					return (<Cards props={card} key={ind}/>) 
				})}
			</div>
			<Description />
		</div>
	);
};

export default Home;