import { useState } from "react";

export default function LinkedInLink() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <a
      href="https://www.linkedin.com/in/ray-badua/"
      rel="noreferrer"
      target="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="../../assets/images/linkedin-square.svg"
        style={{
          height: "2rem",
          padding: "0 .5em 0 .5em",
          filter: isHover ? `drop-shadow(2px 2px 2px #ffffff6b)` : ``,
        }}
      />
    </a>
  );
}
