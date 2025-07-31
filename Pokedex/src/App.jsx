import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<Details />} />
    </Routes>
  );
}

export default App
