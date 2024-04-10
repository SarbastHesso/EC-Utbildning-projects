import React, {useState} from 'react';
import './Footer.css';
import {Link} from 'react-scroll';

const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  return (
    <footer className='footer'>
      <div className="textWrap">
        <Link to='home' 
        className='logo' 
        exact={true} 
        spy={true} 
        smooth={true} 
        duration={500} 
        offset={0}>
          <p>SH</p>
        </Link>
        <p>SARBAST HESSO</p>
        <p>{year}</p>
      </div>
    </footer>
  )
}

export default Footer