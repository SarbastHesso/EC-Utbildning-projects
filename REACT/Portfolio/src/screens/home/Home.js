import React from 'react';
import './Home.css';
import ToggleNav from '../../components/toggleNav/ToggleNav';
import profileImg from '../../assets/images/profileImg.jpg';
import profileImg2 from '../../assets/images/profileImg2.jpg';
import {themeContext} from '../../context/themeContext';
import { useContext } from 'react';
import CV from '../../assets/document/CV.pdf'
import PB from '../../assets/document/PB.pdf'

const Home = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='home' id='home'>
      <ToggleNav/>
      <div className="headerContainer">
        <div className="header">
          <div className="headerLeft">
            <h1>SARBAST HESSO</h1>
            <h3>FRONTENDUTVECKLARE</h3>
            <p>Teknikintresserad med kunskap och kompetens inom webb- & frontendutveckling som jag tillförskaffat från min YH-utbildning & självlärning.</p>
            <div className='btnWrap'>
              <a href={CV} target = "_blank" rel="noopener noreferrer" style={{color: darkMode ? "var(--white-text": "var(--black-text"}}>VISA CV</a>
              <a href={PB} target = "_blank" rel="noopener noreferrer" style={{color: darkMode ? "var(--white-text": "var(--black-text"}}>VISA PERSONLIGTBREV</a>
            </div>
          </div>
          <div className="headerRight">
            <div className="imgWrap">
              {
                darkMode ? 
                <img className='profileImg' src={profileImg} alt="profile" />
                :
                <img className='profileImg' src={profileImg2} alt="profile" />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

