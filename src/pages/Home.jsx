import React from 'react'
import '../styles/home.css'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className='container-fluid p-4 home-container'>
      <div className="row">
        {/* left */}
        <div className="col-lg-6 col-sm-12 left-div">
            <h1 className='title'>
            <span style={{ color: '#003152' }}>We Provide&nbsp;</span>
            <span style={{ color: 'green', fontWeight: 'bold' }}>
          <Typewriter 
                  words={[
                  'Expert Medical Care',
                  'Trusted Doctors',
                  '24/7 Online Support',
                  'Affordable Health Services'
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1400}
                />
              </span>
            </h1>


          <p>
            Connect with trusted doctors online for expert advice. Get quick, reliable <br />
            consultations from certified professionals—anytime, anywhere.
          </p>
          <button className='appointment-btn btn shadow w-50'>Appointment Now</button>
        </div>

        {/* right */}
        <div className="col-lg-6 col-sm-12 right-div">

        </div>
      </div>
    </div>
  )
}

export default Home
