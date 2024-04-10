import React from 'react';
import './Btn.css';

const Btn = ({btnTitle}) => {

  return (
    <div className='btnWrap'>
        <button className='btn'>
            {btnTitle}
        </button>
    </div>
  )
}

export default Btn