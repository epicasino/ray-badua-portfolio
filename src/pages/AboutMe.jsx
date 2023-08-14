import "../components/main/aboutMe/aboutMe.css";

export default function AboutMe() {
  return (
    <>
      <section id="aboutMe">
        <aside className="aboutMeText slideFadeIn">
          <h1>About Me</h1>
          <p>
            Hello! I&#39;m a full-stack engineer with expertise in{" "}
            <strong>MongoDB, Express, React, and NodeJS.</strong> I&#39;ve been
            a programmer for 2 years, with notable proficiency in building
            scalable web applications using modern web technologies and
            practices.
          </p>
          <br />
          <p>
            Outside of coding, You&#39;ll catch me rock climbing, spending time
            with my two dogs, or{" "}
            <span>
              <a
                href="https://www.twitch.tv/epicasino"
                rel="noreferrer"
                target="_blank"
                className="font-bold"
              >
                singing songs with my guitar or piano!
              </a>
            </span>
          </p>
        </aside>
        <img
          className="aboutMeImg fadeIn"
          src="../../assets/images/ray_beach.JPG"
        ></img>
      </section>
    </>
  );
}
