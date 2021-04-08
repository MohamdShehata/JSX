import './App.css';
import React from 'react';
import DuaLipa from "./DuaLipa2.jpg"
import './Style.css';
const App=()=> {
  
  return (
   <React.Fragment className='row'>
      
      <h1 style={{color:'purple', fontFamily: 'Dancing Script',fontWeight: 'bold',fontSize: 80,textAlign: "center"}}>Dua Lipa</h1>
      <br ></br>
      <a href="https://dualipa.co/moonlighteditionvinyl">
    <img src={DuaLipa} className='column' alt = 'Dua' title="Dua Lipa"/>
    </a>
     <a href="https://dualipa.co/moonlighteditioncd" >
    <img src="/Dualipa1.png" className='column' alt = 'Dua' title="Dua Lipa New Album"/>
     </a>
    <video src="/Duaa.mp4"  className='column'  controls="controls" autoplay="true" title="Dua Lipa New Album Trailer"/>
     </React.Fragment>
     

  );
}

export default App;
