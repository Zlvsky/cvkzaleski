import React, { useState, FC } from "react";
import { ReactComponent as GithubIcon } from '../Assets/images/icons/github.svg'
import {ReactComponent as LinkIcon } from '../Assets/images/icons/link.svg'

interface ProjectProps  {
    image: string,
    type: string,
    title: string,
    description: string,
    tech: string[],
    live: string
    gh: string
}

const SingleProject: FC<ProjectProps> = ({ image, type,  title, description, tech, live, gh }) => {

    return (
      <div className="singleProjectWrap">
        <div className="projectImage">
          <img src={image} alt={title} />
        </div>
        <div className="projectContent">
          <h6 className="projectType">{type}</h6>
          <h4 className="projectTitle">{title}</h4>
          <div className="projectDescriptionWrap">{description}</div>
          <div className="projectTech">
            {tech.map((el, i) => {
              return (
                <span className="projectSingleTech" key={i}>
                  {el}
                </span>
              );
            })}
          </div>
          <div className="projectLinks">
            {gh.length !== 0 && (
              <a href={gh} target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
            )}
            {live.length !== 0 && (
              <a href={live} target="_blank" rel="noreferrer">
                <LinkIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    );
}

export default SingleProject;