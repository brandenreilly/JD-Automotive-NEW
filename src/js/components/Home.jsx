import React from "react";

import oilChange from "../../img/oil-change.jpg";
import tuneUp from "../../img/tune-up.jpg"
import brakes from "../../img/brakes.jpg"
import acDiag from "../../img/ac-diag.jpg"
import autoDetail from "../../img/detailing.jpg"
import inspection from "../../img/inspection.jpg"
import engineRepair from "../../img/engine-repair.jpg"
import suspension from "../../img/suspension.jpg"

import "../../styles/main.css";
import Cards from "./Cards";
import Description from "./Description";
import Location from "./Location";

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
			img: autoDetail
		},
		{
			title: "Free Inspection",
			img: inspection
		},
		{
			title: "Engine Repair",
			img: engineRepair
		},
		{
			title: "Suspension & Alignment",
			img: suspension
		}
	]

	return (
		<div className="container-fluid text-center mt-5">
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
			<Location />
			
		</div>
	);
};

export default Home;