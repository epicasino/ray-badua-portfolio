import "./portfolio.css";
import MainProject from "./projects/MainProject";
import SideProject from "./projects/sideProjects/SideProject";
import { sideProjectArray } from "./projects/sideProjects/sideProjectArray";

function Portfolio() {
  return (
    <>
      <div id="portfolio">
        <div className="container" id="portfolioText">
          <h1 className="portfolioTitle">Portfolio</h1>
        </div>

        <MainProject
          props={{
            title: "Project 3",
            tech: "Some Tech",
            description: "Description",
            github: "https://github.com/epicasino",
            heroku: "https://github.com/epicasino",
            imgUrl: "../../../../assets/images/bi-background-black.png",
          }}
        />
        {sideProjectArray.map((project) => (
          <SideProject props={project} key={project.projectName} />
        ))}
      </div>
    </>
  );
}
export default Portfolio;
