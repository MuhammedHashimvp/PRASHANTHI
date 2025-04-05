import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='container-fluid home-container'>
        <div className="row p-4">
            {/* left */}
            <div className="col-lg-6 col-sm-12  left-div">
                <h1 className='title'>Expert Medical Care <br /> Starts with the</h1>
                <h1 className='title'><span>Right Doctor</span></h1>
                <p>Connect with trusted doctors online for expert advice. Get quick, reliable <br /> consultations from certified professionals—anytime, anywhere</p>
                <button>Appoint Now</button>
            </div>
            {/* right */}
            <div className="col-lg-6 col-sm-12  right-div">

            </div>
        </div>
    </div>
  )
}

export default Home