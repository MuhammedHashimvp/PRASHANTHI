import React from "react";
import "../styles/header.css";
import logo from "../assets/logo.png"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light  shadow-sm sticky-top  px-4 w-100 ">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4 text-primary" href="#">
          <img className="logo" src={logo} alt="Logo" height="60" />
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


         

        

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3">
          <li className="nav-item">
            <Link to={'/'}>
            <a className="nav-link cool-link" >
                Home
              </a>
            </Link>
            </li>
            <li className="nav-item">
              
              <a className="nav-link cool-link" href="#">
                About
              </a>
            </li>
             <li className="nav-item">
              <a className="nav-link cool-link" href="#service-section">
                Services
              </a>
            </li> 
            
            <li className="nav-item">
            <Link to={'/contact'}>
            <a className="nav-link cool-link">
                Contact
              </a>
            </Link>
            </li>
            <li className="nav-item">
              <Link to={'/appointment'}>
              <a className="header-btn btn  rounded-pill px-4 py-2" >
                Book Now
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
