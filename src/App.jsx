import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './views/Home';
import Contacto from './views/Contacto';
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppNavbar />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contacto" element={<Contacto/>} />
        </Routes>    
      </BrowserRouter>
    </div>   
  );
}

export default App;
