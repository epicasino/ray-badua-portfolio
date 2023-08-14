import '../components/main/portfolio/portfolio.css';
import MainProject from '../components/main/portfolio/projects/MainProject';
import SideProject from '../components/main/portfolio/projects/sideProjects/SideProject';
import { sideProjectArray } from '../components/main/portfolio/projects/sideProjects/sideProjectArray';

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <header className="container" id="portfolioText">
          <h1 className="portfolioTitle animate-bounce">Portfolio</h1>
        </header>

        <MainProject
          props={{
            title: 'Day Tripper',
            tech: 'MongoDB, ExpressJS, React, NodeJS',
            description:
              'A full-stack web application that allows you to create an account, create a road trip, and save to your account. Trip data supplied by the Google Platform API.',
            github: 'https://github.com/epicasino/daytripper',
            heroku: 'https://daytripper-app-1577e78f3877.herokuapp.com/',
            imgUrl: '../../../../assets/images/daytripper.JPG',
          }}
        />
        {sideProjectArray.map((project) => (
          <SideProject props={project} key={project.projectName} />
        ))}
      </section>
    </>
  );
}
export default Portfolio;
