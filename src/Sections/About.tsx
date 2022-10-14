import React from 'react';
import '../Assets/styles/about.sass';
import { useNav } from "../Hooks/useNav";
import { AnimationOnScroll } from "react-animation-on-scroll";
import book from '../Assets/images/book.jpg';

const AboutCards = () => {


  return (
    <div className="aboutCardsContainer">
      <div className="aboutCard">
        <div className="cardImage">
          <img src={book} alt="" width="310" height="280" />
        </div>

        <div className="cardDescription">
          <div className="cardDescriptionContent">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in vehicula justo. Integer tempor tempor elit, ut laoreet orci
              tincidunt a. Vivamus hendrerit, odio hendrerit venenatis
              pulvinar...
            </span>
          </div>
        </div>
      </div>

      <div className="aboutCard">
        <div className="cardImage">
          <img src={book} alt="" width="310" height="280" />
        </div>

        <div className="cardDescription">
          <div className="cardDescriptionContent">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in vehicula justo. Integer tempor tempor elit, ut laoreet orci
              tincidunt a. Vivamus hendrerit, odio hendrerit venenatis
              pulvinar...
            </span>
          </div>
        </div>
      </div>

      <div className="aboutCard">
        <div className="cardImage">
          <img src={book} alt="" width="310" height="280" />
        </div>

        <div className="cardDescription">
          <div className="cardDescriptionContent">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in vehicula justo. Integer tempor tempor elit, ut laoreet orci
              tincidunt a. Vivamus hendrerit, odio hendrerit venenatis
              pulvinar...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


function About() {
    const aboutRef = useNav("About");
    return (
      <div id="about" ref={aboutRef}>
        <div className="sectionContent aboutMain">
          <div className="Title-mask">
          <AnimationOnScroll animateIn="Title-line" animateOnce={true}>
          <h2 className="sectionHeader">
              Some words about me
          </h2>
          </AnimationOnScroll>
          </div>

          <AboutCards />
        </div>
      </div>
    );
}

export default About;