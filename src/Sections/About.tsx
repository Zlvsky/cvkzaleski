import React, { useState } from "react";
import "../Assets/styles/about.sass";
import { useNav } from "../Hooks/useNav";
import { AnimationOnScroll } from "react-animation-on-scroll";
import book from "../Assets/images/book.jpg";
import analog from "../Assets/images/analog.jpg";
import greece from "../Assets/images/greece.jpg";
import info from "../Assets/images/info.png";
import suitcase from "../Assets/images/suitcase.png";
import nature from "../Assets/images/nature.png";

const AboutSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideIcons = [info, suitcase, nature];

  const sliderContent = [
    {
      title: "about me.",
      shortDescription:
        "I'm a freelancing web developer that trying to become front-end dev",
      decription: `For past years I’ve been self learning front-end development
making websites as a freelancer and now I’m studying Computer Science.
I would love to work as a front-end developer because i find it to be
what i really want to do. I’m curious abot the technologies and I’m passionate about 
front-end development`,
      image: book,
    },
    {
      title: "proffesional experience.",
      shortDescription: "I'm passionate about IT especially about front-end",
      decription: `I have graduated a Vocational school with the profile of IT technician.
I did 2 months internship as a WordPress developer.
I was hired in this position and worked there for 8 months.
After that, I worked as a freelancer to create websites based on WordPress and now I'm studying Computer Science`,
      image: analog,
    },
    {
      title: "when I'm offline.",
      shortDescription: "I'm passionate about IT especially about front-end",
      decription: `I have graduated a Vocational school with the profile of IT technician.
I did 2 months internship as a WordPress developer.
I was hired in this position and worked there for 8 months.
After that, I worked as a freelancer to create websites based on WordPress and now I'm studying Computer Science`,
      image: greece,
    },
  ];

  return (
    <div className="sliderContainer">
      {sliderContent.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide slide-active" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="slideWrap">
                <div className="slideLeft">
                  <div className="slideIcons">
                    {slideIcons.map((icon, iconIndex) => {
                      return (
                        <div
                          className={
                            iconIndex === currentSlide
                              ? "slideIcon activeSlideIcon"
                              : "slideIcon"
                          }
                          key={iconIndex}
                          onClick={() => setCurrentSlide(iconIndex)}
                        >
                          <img src={icon} alt="" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="slideHeader">{slide.title}</div>
                  <div className="slideShortDescription">
                    {slide.shortDescription}
                  </div>
                  <div className="slideDescription">{slide.decription}</div>
                </div>
                <div className="slideRight">
                  <img src={slide.image} alt="" width="420" height="420" />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

function About() {
  const aboutRef = useNav("About");

  return (
    <div id="about" ref={aboutRef}>
      <AboutSlider />
    </div>
  );
}

export default About;
