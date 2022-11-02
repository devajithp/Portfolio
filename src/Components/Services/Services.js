import React from 'react'
import './Services.css'

function Services() {
  return (
    <div>
      <h2 className='serviceTitle'>Services</h2>
      <div className='container'>
      <div className='cards mt-5 row'>
      <div className='ServiceCard mt-3 col-sm-8 col-8 col-md-4 col-lg-4 col-xl-4'>
         <h6 className=''>Static Web page designing</h6>
      </div>
      <div className='ServiceCard mt-3 col-sm-8 col-8 col-md-4 col-lg-4 col-xl-4'>
         <h6 className=''>Web development using NodeJS</h6>
      </div>
      <div className='ServiceCard mt-3 col-sm-8 col-8 col-md-4 col-lg-4 col-xl-4'>
         <h6 className=''>Portfolio development using React</h6>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Services
