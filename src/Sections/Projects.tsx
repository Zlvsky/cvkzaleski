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

function Projects() {
  const projectsRef = useNav("Projects");
  return (
    <div id="projects" ref={projectsRef}>
      <Technologies />
    </div>
  );
}

export default Projects;
