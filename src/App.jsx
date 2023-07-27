import AboutMe from './components/main/aboutMe/AboutMe';
import Portfolio from './components/main/portfolio/Portfolio';
import './index.css'
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<AboutMe />}></Route>
        <Route exact path="/about-me" element={<AboutMe />}></Route>
        <Route exact path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </>
  );
}
