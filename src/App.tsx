import React from 'react';
import  Hero from "./Sections/Hero";
import  About from "./Sections/About";
import  Nav from "./Components/Nav";
import NavProvider from './Components/NavProvider';


function App() {
  return (
    <div className="App">
      <NavProvider>
        <Nav />
        <Hero />
        <About />
      </NavProvider>
    </div>
  );
}

export default App;
