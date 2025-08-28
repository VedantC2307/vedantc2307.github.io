import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
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
import RolleRobotProject from './components/RolleRobotProject';
import ExoskeletonProject from './components/ExoskeletonProject';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-metal-gray-900 dark:via-metal-gray-800 dark:to-metal-gray-900 tech-grid-pattern">
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/3d-printer-project" element={<PrinterProject />} />
            <Route exact path="/patent-project" element={<PatentProject />} />
            <Route exact path="/ai-assistant-robot" element={<RolleRobotProject />} />
            <Route exact path="/exoskeleton-project" element={<ExoskeletonProject />} />
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
    </ThemeProvider>
  );
}

export default App;