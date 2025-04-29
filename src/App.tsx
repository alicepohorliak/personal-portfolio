import React from "react";

import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import LetsDesign from "./sections/LetsDesign";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <LetsDesign />
      <Footer />
    </>
  );
}

export default App;
