import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/header/navbar';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Footer from "./components/footer/footer";


function App() {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  // Check if the user has scrolled to the bottom of the page
  if (scrollTop + clientHeight >= scrollHeight) {
    // Show the footer
    document.querySelector('.footer').style.display = 'block';
  } else {
    // Hide the footer
    document.querySelector('.footer').style.display = 'none';
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;