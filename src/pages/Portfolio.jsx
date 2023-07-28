import "../components/main/portfolio/portfolio.css";
import MainProject from "../components/main/portfolio/projects/MainProject";
import SideProject from "../components/main/portfolio/projects/sideProjects/SideProject";
import { sideProjectArray } from "../components/main/portfolio/projects/sideProjects/sideProjectArray";

function Portfolio() {
  return (
    <>
      <div id="portfolio">
        <div className="container" id="portfolioText">
          <h1 className="portfolioTitle animate-bounce">Portfolio</h1>
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
