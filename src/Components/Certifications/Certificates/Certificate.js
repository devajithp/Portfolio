import React from 'react'
import './Certificate.css'



 
function Certificate(props) {
  
  
   let image=props.id 
   const img = require(`../../../Assets/${image}.png`)
 


  return (
    <div class="img-container">
      <img alt='click the card' className='imagePosition' src={img}></img> 
    </div>
  )
}

export default Certificate
