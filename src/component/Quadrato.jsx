import React from 'react'

const Quadrato = (props)=>{
  
    const changeColor = (event)=>{
            let body = document.getElementById("body")
            body.style.backgroundColor =event.target.style.backgroundColor
    }
  return <div  onClick={changeColor} style={{backgroundColor: props.colore,  marginLeft: props.margin}} className="quadrato">

  </div>
}
export default Quadrato