import logo, { ReactComponent } from './logo.svg';
import './App.css';
import React from 'react'
import Quadrato from './component/Quadrato.jsx'
import { useEffect, useState } from 'react';
function App() {
  const [squares, setSquares] = useState([])
  let colori = ["red", "green", "blue", "yellow"]
  useEffect(() => {
   let quadrati = []
    for (var i = 0; i < 4; i++) {
      quadrati.push({ padding: Math.random() * 1000, colore: colori[i] })
    }
    setSquares(quadrati)
  },[])

  return (
    <div className="App">
      {
        squares.map((quadrato, index) => {
          return <Quadrato key={index} colore={quadrato.colore} margin={quadrato.padding}></Quadrato>
        })
      }
    </div>
  );
}

export default App;


