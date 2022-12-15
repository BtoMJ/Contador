import React from 'react';
import './Boton.css';

function Boton({ esBotonDeClick, tipoClick, texto }) {
  return (
    <div className='boton-container'>
        <button 
            className={ esBotonDeClick ? 'boton-click' : 'boton-reset' }
            onClick={ tipoClick }>
            {texto}
        </button>
    </div>
  )
}

export default Boton