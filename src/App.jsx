import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cricket from './pages/Cricket';
import Football from './pages/Football';
import Golf from './pages/Golf';
import Tennis from './pages/Tennis';
import Global from './pages/Global';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/football" element={<Football />} />
          <Route path='/golf' element={<Golf />}/>
          <Route path='/tennis' element={<Tennis />}/>
          <Route path='/global' element={<Global />}/>
          <Route path="/*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
