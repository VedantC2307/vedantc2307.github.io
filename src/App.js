import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
// import About from './components/About';  // Comment this out
import Education from './components/Education';
import Experience from './components/Experience';
import Patent from './components/Patent';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import PrinterProject from './components/PrinterProject';
import PatentProject from './components/PatentProject';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Nav />
        <Routes>
          <Route path="/3d-printer-project" element={<PrinterProject />} />
          <Route path="/patent-project" element={<PatentProject />} />
          <Route path="/" element={
            <main className="pt-16">
              <Hero />
              {/* <About /> // Keep this commented out*/}
              <Education />
              <Projects />
              <Skills />
              <Experience />
              <Patent />
              <Contact />
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;