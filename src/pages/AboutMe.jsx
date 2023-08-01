import "../components/main/aboutMe/aboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div id="aboutMe">
        <div className="aboutMeText slideFadeIn">
          <h1>About Me</h1>
          <p>
            Hello! I&#39;m a full-stack engineer with expertise in MongoDB,
            Express, React, and NodeJS. I&#39;ve been a programmer for 2 years,
            with notable proficiency in back-end relational and non-relational
            databases. Able to build scalable web applications using modern web
            technologies.
          </p>
          <br />
          <p>
            Outside of coding, You&#39;ll catch me rock climbing, spending time
            with my two dogs, or singing with my guitar or piano!
          </p>
        </div>
        <img
          className="aboutMeImg fadeIn"
          src="../../assets/images/ray_beach.JPG"
        ></img>
      </div>
    </>
  );
}
