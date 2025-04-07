import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/services.css';


import { MdLocalAirport } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaPersonWalkingLuggage } from "react-icons/fa6";






const services = [
  {
    title: 'Airport Pickup & Drop',
    // description: 'We build sleek, responsive websites that perform beautifully across devices.',
    icon:<MdLocalAirport className='fs'/>,
    
  },

  {
    title: 'Accommodation 3 Star & 4 Star Facilities',
    // description: 'Launch mobile-first solutions with our expert app development services.',
    icon: <FaHotel className='fs'/>
    ,
  },
  {
    title: 'Medical Tourism In Dentistry, Surgery And All Other Medical Departments',
    // description: 'Stand out with a strong logo, voice, and visual identity.',
    icon: <FaClinicMedical className='fs'/>
    ,
  },
  {
    title: 'International Patient Department.',
    // description: 'Drive traffic and increase conversions with smart digital strategies.',
    icon: <FaEarthAmericas className='fs'/>
    ,
  },
  {
    title: 'Site Seeing and Tourism Allied Programmes',
    // description: 'Drive traffic and increase conversions with smart digital strategies.',
    icon: <FaPersonWalkingLuggage className='fs'/>
    ,
  }
 
];

const TrendingServicePage = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className=" display-4 fw-bold">Specialized Services</h1>
        <p className="lead">Ayurveda is the science of life, the art of living in harmony with nature.</p>
      </div>

      <Container className="my-5">
  <Row className="g-4">
    {services.map((service, idx) => {
      const isLastOdd = services.length % 4 !== 0 && idx === services.length - 1;

      return (
        <Col
          md={6}
          lg={3}
          key={idx}
          className={isLastOdd ? 'mx-auto' : ''}
        >
          <Card className="glass-card text-center p-3 h-100 ">
            <div className="icon fs-1 mb-3">{service.icon}</div>
            <Card.Title className="">{service.title}</Card.Title>
            <Card.Text>{service.description}</Card.Text>
          </Card>
        </Col>
      );
    })}
  </Row>
</Container>

      
    </div>
  );
};

export default TrendingServicePage;
