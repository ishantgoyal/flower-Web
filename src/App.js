import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Bidding from './pages/bidding';
import Home from './pages/home';
import Footer from './pages/footer';

function App() {
  return (
    <Router>
      <header className="header">
        <div className="logo">Bidding</div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/bidding">Bidding</Link>
        </nav>
        <div className="profile-icon">Profile</div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bidding" element={<Bidding />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;