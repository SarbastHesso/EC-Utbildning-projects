import React from 'react';
import './ToggleNav.css';
import AudioToggle from '../audioToggle/AudioToggle';
import ThemeToggle from '../themeToggle/ThemeToggle';

const ToggleNav = () => {
  return (
    <div className="topNav">
        <AudioToggle/>
        <ThemeToggle/>
    </div>
  )
}

export default ToggleNav