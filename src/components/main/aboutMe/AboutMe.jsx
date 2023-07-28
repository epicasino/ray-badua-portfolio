import "./aboutMe.css";

export default function AboutMe() {
  

  return (
    <>
      <div id="aboutMe">
        <div className="aboutMeText slideFadeIn">
          <h1>About Me</h1>
          <p>
            Hello! I'm a full-stack engineer with expertise in MongoDB, Express,
            React, and NodeJS. I've been a programmer for 2 years, with notable
            proficiency in JavaScript.
          </p>
          <p>Besides coding, I love playing the guitar and rock climbing!</p>
        </div>
        <img
          className="aboutMeImg fadeIn"
          src="../../assets/images/ray_beach.JPG"
        ></img>
      </div>
    </>
  );
}
