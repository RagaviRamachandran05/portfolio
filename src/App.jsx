import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import Certificate from "./components/Certificate";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skill />
      <Certificate/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
