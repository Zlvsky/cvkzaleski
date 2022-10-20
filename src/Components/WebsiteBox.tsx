import React, { useEffect, FC } from "react";
import circle from "../Assets/images/circle.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface WebsiteProps {
  image: string;
  link: string;
  color: string;
  delay: number;
}

const WebsiteBox: FC<WebsiteProps> = ({ image, link, color, delay }) => {
  const revealVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } },
    hidden: { opacity: 0, y: 50 },
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
      className="websiteBox"
      style={{
        backgroundColor: color,
      }}
    >
      <div
        className="websiteBoxContent"
        style={{ backgroundImage: `url(${image})` }}
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="siteLink"
          style={{ backgroundImage: `url(${circle})` }}
        ></a>
      </div>
    </motion.div>
  );
};

export default WebsiteBox;
