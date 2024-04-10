import React from 'react';
import './Contact.css';
import ContactImg from '../../assets/images/contactImg.svg';
import ContactForm from '../../components/contactForm/ContactForm';
import { BsFillTelephoneFill  } from "react-icons/bs";
import { GrMail  } from "react-icons/gr";
import {BsLinkedin} from 'react-icons/bs';
import {HiLocationMarker} from 'react-icons/hi';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="contactContainer">
        <h3>KONTAKTA MIG</h3>
        <div className="contactMain">
          <div className="contactLeft">
            <div className="contactImgWrap">
              <img src={ContactImg} alt="Send email" className='contactIImg'/>
            </div>
            <div className="contactInfo">
              <div  className="infoItem">
                <a className='infoLink' href='tel:0704453050' target = "_blank" rel="noopener noreferrer">
                  <BsFillTelephoneFill className='infoIcon'/>
                  <p>070 445 30 50</p>
                </a>
              </div>
              <div className="infoItem">
                <a className="infoLink" href={'mailto:sarbast.hesso@gmail.com'} target = "_blank" rel="noopener noreferrer">
                  <GrMail/>
                  <p>sarbast.hesso@gmail.com</p>
                </a>
              </div>
              <div className="infoItem">
                <a className="infoLink" href={'https://www.google.se/maps/place/St%C3%A5ngj%C3%A4rnsgatan+16,+724+77+V%C3%A4ster%C3%A5s/@59.5995343,16.482953,17z/data=!3m1!4b1!4m5!3m4!1s0x465e63d713fba26d:0xe59056bbcefd05f6!8m2!3d59.5995343!4d16.485147?hl=en&authuser=0'} target = "_blank" rel="noopener noreferrer">
                  <HiLocationMarker className='infoIcon'/>
                  <p>Stångjärnsgatan 16, Västerås</p>
                </a>
              </div>
              <div className="infoItem">
                <a className="infoLink" href='https://www.linkedin.com/in/sarbast-hesso-5a4768161/' target = "_blank" rel="noopener noreferrer">
                  <BsLinkedin className='infoIcon'/>
                  <p>Linkedin</p>
                </a>
              </div>
            </div>
          </div>
          <div className="contactRight">
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact