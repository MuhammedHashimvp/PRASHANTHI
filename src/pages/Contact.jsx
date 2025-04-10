import React from "react";
import "../styles/contact.css";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail, MdAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPlaneArrival } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";



const Contact = () => {
  return (
    <>
      
      <section className="contact-section">
        <div className="contact-bg">
          <h3 className="remove-overflow">Contact Us</h3>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text">
            For all queries and questions and your valuable feedback please
            connect to us at
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span>
                <i className="fa">
                  <FaMobileAlt />
                </i>
              </span>
              <span className="text">Phone No.</span>
              <span className="text">9072478959</span>
            </div>
            <div>
              <span>
                <i className="fa">
                  <MdEmail />
                </i>
              </span>
              <span className="text">E-mail</span>
              <span className="text">example@gmail.com</span>
            </div>
            <div>
              <span>
                <i className="fa">
                  <FaLocationDot />
                </i>
              </span>
              <span className="text">Address</span>
              <span className="text">Vilayil, Cheekkode, Kerala 673645</span>
            </div>
            <div>
              <span>
                <i className="fa">
                  <MdAccessTimeFilled />
                </i>
              </span>
              <span className="text">Opening Hours</span>
              <span className="text">24x7</span>
            </div>

            <div className="map">
              <img src="image/contact-png.png" alt="" />
            </div>
          </div>
          <div className="howtoreach">
            <div className="flex-grow-1 howtoreachdiv">
              
              <ul>
                <li><h4>How to Reach</h4></li>
                <li><FaTrainSubway/> Calicut Airport 15km</li>
                <li><FaPlaneArrival/> Calicut Railway 31km</li>
                <li><FaCity/> Calicut City 30km</li>
                <li><FaTrainSubway/> Parapanangadi Railway 34km</li>
                <li><FaCity/> Malappuram City 25km</li>
              </ul>
              
              
              
              
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.714995006778!2d76.00735677355857!3d11.208710151074403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba647e66385fd89%3A0xe797cf307c92fea2!2sPrashanthi%20Ayurveda%20Hospital!5e0!3m2!1sen!2sin!4v1743941128759!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prashanthi Ayurveda Hospital Location"
              ></iframe>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
