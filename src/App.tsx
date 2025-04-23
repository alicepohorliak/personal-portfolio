import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects'; 

function App() {
  return (
    <>
      {/* Скидання стилів від MUI */}
      <CssBaseline />

      {/* Навбар */}
      <Navbar />

      {/* Hero секція */}
      <Hero />

      {/* About Me секція */}
      <About />

      {/* Services секція */}
      <Services />

      {/* My Projects секція */}
      <Projects /> 
    </>
  );
}

export default App;
