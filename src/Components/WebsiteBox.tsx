import React, { FC } from "react";
import circle from "../Assets/images/circle.png";

interface WebsiteProps {
  image: string;
  link: string;
  color: string;
}

const WebsiteBox: FC<WebsiteProps> = ({ image, link, color }) => {
  return (
    <div
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
    </div>
  );
};

export default WebsiteBox;
