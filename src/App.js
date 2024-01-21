import './App.css';

// componentes
import Nav from './components/Nav'
import Home from './components/Home'
import Search from './components/Search';
import About from './components/About'
import Pesquisa from './components/Pesquisa';
import NotError from './components/NotError';

// hooks
import { useState } from 'react';


// routes
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/pokemon/:id" element={<Search />} />
            <Route path="/pesquisa" element={<Pesquisa />}/>
            <Route path="*" element={<NotError />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
