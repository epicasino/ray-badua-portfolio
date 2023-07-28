import "./header.css";
export default function Navbar() {
  return (
    <nav className="p-4">
      <div className="navLinks">
        <p>Ray Badua</p>
        <a href="/about-me">About Me</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
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
