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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/3d-printer-project" element={<PrinterProject />} />
          <Route exact path="/patent-project" element={<PatentProject />} />
          <Route exact path="/" element={
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
      </Router>
    </div>
  );
}

export default App;