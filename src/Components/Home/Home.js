import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='homeTexts'>
      <div className='lineSpace'>
      <h2 style={{color:'#e82020'}}>Hello!</h2>
      <h1 className='bigTitle' style={{fontSize:'60px'}}>I Am DEVAJITH</h1>
      </div>
      <p className='quickAbout'>I'm Passionate Self-Taught<span style={{fontWeight:"700"}}> MERN-Stack Developer</span>,For past one year I have been working in Tata consultancy services 
      .I would like to be a part of a good team having a good work culture </p>
      <button className='hiremeButton'>Hire Me</button>
    </div>
  )
}

export default Home
