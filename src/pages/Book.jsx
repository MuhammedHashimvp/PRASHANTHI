import React, { useState } from 'react'
import '../styles/book.css'
import axios from 'axios'
import { Bounce, toast,ToastContainer } from 'react-toastify'


const Book = () => {

  const [formData,setFormData]=useState({
    name:'',
    email:'',
    phone:'',
    // speciality:'',
    appointmentDate:''
  })

  // submit
  const handleBook =async(e)=>{
    console.log('inside function')
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
    <>
    <div className='container-fluid book-container'>
    
    <div className="book-bg">
        <h3 className='remove-overflow'>Schedule your appointment</h3>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text">
          Lorem ipsum ard dolor sit amet consectetur adipisicing elit. Qui neque nostrum incidunt, obcaecati nam facilis eos ipsam eligendi facere voluptas enim, quos atque voluptatem magni? Laborum, dicta ratione? Earum, ea!
        </p>
        </div>

      <div className="row book-row" >
        <div className="col-lg-6 col-sm-12"></div>
        <div className="col-lg-6 col-sm-12">
        <div className="header__form bookpage-form">
            <form className='bookpage-form'>
              <h4 className="form-headding">Book Now</h4>
              <input onChange={(e)=>setFormData({...formData,name:e.target.value})} type="text" placeholder="Name"  name='Name'/>
              <input onChange={(e)=>setFormData({...formData,email:e.target.value})} type="text" placeholder="Email"  name='Email'/>
              <input onChange={(e)=>setFormData({...formData,phone:e.target.value})} type="text" placeholder="Phone No" name='Phone' />
              {/* <select name="" id="">
                <option value="">Select</option>
                <option value=""></option>
                <option value=""></option>
              </select> */}
              <input onChange={(e)=>setFormData({...formData,appointmentDate:e.target.value})} type="date"  name='Date'/>
              <button className="btn form__btn"  onClick={handleBook}>Book Appointment</button>
            </form>
          </div>
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
    </div>
    </>
  )
}

export default Book