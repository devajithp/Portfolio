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
     
      <h2 className='certificationTitle'>Awards and Certifiations</h2>
      <div className='cards mt-5 '>
         <div className='row'>
      
      <div id='mongo' onClick={displayImage}  className='certificateCard mt-3 col-sm-8 col-8 col-md-4 col-lg-4 col-xl-4'>
      
         <h6 className=''>MongoDB Assosiate Certifiation</h6>
      </div>
      
      <div id='gems'onClick={displayImage} className='certificateCard mt-3 col-sm-8 col-8 col-md-4 col-lg-4 col-xl-4'>
         <h6 className=''>TCS Gems Award</h6>
      </div>
      <div id='java'onClick={displayImage} className='certificateCard mt-3 col-sm-8 col-8 col-md-4 col-lg-4 col-xl-4'>
         <h6 className=''>Core Java LinkedIn certificate</h6>
      </div>
      <div id='agile'onClick={displayImage} className='certificateCard mt-3 col-sm-8 col-8 col-md-4 col-lg-4 col-xl-4'>
         <h6 className=''>Agile for beginners certificate</h6>
      </div>
      <div id='mysql'onClick={displayImage} className='certificateCard mt-3 col-sm-8 col-8 col-md-4 col-lg-4 col-xl-4'>
         <h6 className=''>MySQL LinkedIn certificate</h6>
      </div>
      <div id='chief'onClick={displayImage} className='certificateCard mt-3 col-sm-8 col-8 col-md-4 col-lg-4 col-xl-4'>
         <h6 className=''>Cheif Minister's Student Excellence Award for under graduation</h6>
      </div>
      </div>
     
      </div>
    </div>

  )
}

export default Certifications
