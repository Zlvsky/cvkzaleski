import React, { useEffect } from "react";
import "../Assets/styles/contact.sass";
import { useNav } from "../Hooks/useNav";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
  const contactRef = useNav("Contact");
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
    <div id="contact" ref={contactRef}>
      <motion.div
        ref={ref}
        variants={revealVariants}
        animate={controls}
        initial="hidden"
        className="aboutContent"
      >
          <div className="leftContact">
            <div className="contactHeader">
              Thank you for viewing my portfolio page <br />
              Below you can see my contact information
            </div>
            <div className="contactInfo">
              <div className="contactItem">
                <strong>My name</strong>
                <br />
                Krzysztof Zaleski
              </div>
              <div className="contactItem">
                <strong>Phone</strong>
                <br />
                +48 505 709 535
              </div>
              <div className="contactItem">
                <strong>E-Mail</strong>
                <br />
                zlvsky@icloud.com
              </div>
            </div>
          </div>
          <div className="rightContact">
            <div className="contactSocials">
              <h6>SOCIALS</h6>
              <a
                href="https://www.linkedin.com/in/krzysztof-zaleski-216400237/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/zlvsky"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a href="https://kzaleski.pl" target="_blank" rel="noreferrer">
                Wordpress website
              </a>
            </div>
          </div>
      </motion.div>
    </div>
  );
}

export default Contact;
