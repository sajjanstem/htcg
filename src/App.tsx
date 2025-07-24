import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Header from './components/Header/Header';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Software from './components/Services/Software';
import './App.css';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="app">
     <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/logoIconWhite.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      
      <meta name="author" content="HiTech Consulting Group" />
      <meta name="keywords" content="
       HiTech Consulting Group,
        Hi-Tech Consulting Group
      " />
      
      <meta 
        name="description" 
        content="HiTech Consulting Group" 
      />
      
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logoIconWhite.png" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>HiTech Consulting Group</title>
    </Helmet>

      <CustomCursor />
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Software />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
