export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">JC</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <div className="mobile-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="/Resume.pdf" download>
            Resume
          </a>
        </div>
      </details>
      <div className="header-actions">
        <a className="ghost-btn" href="/Resume.pdf" download>
          Resume
        </a>
      </div>
    </header>
  );
}
