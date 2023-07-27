import Header from "../../header/Header";
import "./portfolio.css";

function Portfolio() {
  return (
    <>
    <Header />
    <div id="portfolio">
      <h1 className="portfolioTitle">Portfolio</h1>
      
      <div className="mainProjectContainer">
        <p>Featured Project:</p>
        <p>Project #3 | MERN</p>
      </div>
    </div>
    </>
  );
}

export default Portfolio