import './sideProject.css';

export default function SideProject({ props }) {
  return (
    <section className="sideProjectContainer w-screen mt-10 p-5">
      <article className="sideProjectText">
        <h1 className="text-7xl">{props.projectName}</h1>
        <h5>{props.projectTech}</h5>
        <hr />
        <br />
        <p className="text-xl">
          <li>{props.description}</li>
        </p>
        <br />
        <div className="sideProjectIcons" style={{ display: 'flex' }}>
          <a href={props.github} rel="noreferrer" target="_blank">
            <img
              src="../../assets/images/mark-github.svg"
              style={{
                height: '2rem',
                filter: `invert()`,
                padding: '0 .5em 0 .5em',
              }}
            />
          </a>
          {props.heroku ? (
            <a href={props.heroku} rel="noreferrer" target="_blank">
              <img
                src="../../assets/images/heroku.svg"
                style={{ height: '2rem', padding: '0 .5em 0 .5em' }}
              />
            </a>
          ) : props.vercel ? (
            <a href={props.vercel} rel="noreferrer" target="_blank">
              <img
                src="../../assets/images/vercel-fill.svg"
                style={{ height: '2rem', padding: '0 .5em 0 .5em' }}
              />
            </a>
          ) : props.netlify ? (
            <a href={props.netlify} rel="noreferrer" target="_blank">
              <img
                src="../../assets/images/netlify.svg"
                style={{ height: '2rem', padding: '0 .5em 0 .5em' }}
              />
            </a>
          ) : (
            <></>
          )}
        </div>
      </article>
      <a
        href={
          props.heroku
            ? props.heroku
            : props.vercel
            ? props.vercel
            : props.netlify
            ? props.netlify
            : props.github
        }
        target="_blank"
        rel="noreferrer"
        className="sideProjectImage hover:filter-none"
        style={{
          backgroundImage: `url(${props.imgUrl})`,
        }}
      ></a>
    </section>
  );
}
