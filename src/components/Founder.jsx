import React from 'react'
import'../styles/founder.css'
import founderImg from '../assets/founder-image.png'


const Founder = () => {
  return (
    <div className='container-fluid'>
        <div className="row founder-row ">
            <h1 className='mb-5 remove-overflow'>Our Founder</h1>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center  p-5" >
              <div className="image-container">
                <img className='founder-img' src={founderImg} alt="doctor image" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 text-center d-flex flex-column align-items-lg-start align-items-center 
                justify-content-center" >
              <h2 className='remove-overflow'>DR. HEBEEB</h2>
              <h5 className='remove-overflow'>Chief minister</h5>
              <h5 className='remove-overflow'>Experience : 30 Years</h5>
              <h5 className='remove-overflow'>Qualification : BHMS, SCPH</h5>
          </div>

        </div>
    </div>
  )
}

export default Founder