import React from 'react';
import logo from './logo.svg';
import Login from './components/Login.js'
import Cafe from './components/Cafe'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cafe" element={<Cafe />} />

      </Routes>
    </div>
    </Router>
  );
}

export default App;
