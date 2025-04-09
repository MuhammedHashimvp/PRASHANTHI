import React from 'react'
import'../styles/founder.css'
import founderImg from '../assets/founder-image.png'


const Founder = () => {
  return (
    <div className='container-fluid container mb-5'>
        <div className="row founder-row ">
            <h1 className='mb-5 remove-overflow text-center '>Our Founder</h1>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-start" >
              <div className="image-container">
                <img className='founder-img' src={founderImg} alt="doctor image" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex flex-column align-items-lg-start align-items-center 
                justify-content-center" >
              <h3 className='remove-overflow'>Dr. P. Hebeeb B. Sc. BAMS, FOR (Medvarsity)</h3>
              <h5 className='remove-overflow'>(Medical Director)</h5>
              <p>After graduating Ayurveda Medicine in 1999 he has been conducting various researches in Ayurveda system of Healing to ensure the efficacy and accuracy of various Ayurveda treatments by incorporating the modern diagnostics & screening. He has succeeded in his efforts to bring up evidence based studies in Ayurveda healing. He participated in many National & International Seminars in which he got great appreciations for his achievements. He has won the First position in All Kerala competition for Clinical Case Presentations conducted by Ayurveda Hospital Management Association. </p>
          </div>

        </div>
    </div>
  )
}

export default Founder