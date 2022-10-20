import React, { useState, useEffect } from "react";
import "../Assets/styles/about.sass";
import { useNav } from "../Hooks/useNav";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
        "I'm a freelancing web developer that dream about becoming front-end dev",
      decription: `My first contact with the front end was in 2018,
 since then I’ve been trying to learn new technologies
 and expand my knowledge in my spare time.\n
I believe that the main reason is that front-end development
 satisfies my need for creativity is that it allows me to easily
 put my ideas into digital form and see the results. 
Also I'm really curious about the technologies and
 fact that there is always something I can do better
 and learn something new so it keeps me passionatate.`,
      image: book,
    },
    {
      title: "proffesional experience.",
      shortDescription: "I'm passionate about IT especially about front-end",
      decription: `I have graduated a Vocational school with the profile of IT technician.
I did 2 months internship as a WordPress developer.
I was hired in this position and worked there for 8 months.
After that, I worked as a freelancer to create websites based on WordPress, meanwhile creating front-end projects for portfolio.
Additionally, this year I started studying Computer Science`,
      image: analog,
    },
    {
      title: "when I'm offline.",
      shortDescription: "To be honest I like many things.",
      decription: `I enjoy travelling, my dream is to explore as much as my life allows me to. I also do 
      amateur winemaking. My favorite hobby is analog photography. In addition, sport was never foreign to me, 
      I trained basketball, skateboarding and I try to be active on gym`,
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
  const revealVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id="about" ref={aboutRef}>
      <motion.div
        ref={ref}
        variants={revealVariants}
        animate={controls}
        initial="hidden"
      >
      <AboutSlider />
      </motion.div>
    </div>
  );
}

export default About;
