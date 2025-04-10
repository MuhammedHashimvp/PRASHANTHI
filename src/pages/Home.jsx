import React, { useState } from 'react'
import '../styles/home.css'
import { Typewriter } from 'react-simple-typewriter'
import Underline from '../components/Underline'
import Founder from '../components/Founder'
import Services from '../components/Services'
import Counter from '../components/Counter'
import axios from "axios";

import { Bounce, toast, ToastContainer } from "react-toastify";
import Gallery from './Gallery'
import { Link } from 'react-router-dom'


const Home = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      department:'',
      appointmentDate: "",
    });

    const Treatments=[
      {img:"treatments/panjakarma.jpg",desc:"Ayurvedic Treatments & Panjakarma"},
      {img:"treatments/knee.jpg",desc:"Knee Pain Clinic"},
      {img:"treatments/backpain.jpg",desc:"Back Pain & Spinal"},
      {img:"treatments/geriatric.jpg",desc:" Geriatric & Pediatric Rehabilitation"},
      {img:"treatments/wellness.jpg",desc:"Advanced Wellness & Preventing Modalities"},
      {img:"treatments/neuro.jpg",desc:"Advanced Neuro Rehabilitation"},
      {img:"treatments/dental.jpg",desc:"Dental Specialty Clinic"},
      {img:"treatments/mediflora.jpg",desc:"Mediflora Herbal Solutions"},
    ]
  const handleBook = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "https://formsubmit.co/ajax/refadk007@gmail.com",
        formData,
        { "Content-Type": "application/json", Accept: "application/json" }
      );
      console.log(response);
      if (response.status == 200) {
        toast.success("Booked successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
 
      <div className="section__container header__container" id="home">
        <div className="header__content">
          <h1 className="headding">
          Welcome to  Prashanthi Ayurveda
          </h1>
          <p>
          <Typewriter 
                  words={[
                  'Ayurvedic Rahabilitation and wellness',
                  'Fell the Best of Ayuvedic Healness',
                  'Authentic, Pure and Herbal Ayurvedic Solutions',
                  // 'Best Health Services'
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1400}
                />
          </p>
          {/* <button className="btn">See Services</button> */}
        </div>
        <div className="header__form">
          <form>
            <h4 className="form-headding">Book Now</h4>
            <input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              type="text"
              placeholder="Phone No"
            />
            {/* <select name="" id="">
                <option value="">Select</option>
                <option value=""></option>
                <option value=""></option>
              </select> */}
            <input
              onChange={(e) =>
                setFormData({ ...formData, appointmentDate: e.target.value })
              }
              type="date"
            />
<select
  name="department"
  onChange={(e) =>
    setFormData({ ...formData, department: e.target.value })
  }
>
  <option value="Ortho">Ortho</option>
  <option value="Dental">Dental</option>
  <option value="Neuro">Neuro</option>
  <option value="Other">Other</option>
</select>
            <button className="btn form__btn" onClick={handleBook}>
              Book Appointment
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />





    <div className='container-fluid home-container'>
      {/* <div className="row hero-row ">
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

        <div className="col-lg-6 col-sm-12  right-div">
         
        </div>
      </div> */}
     <Founder/>

      <Underline/>
      <Counter/>
      <Underline/>
      <div className='mb-3'>
        <h4 className='headline'>Our Treatments</h4>
        <div className="treatments">
          {
            Treatments.map((i,j)=>(
              <div key={j} >
                <img src={i.img} alt="" />
                <p>{i.desc}</p>
              </div>
            ))
          }
        </div>
        <div className='d-flex justify-content-center'><Link to ={"/treatments-clinic"} className='btn'>view more</Link>
        </div>
      </div>
      <Underline/>
     <Services/>
     <Gallery/>

    </div>
    </>
  )
}

export default Home
