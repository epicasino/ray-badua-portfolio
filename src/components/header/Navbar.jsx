import { Link, useLocation } from "react-router-dom";
import "./header.css";
export default function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="p-4">
      <div className="navLinks">
        <Link to='/' className="text-xl">Ray Badua</Link>
        <a href="/about-me">
          <Link
            to="/about-me"
            className={currentPage === "/about-me" ? "underline" : ""}
          >
            About Me
          </Link>
        </a>
        <a href="/portfolio">
          <Link
            to="/portfolio"
            className={currentPage === "/portfolio" ? "underline" : ""}
          >
            Portfolio
          </Link>
        </a>
        <a href="/contact">
          <Link
            to="/contact"
            className={currentPage === "/contact" ? "underline" : ""}
          >
            Contact
          </Link>
        </a>
        <a
          href="../../assets/docs/Ray_Badua_Resume.pdf"
          rel="noreferrer"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <div className="navIcons">
        <a href="https://github.com/epicasino" rel="noreferrer" target="_blank">
          <img
            src="../../assets/images/mark-github.svg"
            style={{ height: "2rem" }}
          />
        </a>
      </div>
    </nav>
  );
}
