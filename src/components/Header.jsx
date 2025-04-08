import React, { useState } from "react";
import "../styles/header.css";
import logo from "../assets/logo.png"; 
import { Link } from "react-router-dom";
import { Bounce, toast,ToastContainer } from 'react-toastify'
import axios from "axios";

const Navbar = () => {
  
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    phone:'',
    // speciality:'',
    appointmentDate:''
  })

  // submit
  const handleBook =async(e)=>{
    e.preventDefault();
    try {
      let response =await axios.post('https://formsubmit.co/ajax/refadk007@gmail.com',formData,{  'Content-Type': 'application/json',
        'Accept': 'application/json'})
        console.log(response)
      if(response.status == 200){
        toast.success('Booked successfully')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (

    <header>
        <nav className="section__container nav__container">
          <Link to={'/'}>
              <div className="nav__logo"><img src={logo} alt="" /></div>
              </Link>
          <ul className="nav__links">
            <Link to={'/'}><li className="link"><a href="#home">Home</a></li></Link>
            <li className="link"><a href="#service-section">Services</a></li>
           <Link to={'/appointment'}><li className="link"><a href="#pages">Book Appointment</a></li></Link>
          </ul>
          <Link to={'/contact'}>
          <button className="btn">Contact Us</button>
          </Link>
        </nav>

        <div className="section__container header__container" id="home">
          <div className="header__content">
            <h1 className="headding">Providing an Exceptional Patient Experience</h1>
            <p>
              Welcome, where exceptional patient experiences are our priority. With compassionate care,
              state-of-the-art facilities, and a patient-centered approach, we're dedicated to your well-being.
              Trust us with your health and experience the difference.
            </p>
            {/* <button className="btn">See Services</button> */}
          </div>
          <div className="header__form">
            <form>
            <h4 className="form-headding">Book Now</h4>
              <input onChange={(e)=>setFormData({...formData,name:e.target.value})} type="text" placeholder="Name" />
              <input onChange={(e)=>setFormData({...formData,email:e.target.value})} type="text" placeholder="Email" />
              <input onChange={(e)=>setFormData({...formData,phone:e.target.value})} type="text" placeholder="Phone No" />
              {/* <select name="" id="">
                <option value="">Select</option>
                <option value=""></option>
                <option value=""></option>
              </select> */}
              <input  onChange={(e)=>setFormData({...formData,appointmentDate:e.target.value})} type="date" />
              <button className="btn form__btn"  onClick={handleBook}>Book Appointment</button>
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
      </header>
  );
};

export default Navbar;
