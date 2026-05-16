export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copy">
        © {new Date().getFullYear()} Jeffrey Claxton
      </span>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/jeffrey-claxton-0aab4621a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://apps.apple.com/us/app/mindcircuit/id6497651074" target="_blank" rel="noopener noreferrer">
          App Store
        </a>
        <a href="/Resume.pdf" download>Resume</a>
      </div>
    </footer>
  );
}
