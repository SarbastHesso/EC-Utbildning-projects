import React, { useContext } from 'react';
import './ThemeToggle.css';
import {BsFillMoonFill} from 'react-icons/bs';
import {BsFillSunFill} from 'react-icons/bs';
import { themeContext } from '../../context/themeContext';

const ThemeToggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({type: 'TOGGLE'})
    }
  return (
    <div className='themeToggle' onClick={handleClick}>
        <BsFillMoonFill className='moon'/>
        <BsFillSunFill className='sun'/>
        <div className="toggleBtn" 
        style={darkMode? {left: '2px'} : {right: '2px'}}
        >
        
        </div>
    </div>
  )
}

export default ThemeToggle