export default function Sidebar() {
  return (
    <aside className="w-1/2 top-0 h-screen flex flex-col p-10 sticky">
      <header className="text-neutral-50 flex flex-col gap-3">
        <h1 className="text-7xl font-bold">Ray Badua</h1>
        <h3 className="text-2xl font-semibold">Full Stack Web Developer</h3>
        <h5 className="text-xl font-light">
          I build efficient and scalable web applications using modern web
          technologies.
        </h5>
        <hr />
      </header>
      <nav className="text-neutral-50 mt-24 text-2xl">
        <a href="#about" className="flex items-center group">
          <span className="navbar-line group-hover:w-24 transition-all" />
          <span>About</span>
        </a>
        <a href="#experiences" className="flex items-center group">
          <span className="navbar-line group-hover:w-24 transition-all" />
          <span>Experience</span>
        </a>
        <a href="#experiences" className="flex items-center group">
          <span className="navbar-line group-hover:w-24 transition-all" />
          <span>Projects</span>
        </a>
      </nav>
    </aside>
  );
}
