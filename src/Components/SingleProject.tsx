import React, { useEffect ,FC } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactComponent as GithubIcon } from "../Assets/images/icons/github.svg";
import { ReactComponent as LinkIcon } from "../Assets/images/icons/link.svg";

interface ProjectProps {
  image: string;
  type: string;
  title: string;
  description: string;
  tech: string[];
  live: string;
  gh: string;
}

const SingleProject: FC<ProjectProps> = ({
  image,
  type,
  title,
  description,
  tech,
  live,
  gh,
}) => {
  const revealVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={revealVariants}
      animate={controls}
      initial="hidden"
    >
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
    </motion.div>
  );
};

export default SingleProject;
