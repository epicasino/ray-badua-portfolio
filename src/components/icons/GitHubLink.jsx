import { useState } from "react";

export default function GitHubLink() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <a
      href="https://github.com/epicasino"
      rel="noreferrer"
      target="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="../../assets/images/mark-github.svg"
        style={{
          height: "2rem",
          padding: "0 .5em 0 .5em",
          filter: isHover
            ? `drop-shadow(2px 2px 2px #00000066) invert()`
            : `invert()`,
        }}
      />
    </a>
  );
}
