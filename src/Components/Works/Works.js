import React from 'react'
import './Works.css'

function Work() {
  return (
    <div>
      <h1 className='worksTitle'>My Works</h1>
      <div className='cards'>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1 className='frontCardTitle'>Shopping-Cart</h1>
      <h2 >E-commerce Web Site</h2>
    </div>
    <div class="flip-card-back"> 
      <h1 className='summary'>Summary</h1>     
      <p>Web site is built in nodeJs.MongoDB is used as data base and it is connected to mongo Atlas and the web-site is hosted in heroku.This project helps me to familiarise more with rest APIs,
         Express-generator framework, handlebars template engine and bootstrap library.</p>
         <a  style={{color:'white'}}href='https://github.com/devajithp/Shopping-Cart'>GitHub Link</a><br></br><br></br>
         <a  style={{color:'white'}}href='https://yourshoppingfriend.herokuapp.com/'>Web-site Link</a>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1 className='frontCardTitle'>Netflix Clone </h1>
      <h2 >React Js</h2>
    </div>
    <div class="flip-card-back"> 
      <h1 className='summary'>Summary</h1>     
      <p>Web site is built using ReactJs. Movie datas are dynamically added with the help of API documentation of The Movie Data base site(TMDB) through generating API key.
         This project helps me to familiarise fetching APIs from API documentations,
         ReactJs framework.</p>
         <br></br><br></br>
         <a  style={{color:'white'}}href='https://devajithp.github.io/Netflix-clone/'>Web-site Link</a>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1 className='frontCardTitle'>My Portfolio </h1>
      <h2 >React Js</h2>
    </div>
    <div class="flip-card-back"> 
      <h1 className='porfolioSummary'>Surprise ! you are watching my Work </h1>     
      
         <a  style={{color:'white'}}href=''>GitHub Link</a><br></br><br></br>
         
    </div>
  </div>
</div>
   </div>
    </div>
  )
}

export default Work
