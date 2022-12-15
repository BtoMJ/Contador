import React from 'react';
import './Contador.css';

function Contador({ clicks}) {
  return (
    <div className='contador-container'>
        <h3>{clicks}</h3>
    </div>
  )
}

export default Contador