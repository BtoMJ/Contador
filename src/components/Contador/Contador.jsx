import React from 'react';
import './Contador.css';

function Contador({ clicks}) {
  return (
    <div className='contador-container'>
        {clicks}
    </div>
  )
}

export default Contador