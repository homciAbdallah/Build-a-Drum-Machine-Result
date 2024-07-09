import Drum from "./Drum.jsx";
import drumPads from "./const.jsx";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [indicatue, setIndicatue] = useState('');
 useEffect(() => {
  document.addEventListener('keydown',(e)=>{
   playAudio(e.key.toUpperCase()) 
  //console.log(e)
  })
 }, []);

const playAudio = (e,j) => {   
const audio=document.getElementById(e)
audio.play()
//console.log(e)
setIndicatue(j)
  };
  

  return (
    <>
      <div className="container mt-5" id="drum-machine" style={{width :'320px'}} >
        <h3 style={{color:'white'}} >Build a Drum Machine</h3>
      <div   id="display">{indicatue}</div>
      <div className="drum-pads ">
        {drumPads.map((item) => (
          <Drum key={item.url} drumPads={item} playAudio={playAudio}/>
        ))}
      </div>
      </div>
    </>
  );
}

export default App;
