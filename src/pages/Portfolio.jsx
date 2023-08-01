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
            title: "Fishing Forecast",
            tech: "MongoDB, ExpressJS, React, NodeJS",
            description: "A full-stack web application that gets current information on weather, along with a weekly tide-chart to plan your next fishing trip in San Diego.",
            github: "https://github.com/epicasino/fishing-forecast",
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
