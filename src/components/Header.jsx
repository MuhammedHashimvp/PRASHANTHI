import React from 'react'
import '../styles/header.css'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" height="40" />
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
          <div className="collapse navbar-collapse p-4 " id="navbarNav">
            <ul className="navbar-nav align-items-center  d-flex n  w-100">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">HOME</a>
              </li>
              {/* <li className="nav-item ">
                <a className="nav-link" href="#">SERVICE</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="#">AMENITIES</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT US</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">BLOG</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">BOOK APPOINTMENT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header