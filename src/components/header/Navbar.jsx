import "./header.css";
export default function Navbar() {
  return (
    <nav>
      <div className="navLinks">
        <p>Ray Badua</p>
        <a href="#aboutMe">About Me</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
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
          <img src="../../assets/images/mark-github.svg" height="30" />
        </a>
      </div>
    </nav>
  );
}
