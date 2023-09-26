
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import MoviList from './components/MoviList';
import MoviDetails from './components/MoviDetails';
import { useState } from 'react';
import axios from 'axios';


function App() {

  
  return (
    <div className="color-body font">
      <NavBar/>
      <Container className=''>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviList/>}/>
          <Route path='/movie/:id' element={<MoviDetails/>}/>
        </Routes>
        </BrowserRouter>
        
      </Container>
    </div>
  );
}

export default App;
