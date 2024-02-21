// Import components and pages
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/header/navbar';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Footer from "./components/footer/footer";


function App() {
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

