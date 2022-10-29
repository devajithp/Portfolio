import React, { useState } from 'react'
import "./Certifications.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Certificate from "../Certifications/Certificates/Certificate"




function Certifications() {
 
   const[image,setImage]=useState("none")
   const displayImage=(e)=>
   {
      let id=e.currentTarget.id
      console.log(id)
      setImage(id)
     
   }
  return (
    <div>
      <Certificate  id={image}></Certificate>
     
      <h1 className='certificationTitle'>Awards and Certifiations</h1>
      <div className='cards'>
      
      <div id='mongo' onClick={displayImage}  className='certificateCard'>
      
         <h3 className=''>MongoDB Assosiate Certifiation</h3>
      </div>
      
      <div id='gems'onClick={displayImage} className='certificateCard'>
         <h3 className=''>TCS Gems Award</h3>
      </div>
      <div id='java'onClick={displayImage} className='certificateCard'>
         <h3 className=''>Core Java LinkedIn certificate</h3>
      </div>
      <div id='agile'onClick={displayImage} className='certificateCard'>
         <h3 className=''>Agile for beginners certificate</h3>
      </div>
      <div id='mysql'onClick={displayImage} className='certificateCard'>
         <h3 className=''>MySQL LinkedIn certificate</h3>
      </div>
      <div id='chief'onClick={displayImage} className='certificateCard'>
         <h3 className=''>Cheif Minister's Student Excellence Award for under graduation</h3>
      </div>
      </div>
     
      
    </div>

  )
}

export default Certifications
