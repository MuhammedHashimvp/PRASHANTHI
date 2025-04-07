import React from 'react'
import'../styles/founder.css'
import founderImg from '../assets/founder-image.jpg'


const Founder = () => {
  return (
    <div className='container-fluid'>
        <div className="row founder-row ">
            <h1 className='mb-5'>Our Founder</h1>

            <div className="col-lg-6 col-sm-12 d-flex justify-content-center " data-aos="fade-right">
                <img className='founder-img' src={founderImg} alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 text-center  d-flex flex-column align-items-start  justify-content-center" data-aos="fade-left">
                <h2>DR. HEBEEB</h2>
                <h5>Chief minister </h5>
                <h5>Experience : 30 Years</h5>
                <h5>Qualification : BHMS,SCPH</h5>
            </div>
        </div>
    </div>
  )
}

export default Founder