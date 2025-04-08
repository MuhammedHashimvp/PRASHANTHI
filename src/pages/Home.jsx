import React from 'react'
import '../styles/home.css'
import { Typewriter } from 'react-simple-typewriter'
import Underline from '../components/Underline'
import Founder from '../components/Founder'
import Services from '../components/Services'
import Counter from '../components/Counter'
import Header from '../components/Header'
const Home = () => {
  return (
    <>
    <Header/>
    <div className='container-fluid home-container'>
      <div className="row hero-row ">
        {/* left */}
        <div className="col-lg-6 col-sm-12   left-div " >
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
          <button className='appointment-btn btn shadow '>Appointment Now</button>
        </div>

        {/* right */}
        <div className="col-lg-6 col-sm-12  right-div">
         
        </div>
      </div>

      <Counter/>
     <Services/>
     <Founder/>

    </div>
    </>
  )
}

export default Home
