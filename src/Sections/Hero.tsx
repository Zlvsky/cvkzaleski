import React from 'react';
import { useNav } from '../Hooks/useNav';
import "../Assets/styles/hero.sass";
import hireMeGif from './../Assets/images/hireme.gif';
import arrow from "./../Assets/images/arrow.png";
import fb from "./../Assets/images/fb.png";
import github from "./../Assets/images/github.png";
import linkedin from "./../Assets/images/linkedin.png";
import web from "./../Assets/images/web.png";


const AnimatedSpan = () => {
  const heroText = ["Hello,", "I'm Chris,", "newbie web developer"];
  const smallLine = "Front End / Wordpress developer";

  return (
    <div id="heroContainer" className="text-zone">
      <div className="heroAnimation">
        <h1 className="block">
        {heroText.map((val, index) => {
          return (
            <span className="Title-mask">
              <span
                className="Title-line"
                style={{ animationDelay: `${0.5 * index}s` }}
              >
                {val}
              </span>
            </span>
          );
        })}
      </h1>
        <span className="commentStyle grey-text reveal">{smallLine}</span>
      </div>
    </div>
  );
};

const GifComponent = () => {
  return (
    <div id="gifContainer" className="mediaContainer">
      <img src={hireMeGif} alt="" className="revealImage" />
    </div>
  );
};

function Hero() {
    const heroRef = useNav("Home")

    const HeroBottomContent = () => {
        return (
          <div className="hero-bottom">
            <div className="scrollDown">
              <img src={arrow} alt="" className="scrollArrow" />
            </div>
            <div className="heroSocialMedia">
              <a
                href="https://github.com/zlvsky"
                target="_blank"
                rel="noreferrer"
                className="socialMediaCircle"
              >
                <img src={github} alt="" className="scrollArrow" />
              </a>
              <a
                href="https://www.linkedin.com/in/krzysztof-zaleski-216400237/"
                target="_blank"
                rel="noreferrer"
                className="socialMediaCircle"
              >
                <img src={linkedin} alt="" className="scrollArrow" />
              </a>
              <a
                href="https://kzaleski.pl"
                className="socialMediaCircle"
                target="_blank"
                rel="noreferrer"
              >
                <img src={web} alt="" className="scrollArrow" />
              </a>
              <a
                href="https://www.facebook.com/KZaleskiWebDeveloper/"
                target="_blank"
                rel="noreferrer"
                className="socialMediaCircle"
              >
                <img src={fb} alt="" className="scrollArrow" />
              </a>
            </div>
          </div>
        );
    }

    return (
      <div id="hero" className="" ref={heroRef}>
        <div className="sectionContent heroMain">
          <AnimatedSpan />
          <GifComponent />
        </div>
        <HeroBottomContent />
      </div>
    );
}

export default Hero;