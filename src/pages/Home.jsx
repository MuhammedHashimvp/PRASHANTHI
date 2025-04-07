import React from 'react'
import '../styles/home.css'
import { Typewriter } from 'react-simple-typewriter'
import Underline from '../components/Underline'
import Founder from '../components/Founder'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='container-fluid home-container'>
      <div className="row hero-row shadow">
        {/* left */}
        <div className="col-lg-6 col-sm-12   left-div " data-aos="fade-right">
        <h1 className='title'>
            <span style={{ color: '#003152' }}>We Provide&nbsp;</span>
            <span style={{ color: 'green', fontWeight: 'bold' }}>
          <Typewriter 
                  words={[
                  'Expert Medical Care',
                  'Trusted Doctors',
                  '24/7 Online Support',
                  'Best Health Services'
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={90}
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
        <div className="col-lg-6 col-sm-12  right-div " data-aos="zoom-out">
           <img className='hero-image' src="https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png" alt="" />
        </div>
      </div>

     {/* underline */}
     <Underline/>
     {/* founder */}
     <Founder/>
     <Services/>

    </div>
  )
}

export default Home
