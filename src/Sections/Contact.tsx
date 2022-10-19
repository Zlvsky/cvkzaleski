import React, { useState } from "react";
import "../Assets/styles/contact.sass";

function Contact() {
    return (
      <div id="contact">
        <div className="aboutContent">
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
                <a href="https://www.linkedin.com/in/krzysztof-zaleski-216400237/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/zlvsky" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://kzaleski.pl" target="_blank" rel="noreferrer">Wordpress website</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;