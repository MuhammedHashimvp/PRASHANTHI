import React, { useState } from 'react'
import '../styles/book.css'
import Undreline from '../components/Underline'
import axios from 'axios'
import { Bounce, toast,ToastContainer } from 'react-toastify'

const Book = () => {

  const [formData,setFormData]=useState({
    name:'',
    email:'',
    phone:'',
    speciality:'',
    appointmentDate:''
  })
  console.log(formData)

  // submit
  const handleBook =async()=>{
    try {
      let response =await axios.post('https://formsubmit.co/ajax/refadk007@gmail.com',formData,{  'Content-Type': 'application/json',
        'Accept': 'application/json'})
      if(response.status == 200){
        toast.success('Booked successfully')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container-fluid book-container'>
      <div className="row book-row" data-aos="zoom-up">
        <div className="col-lg-3 col-sm-12"></div>
        <div className="col-lg-6 col-sm-12">
          <div className="box shadow p-4 ">
            <h2 className='book-title'>Book An Appointment</h2>
            <Undreline/>
            <div className="input-div">
              <input onChange={(e)=>setFormData({...formData,name:e.target.value})}  className='form-control mt-2 inp' placeholder='name' type="text" name="name" id="" />
              <input onChange={(e)=>setFormData({...formData,email:e.target.value})} className='form-control mt-2 inp' placeholder='email' type="email" name="email" id="" />
              <input onChange={(e)=>setFormData({...formData,phone:e.target.value})} className='form-control mt-2 inp' placeholder='phone' type="text" name="phone" id="" />
              {/* select speciality */}
              <select onChange={(e)=>setFormData({...formData,speciality:e.target.value})} className='form-control mt-2 inp' name="speciality" id="">
                <option value="">select speciality</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              {/* appointment date */}
              <input onChange={(e)=>setFormData({...formData,appointmentDate:e.target.value})} className='form-control mt-2 inp'name='date' type="date" />
            </div>
            <div className="button-div">
              <button onClick={handleBook} className='btn w-25  book-btn'>Book</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12"></div>
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
  )
}

export default Book