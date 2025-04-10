import React, { useState } from "react";
import "../styles/header.css";
import logo from "../assets/logo-footer.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Offcanvas from 'react-bootstrap/Offcanvas';


import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbar = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // submit


  return (
    <header>
      <nav className="section__container nav__container">
        <Link to={"/"}>
          <div className="nav__logo">
            <img src={logo} alt="" />
          </div>
        </Link>


        <ul className="nav__links">
  <li className="link">
    <Link to="/">Home</Link>
  </li>
  <li className="link ">
  <NavDropdown title="Services" id="basic-nav-dropdown">
  <NavDropdown.Item as={Link} to="/treatments-clinic">
    Treatment & Clinic
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/wellness-spa">
    Wellness & Spa
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/rehabilitation">
    Rehabilitation
  </NavDropdown.Item>
</NavDropdown>
  </li>
  <li className="link">
    <Link to="/mediflora">Mediflora</Link>
  </li>
  <li className="link">
    <Link to="/">About Us</Link>
  </li>   
  <li className="link">
    <Link to="/contact">Contact Us</Link>
  </li>
  <li className="link">
    <Link to="/appointment">
      <button className="btn">Login</button>
    </Link>
  </li>
</ul>


        <ul className="nav__links2">

        <button className="sidebar-btn" onClick={handleShow}>
        <FaBars />

      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <div className="text-end pe-3 ">
                <button className="sidebar-btn" onClick={handleClose}>
      <GrClose />

      </button>
        </div>

      <ul className="nav nav-sidebar flex-column">
  <li className="link ">
    <Link className="nav-link" to="/">Home</Link>
  </li>
  <li className="link">
    <Link className="nav-link" to="/">Treatments & Clinic</Link>
  </li>
  <li className="link">
    <Link className="nav-link" to="/">Wellness & Spa</Link>
  </li>
  <li className="link">
    <Link className="nav-link" to="/">Rehabilitation </Link>
  </li>
  <li className="link">
    <Link className="nav-link" to="/contact">Contact Us</Link>
  </li>
  <li className="link">
    <Link to="/appointment">
      <button className="btn btn-primary mt-2">Login</button>
    </Link>
  </li>
</ul>
      </Offcanvas>
        </ul>



        
      </nav>
 
    </header>
  );
};

export default Navbar;
