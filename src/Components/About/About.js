import React from 'react'
import "./About.css"

function About() {
  return (
    <div>
      <h1 className='aboutTitle'>About Me</h1>
      <div className='cards'>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1 className='frontCardTitle'>Brief Introduction </h1>
      
    </div>
    <div style={{padding:"10px"}} class="flip-card-back"> 
      <p style={{marginTop:"40px",textAlign:"justify",fontSize:"12px"}} className=''>I am a Self-Taught MERN stack developer willing to work in a reputed firm having a good
      work culture.</p>
      <p style={{textAlign:"justify",fontSize:"12px"}}> I have been working in TCS for past one year besides that I put myself busy in learning new things. 
      I have  concrete knowledge in HTML, CSS, JavaScript, ReactJS, NodeJs. Also I made good skill in handling frameworks and libraries
      like Axios, Handlebars, Bootstrap.
      </p>  
      <p style={{textAlign:"justify",fontSize:"12px"}}>I am the person who seek new Challenges beacuse Challenges makes me self motivated and enables it me to learn new things. </p>   
      
         
         
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1 className='frontCardTitle'>Education</h1>
      
    </div>
    <div class="flip-card-back"> 
         
      <h1 className='educationLevel'>B-Tech</h1>
      <h3>College of Engineering, Trivandrum</h3>
      <h3>CGPA: <span style={{fontWeight:'800'}}>9.24</span></h3>
      <h1 className='educationLevel'>Plus two</h1>
      <h3>Devadhar higher Secondary school Tanur</h3>
      <h3>Percentage: <span style={{fontWeight:'800'}}>93</span></h3>
        
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h1 className='frontCardTitle'>Contact Details </h1>
      
    </div>
    <div class="flip-card-back"> 
      <h3 className='emailMargin'>E-mail- devajithmr@gmail.com</h3>  
      <h3 className=''>Mobile- 8139819671</h3> 
      <h2 style={{color:'black'}}>Connect me through Social networks</h2> 
     <a href='https://github.com/devajithp'><i style={{fontSize:'36px',color:'white'}} class="fa fa-github"></i> </a>  
     <a href='https://www.linkedin.com/in/devajith-p-1a2983182/'><i style={{fontSize:'36px',color:'white',marginLeft:'20px'}} class="fa fa-linkedin"></i> </a>  
      
    </div>
  </div>
</div>

   </div>
    </div>
  )
}

export default About
