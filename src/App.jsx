import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HireMe from "./components/HireMe";
import Contact from "./components/Contact";
function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <HireMe/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default App;