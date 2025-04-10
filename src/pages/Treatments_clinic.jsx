import React from 'react'
import Navbar from '../components/Header'
import '../styles/treatments_clinic.css'


function Treatments_clinic() {
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
  return (
    <>
      <div>
        <h4 className='headline'>Our Treatments</h4>
        <div className="treatments">
          {
            Treatments.map((i,j)=>(
              <div key={j}>
                <img src={i.img} alt="" />
                <p>{i.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Treatments_clinic
