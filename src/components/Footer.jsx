import React from 'react';
import '../styles/footer.css';
import logo from "../assets/logo.png";
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaWhatsapp,FaTwitter } from "react-icons/fa";

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
  <div className="d-flex flex-wrap justify-content-center justify-content-md-start footer-links">
    <div className="d-flex w-100 justify-content-center justify-content-md-start gap-3 mb-2">
      <p className="mb-0"><a href="#">Home</a></p>
      <p className="mb-0"><a href="#">About</a></p>
      <p className="mb-0"><a href="#">Services</a></p>
    </div>
    <div className="d-flex w-100 justify-content-center justify-content-md-start gap-3">
      <p className="mb-0"><a href="#">Contact Us</a></p>
      <p className="mb-0"><a href="#">Book Appointment</a></p>
    </div>
  </div>
</Col>

        </Row>


         {/* Social Media Icons */}
         <Row className="justify-content-center text-white mt-4">
          <Col xs="auto">
            <a href="https://facebook.com/prashanthiayurvedakondotty" target="_blank" rel="noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/prashanthiayurveda" target="_blank" rel="noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919388001319" target="_blank" rel="noreferrer" className="social-icon">
              <FaWhatsapp />
            </a>
            <a href="" target="_blank" rel="noreferrer" className="social-icon">
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
