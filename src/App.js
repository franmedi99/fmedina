import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './components/Index';
import Navbar from './components/Navbar';
import Contactme from './components/ContactMe';
import Experience from './components/Experience';
import Footer from './components/Footer';

import './components/assets/css/index.css';
import './components/assets/js/navbar.js';
function App() {
  return (
    <Router>
      <div className="ml-2 mr-2">
        <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/ContactMe" element={<Contactme />} />
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
