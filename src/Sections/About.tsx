import React from 'react';
import '../Assets/styles/about.sass';
import { useNav } from "../Hooks/useNav";


function About() {
    const aboutRef = useNav("About");
    return (
      <div id="about" ref={aboutRef}>
        <div className="sectionContent aboutMain">s</div>
      </div>
    );
}

export default About;