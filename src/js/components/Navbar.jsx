import React from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import jdLogo from "../../img/JD-logo-updated.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <img src={jdLogo} style={{height: '64.4px', width: '132px'}} className="p-0"></img>
            <a className="navbar-brand" href="#">JD Automotive</a>
            <button className="btn-dark">Book an appointment</button>
            <button className="navbar-toggler" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
  );
}