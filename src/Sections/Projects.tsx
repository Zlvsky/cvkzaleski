import React, { useState } from "react";
import "../Assets/styles/projects.sass";
import { useNav } from "../Hooks/useNav";
import js from '../Assets/images/tech/javascript.png';
import css from '../Assets/images/tech/css.png';
import davinci from '../Assets/images/tech/davinci.png';
import figma from "../Assets/images/tech/figma.png";
import git from "../Assets/images/tech/git.png";
import html from "../Assets/images/tech/html.png";
import lightroom from "../Assets/images/tech/lightroom.png";
import mysql from "../Assets/images/tech/mysql.png";
import node from "../Assets/images/tech/node.png";
import php from "../Assets/images/tech/php.png";
import ps from "../Assets/images/tech/ps.png";
import python from "../Assets/images/tech/python.png";
import ReactJS from "../Assets/images/tech/ReactJS.png";
import seo from "../Assets/images/tech/seo.png";
import typescript from "../Assets/images/tech/typescript.png";
import vue from "../Assets/images/tech/vue.png";
import wordpress from "../Assets/images/tech/wordpress.png";

import SingleProject from "../Components/SingleProject";
import WebsiteBox from "../Components/WebsiteBox";
import oneplace from "../Assets/images/projects/oneplace.jpg";
import reactmoodboard from "../Assets/images/projects/reactmoodboard.jpg";
import yt2mp3 from "../Assets/images/projects/yt2mp3.jpg";
import pmigeodezja from "../Assets/images/projects/pmigeodezja.png";
import wbhale from "../Assets/images/projects/wbhale.png";
import skrzynkasynka from "../Assets/images/projects/skrzynkasynka.png";
import troc from "../Assets/images/projects/troc.png";
import tomaszmichno from "../Assets/images/projects/tomaszmichno.png";
import tukuchnie from "../Assets/images/projects/tukuchnie.png";


const Technologies = () => {
    const [hoveredTech, setHoveredTech] = useState(js);

    const mainTech = [
      ["JavaScript", js],
      ["ReactJS", ReactJS],
      ["Node.js", node],
      ["HTML", html],
      ["CSS", css],
      ["Wordpress", wordpress],
      ["SEO", seo],
    ];
  const otherTech = [
    ["Vue.js", vue], 
    ["PHP", php], 
    ["TypeScript", typescript], 
    ["Python", python], 
    ["MySQL", mysql], 
    ["GIT", git]
];
  const programs = [
    ["Adobe Photoshop", ps],
    ["Adobe Lightroom", lightroom],
    ["DaVinci Resolve", davinci],
    ["Figma", figma],
  ];

  return (
    <div className="sectionContent techWrap">
      <div className="techLeft">
        <h3 className="techHeader">Technologies I work with</h3>

        <div className="techContainer">
          <h4 className="techTitle">I'am experienced with</h4>
          <div className="techSeperator"></div>
          <div className="techList">
            {mainTech.map((el, index) => {
              return (
                <div
                  className="techElement"
                  key={index}
                  onMouseOver={() => setHoveredTech(el[1])}
                >
                  {el[0]}
                </div>
              );
            })}
          </div>
        </div>

        <div className="techContainer">
          <h4 className="techTitle">I have some knowledge</h4>
          <div className="techSeperator"></div>
          <div className="techList">
            {otherTech.map((el, index) => {
              return (
                <div
                  className="techElement"
                  key={index}
                  onMouseOver={() => setHoveredTech(el[1])}
                >
                  {el[0]}
                </div>
              );
            })}
          </div>
        </div>

        <div className="techContainer">
          <h4 className="techTitle">Programs I'am experienced with</h4>
          <div className="techSeperator"></div>
          <div className="techList">
            {programs.map((el, index) => {
              return (
                <div
                  className="techElement"
                  key={index}
                  onMouseOver={() => setHoveredTech(el[1])}
                >
                  {el[0]}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="techRight">
        <img src={hoveredTech} alt="" height="300" width="300" className="techImage"/>
      </div>
    </div>
  );
};

const Portfolio = () => {

  return (
    <div className="sectionContent portfolioWrap">
      <h3 className="techHeader">My featured projects</h3>
      <div className="allProjects">
        <SingleProject image={oneplace} type="Featured Project" title="One-Place CRUD" description="This is my first self made bigger project that I was working on recently. It is CRM, CRUD app built on: front-end: react, back-end: node.js, express, mysql. Main purpose of this project is to manage business based on orders that don't need online shop. For example selling items on livestreams." tech={["ReactJS", "Node.js", "Express", "MySQL"]} gh="https://github.com/zlvsky/one-place" live={''}/>
        <SingleProject image={reactmoodboard} type="Featured Project" title="React Konva Moodboard" description="This is pure front-end project builded in React It uses React-Konva as main functionality It is used for making custom moodboards with images It can be used in business like home decor for helping understanding client's vision" tech={["ReactJS", "Konvajs", "Material-UI"]} gh="https://github.com/Zlvsky/React-Konva-moodboard" live={''}/>
        <SingleProject image={yt2mp3} type="Featured Project" title="Youtube2Mp3" description="There are many websites that offer converting from youtube to mp3 But everytime I used it I was afraid of getting some kind of malware So I created app by myself that offer quick conversion from youtube to mp3 via API" tech={["Node.js", "Express"]} gh="https://github.com/zlvsky/YouTube-to-mp3" live={''}/>
      </div>
    </div>
  );
}

const Websites = () => {
  return (
    <div>
      <div className="sectionContent">
        <h3 className="techHeader">Websites I created</h3>
      </div>
      <div className="websitesWrap">
        <WebsiteBox image={pmigeodezja} link="https://pmigeodezja.pl" color="#fff"/>
        <WebsiteBox image={wbhale} link="https://wbhale.pl" color="#2e2e2e"/>
        <WebsiteBox image={skrzynkasynka} link="https://skrzynkasynka.pl" color="#fff"/>
        <WebsiteBox image={tomaszmichno} link="https://tomaszmichno.pl" color="#2e2e2e"/>
        <WebsiteBox image={tukuchnie} link="https://tukuchnie.pl" color="#fff"/>
        <WebsiteBox image={troc} link="https://iwonatroc.pl" color="#2e2e2e"/>
        
      </div>
    </div>
  );
}

function Projects() {
  const projectsRef = useNav("Projects");
  return (
    <div id="projects" ref={projectsRef}>
      <Technologies />
      <Portfolio />
      <Websites />
    </div>
  );
}

export default Projects;
