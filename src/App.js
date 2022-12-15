import { useState } from 'react';
import './App.css';
import Boton from './components/Boton/Boton';
import Contador from './components/Contador/Contador';

function App() {

  const [clicks, setClicks] = useState(0);
  
  const addClick = () =>{
    setClicks ( clicks + 1 );
  };

  const resetClick = () =>{
    setClicks(0);
  };

  return (
    <div className="App">
      <h1>Contador de clicks con useState</h1>

      <Contador clicks = { clicks }/>

      <Boton
        tipoClick = { addClick }
        esBotonDeClick = { true }
        texto = 'Click'
       />

      <Boton
        tipoClick = { resetClick }
        esBotonDeClick = { false }
        texto='Reset'      
      />
    </div>
  );
}

export default App;
