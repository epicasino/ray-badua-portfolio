import "./sideProject.css";

export default function SideProject({ props }) {
  return (
    <div className="sideProjectContainer w-screen mt-10 p-5">
      <div className="sideProjectText">
        <h1 className="text-7xl">{props.projectName}</h1>
        <h5>{props.projectTech}</h5>
        <hr />
        <br />
        <p className="text-xl">
          <li>{props.description}</li>
        </p>
        <br />
        <div className="sideProjectIcons" style={{ display: "flex" }}>
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
      <div
        className="sideProjectImage hover:filter-none"
        style={{
          backgroundImage: `url(${props.imgUrl})`,
        }}
      ></div>
    </div>
  );
}
