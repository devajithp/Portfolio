import React from 'react'
import "./About.css"

function About() {
  return (
    <div>
      <div>
      <h2 className='aboutTitle'>About Me</h2>
      </div>
      <div className='cards'>
        <div className='row'>
      <div className="flip-card mt-2 col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
  <div class="flip-card-inner">
    <div className="flip-card-front">
      <h3 className='frontCardTitle'>Brief Introduction </h3>
      
    </div>
    <div style={{padding:"10px"}} class="flip-card-back"> 
      <p style={{marginTop:"40px",textAlign:"justify",fontSize:"12px"}} className=''>I am a Self-Taught MERN stack developer willing to work in a reputed firm having a good
      work culture.</p>
      <p style={{textAlign:"justify",fontSize:"12px"}}> I have been working in TCS for past one year besides that I put myself busy in learning new things. 
      I have  concrete knowledge in HTML, CSS, JavaScript, ReactJS, NodeJs. Also I made good skill in handling frameworks and libraries
      like Axios, Handlebars, Bootstrap.
      </p>  
      <p style={{textAlign:"justify",fontSize:"12px"}}>I am the person who seek new Challenges beacuse Challenges makes me self motivated and it enable me to learn new things. </p>   
      
         
         
    </div>
  </div>
</div>
<div className="flip-card mt-2 col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h3 className='frontCardTitle'>Education</h3>
      
    </div>
    <div className="flip-card-back"> 
         
      <h4 style={{marginTop:"20px"}} className='educationLevel'>B-Tech</h4>
      <h5>College of Engineering, Trivandrum</h5>
      <h6>CGPA: <span style={{fontWeight:'800'}}>9.24</span></h6>
      <h4 className='educationLevel'>Plus two</h4>
      <h5>Devadhar higher Secondary school Tanur</h5>
      <h6>Percentage: <span style={{fontWeight:'800'}}>93</span></h6>
        
    </div>
  </div>
</div>
<div class="flip-card mt-2 col-sm-12 col-12 col-md-4 col-lg-4 col-xl-4">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3 className='frontCardTitle'>Contact Details </h3>
      
    </div>
    <div class="flip-card-back"> 
      <h5 className='emailMargin'>E-mail- devajithmr@gmail.com</h5>  
      <h5 className=''>Mobile- 8139819671</h5> 
      <h6 style={{color:'black'}}>Connect me through Social networks</h6> 
     <a href='https://github.com/devajithp'><i style={{fontSize:'36px',color:'white'}} class="fa fa-github"></i> </a>  
     <a href='https://www.linkedin.com/in/devajith-p-1a2983182/'><i style={{fontSize:'36px',color:'white',marginLeft:'20px'}} class="fa fa-linkedin"></i> </a>  
      
    </div>
  </div>
</div>
 </div>
   </div>
    </div>
  )
}

export default About
