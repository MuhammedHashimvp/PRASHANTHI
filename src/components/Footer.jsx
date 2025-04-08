import React from 'react';
import '../styles/footer.css';
import footerlogo from "../assets/logo-footer.png";
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaWhatsapp,FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="main-footer">
      <Container fluid className="pt-5">
       <div className="first-div">
       <Row className="element-container text-white">

{/* Logo */}
<Col xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0">
  <div className='logo-footer px-5'>
    <img src={footerlogo} alt="Prashanthi Ayurveda Hospital Logo" className="img-fluid" />
  </div>
</Col>

{/* Address */}
<Col xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0 text-dark">
  <h4 className='remove-overflow'>Prashanthi Ayurveda Hospital</h4>
  <h6 className="mb-1 pb-3">
  
    Vilayil, Malappuram,<br />
    Kerala - 673641
  </h6>
  <h6 className="mb-3 remove-overflow">
    Kondotty, Malappuram,<br />
    Kerala - 673638
  </h6>
</Col>

{/* Links */}

<Col xs={12} md={4}>
<div className="remove-overflow d-flex flex-wrap justify-content-center justify-content-md-start footer-links">
<div className=" remove-overflow d-flex w-100 justify-content-center justify-content-md-start gap-3 mb-2 ">
<Link to={'/'}><p className="mb-0 "><a className='remove-overflow text-dark' >Home</a></p></Link>
{/* <p className="mb-0 "><a className='text-dark'>About</a></p> */}
<p className="mb-0"><a  className='text-dark'>Services</a></p>
</div>
<div className="d-flex w-100 justify-content-center justify-content-md-start gap-3">
<Link to={'/contact'}><p className="mb-0"><a  className='text-dark'>Contact Us</a></p></Link>
<Link to={'/appointment'}><p className="mb-0"><a className='text-dark'>Book Appointment</a></p></Link>
</div>
</div>
</Col>

</Row>


{/* Social Media Icons */}
<Row className=" justify-content-center text-white mt-4 mb-1">
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
       </div>

        {/* Divider */}

        {/* Footer Bottom */}
        <Row className="element-footer text-center">
          <Col>
            <h6 className="mb-0 remove-overflow mt-2">© 2025 prashanthiayurveda.com   All rights reserved.</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
