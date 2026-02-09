import React from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">JD Automotive</a>
            <button className="navbar-toggler" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}></button>
        </div>
    </nav>
  );
}