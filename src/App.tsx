import React from "react";

import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
    </>
  );
}

export default App;
