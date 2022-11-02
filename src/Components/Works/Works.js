import React from 'react'
import './Works.css'

function Work() {
  return (
    <div>
      <h2 className='worksTitle'>My Works</h2>
      <div className='cards row'>
        
<div className="flip-card mt-2 col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h3 className='frontCardTitle'>Shopping-Cart</h3>
      <h4 >E-commerce Web Site</h4>
    </div>
    <div style={{padding:"10px"}} class="flip-card-back"> 
      <h4 className='summary'>Summary</h4>     
      <p style={{marginTop:"25px",textAlign:"justify",fontSize:"12px"}}>Web site is built in nodeJs.MongoDB is used as data base and it is connected to mongo Atlas and the web-site is hosted in heroku.This project helps me to familiarise more with rest APIs,
         Express-generator framework, handlebars template engine and bootstrap library.</p>
         <a  style={{color:'white'}}href='https://github.com/devajithp/Shopping-Cart'>GitHub Link</a><br></br>
         <a  style={{color:'white' ,marginTop:"5px"}}href='https://yourshoppingfriend.herokuapp.com/'>Web-site Link</a>
    </div>
  </div>
</div>
<div className="flip-card mt-2 col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h3 className='frontCardTitle'>Netflix Clone </h3>
      <h4 >React Js</h4>
    </div>
    <div style={{padding:"10px"}} class="flip-card-back"> 
      <h4 className='summary'>Summary</h4>     
      <p style={{marginTop:"25px",textAlign:"justify",fontSize:"12px"}}>Web site is built using ReactJs. Movie datas are dynamically added with the help of API documentation of The Movie Data base site(TMDB) through generating API key.
         This project helps me to familiarise fetching APIs from API documentations,
         ReactJs framework.</p>
         <br></br>
         <a  style={{color:'white'}}href='https://devajithp.github.io/Netflix-clone/'>Web-site Link</a>
    </div>
  </div>
</div>
<div className="flip-card mt-2 col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h3 className='frontCardTitle'>My Portfolio </h3>
      <h4 >React Js</h4>
    </div>
    <div class="flip-card-back"> 
      <h3 className='porfolioSummary'>Surprise ! you are watching my Work </h3>     
      
         <a  style={{color:'white'}}href=''>GitHub Link</a><br></br><br></br>
         
    </div>
  </div>
</div>
   </div>
    </div>
  )
}

export default Work
