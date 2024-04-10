import React, {useState} from 'react';
import './AudioToggle.css';
import Music from '../../assets/Audio/music.mp3';
import {GiMusicSpell} from 'react-icons/gi';

const AudioToggle = () => {
  const [audio] = useState(new Audio(Music));
  const [isPlaying, setIsPlaying] = useState(false);
  const playPause = () => {
    if (isPlaying){
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }
  return (
    <div className='audioIconWrap'> 
      {
        isPlaying 
        ?
        <div className="loader" onClick={playPause}>
          <span className='stroke'></span>
          <span className='stroke'></span>
          <span className='stroke'></span>
          <span className='stroke'></span>
          <span className='stroke'></span>
          <span className='stroke'></span>
          <span className='stroke'></span>
        </div>
        :
        <GiMusicSpell className='audioIcon' onClick={playPause}/>
      }
    
    </div>
  )
}

export default AudioToggle