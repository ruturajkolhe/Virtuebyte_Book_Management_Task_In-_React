import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Book from './components/Book/Book';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="book" element={<Book />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
