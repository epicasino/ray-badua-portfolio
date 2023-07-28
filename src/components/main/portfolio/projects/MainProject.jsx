import "./mainProject.css";

export default function MainProject({ props }) {
  return (
    <div className="mainProjectContainer w-screen mt-10 p-5">
      <div className="mainProjectText">
        <h1 className="text-7xl">{props.title}</h1>
        <h5>{props.tech}</h5>
        <hr />
        <br />
        <p>{props.description}</p>
        <br />
        <div className="mainProjectIcons" style={{ display: "flex" }}>
          {props.github ? (
            <a href={props.github} rel="noreferrer" target="_blank">
              <img
                src="../../assets/images/mark-github.svg"
                style={{
                  height: "2rem",
                  filter: `invert()`,
                  padding: "0 .5em 0 .5em",
                }}
              />
            </a>
          ) : (
            <></>
          )}
          {props.heroku ? (
            <a href={props.heroku} rel="noreferrer" target="_blank">
              <img
                src="../../assets/images/heroku.svg"
                style={{ height: "2rem", padding: "0 .5em 0 .5em" }}
              />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
      <a
        href={props.heroku ? props.heroku : props.github}
        target="_blank"
        rel="noreferrer"
        className="mainProjectImage hover:filter-none"
        style={{ backgroundImage: `url(${props.imgUrl})` }}
      ></a>
    </div>
  );
}
