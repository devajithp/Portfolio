import React from 'react'
import './App.css';
import { Route,useHistory } from 'react-router-dom'
import Home from './Components/Home/Home'
import Works from './Components/Works/Works'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Certifications from './Components/Certifications/Certifications';

function App() {

  
 
  const history=useHistory()
  return (
    <div className="App">
      <div className='navBar'>
            <h1 className='title'>Devajith</h1>
         <div className='otherNavs'>
             <h2 onClick={()=>{history.push('/')
                               
                              }} className='eachNav'>Home</h2>
             <h2 onClick={()=>{history.push('/works')
                               
                              }} className='eachNav'>Works</h2>
             
             <h2 onClick={()=>{history.push('/about')
                                
                              }}className='eachNav'>About</h2>
            <h2 onClick={()=>{history.push('/services')
                                
                              }} className='eachNav'>Services</h2>
            <h2 onClick={()=>{history.push('/certifications')
                                
                              }} className='eachNav'>Awards & Certifications</h2>
         </div>
      </div>
      
      <Route path="/"><Home></Home></Route> 
      <Route path="/works"><Works></Works></Route>
      <Route path="/services"><Services></Services></Route>
      <Route path="/about"><About></About></Route>
      <Route path="/certifications"><Certifications></Certifications></Route>
         
      
      
      
    </div>
  );
}

export default App;
