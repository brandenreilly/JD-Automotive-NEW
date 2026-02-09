import React from "react";

import oilChange from "../../img/oil-change.png"; 

import "../../styles/main.css";

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
			<div className="row mt-2 d-flex justify-content-center mx-auto">
				<div className="col-md-3 col-6 mt-2">
					<div className="card autoServices" style={{width: "10rem"}}>
						<img src={oilChange} className="card-img-top" alt="Service 1"/>
						<div className="card-body">
							<p>Oil Changes</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-6 mt-2">
					<div className="card autoServices" style={{width: '10rem'}}>
						<img src={oilChange} className="card-img-top" alt="Service 2"/>
						<div className="card-body">
							<p>Brakes</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-6 mt-2">
					<div className="card autoServices" style={{width: '10rem'}}>
						<img src={oilChange} className="card-img-top" alt="Service 3"/>
						<div className="card-body">
							<p>Tune-Ups</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-6 mt-2">
					<div className="card autoServices" style={{width: '10rem'}}>
						<img src={oilChange} className="card-img-top" alt="Service 4"/>
						<div className="card-body">
							<p>A/C</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;