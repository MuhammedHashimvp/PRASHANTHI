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
    title: 'Medical Tourism in Dentistry, Surgery & Other Specialties',
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
    <div className="service-page mt-5" id='service-section'>

      <div className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center" >
        <h1 className="  remove-overflow">Aminities</h1>
        <p className="lead">Ayurveda is the science of life, the art of living in harmony with nature.</p>
      </div>
 
{/* 
      <Container className="my-5">
  <Row className="g-4">
    {services.map((service, idx) => {
      // const isLastOdd = services.length % 4 !== 0 && idx === services.length - 1;

      return (
        <Col
          md={6}
          lg={3}
          key={idx}
          // className={isLastOdd ? 'mx-auto' : ''}
        >
          <Card className="glass-card text-center p-3 h-100 " >
            <div className="icon fs-1 mb-3">{service.icon}</div>
            <Card.Title className="service-text">{service.title}</Card.Title>
          </Card>
        </Col>
      );
    })}
  </Row>
</Container> */}
<Container className="d-flex justify-content-center gap-3 flex-wrap service-row">
  {
    services.map((i, j) => (
      <Card key={j} className="text-center p-3 service-card">
        <div className='fs-1'>{i.icon}</div>
        <Card.Title className="service-text mt-2">{i.title}</Card.Title>
      </Card>
    ))
  }
</Container>

    

      
    </div>
  );
};

export default TrendingServicePage;
