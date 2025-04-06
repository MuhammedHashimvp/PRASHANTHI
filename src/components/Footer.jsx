import React from 'react';
import '../styles/footer.css';
import logo from "../assets/logo.png";
import { Container, Row, Col } from 'react-bootstrap';
import { FaMobileAlt, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <Container fluid className="pt-5">
        <Row className="element-container text-white">

          {/* Logo */}
          <Col xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0">
            <div className='logo-footer px-5'>
              <img src={logo} alt="Prashanthi Ayurveda Hospital Logo" className="img-fluid" />
            </div>
          </Col>

          {/* Address */}
          <Col xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0">
            <h4>Prashanthi Ayurveda Hospital</h4>
            <h6 className="mb-1 pb-3">
              Vilayil, Malappuram,<br />
              Kerala - 673641
            </h6>
            <h6 className="mb-3">
              Kondotty, Malappuram,<br />
              Kerala - 673638
            </h6>
          </Col>

          {/* Links */}
          <Col xs={12} md={4}>
            <Row className="footer-links">
              <Col xs={6}>
                <p><a href="#">Home</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Services</a></p>
              </Col>
              <Col xs={6}>
                <p><a href="#">Contact Us</a></p>
                <p><a href="#">Book Appointment</a></p>
              </Col>
            </Row>
          </Col>
        </Row>

         {/* Social Media Icons */}
         <Row className="justify-content-center text-white mt-4">
          <Col xs="auto">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919170200600" target="_blank" rel="noreferrer" className="social-icon">
              <FaWhatsapp />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaTwitter />
            </a>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="solid" />

        {/* Footer Bottom */}
        <Row className="element-footer text-center">
          <Col>
            <h6 className="mb-0">© 2025 Prashanthi Ayurveda Hospital. All rights reserved.</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
