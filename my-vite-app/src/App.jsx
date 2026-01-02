import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from '../../my-vite-app/src/components/Navbar';
import Hero from '../../my-vite-app/src/components/Hero';
import About from '../../my-vite-app/src/components/About';
import Projects from '../../my-vite-app/src/components/Projects';
import TechStackScroller from '../../my-vite-app/src/components/Skills';
// import GitHubActivity from '../../my-vite-app/src/components/GitHubActivity';
// import Timeline from '../../my-vite-app/src/components/Timeline';
import Certifications from '../../my-vite-app/src/components/Certifications';
import Contact from '../../my-vite-app/src/components/Contact';
import Footer from '../../my-vite-app/src/components/Footer';
import { Toaster } from '../../my-vite-app/src/components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <TechStackScroller />
        <Projects />
        
        {/*
        <GitHubActivity />
        <Timeline />
        </> */}       
        
        <Contact />
        <Certifications />
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;