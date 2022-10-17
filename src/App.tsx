import React from 'react';
import  Hero from "./Sections/Hero";
import  About from "./Sections/About";
import Projects from "./Sections/Projects";
import  Nav from "./Components/Nav";
import NavProvider from './Components/NavProvider';


function App() {
  return (
    <div className="App">
      <NavProvider>
        <Nav />
        <Hero />
        <About />
        <Projects />
      </NavProvider>
    </div>
  );
}

export default App;
