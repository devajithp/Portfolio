import React from 'react'
import './Services.css'

function Services() {
  return (
    <div>
      <h1 className='serviceTitle'>Services</h1>
      <div className='cards'>
      <div className='ServiceCard'>
         <h3 className=''>Static Web page designing</h3>
      </div>
      <div className='ServiceCard'>
         <h3 className=''>Web development using NodeJS</h3>
      </div>
      <div className='ServiceCard'>
         <h3 className=''>Portfolio development using React</h3>
      </div>
      </div>
    </div>
  )
}

export default Services
