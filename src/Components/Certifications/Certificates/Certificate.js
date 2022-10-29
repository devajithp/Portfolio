import React from 'react'
import './Certificate.css'

 
function Certificate(props) {
  
   let image=props.id 
 


  return (
    <div class="img-container">
      <img alt='click the card' className='imagePosition' src={`/pictures/${image}.png`}></img>
    </div>
  )
}

export default Certificate
