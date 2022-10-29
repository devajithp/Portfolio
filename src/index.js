import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider,Box,useToast } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>
    
    
  </React.StrictMode>
);


reportWebVitals();
