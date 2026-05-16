export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-label">
          <span className="mono-label">01 — Software Engineer</span>
        </div>

        <h1 className="hero-name">
          Jeffrey<br />Claxton.
        </h1>

        <div className="hero-divider" />

        <div className="hero-meta">
          <span className="hero-role">Software Engineer — Crete Carrier</span>
          <span className="hero-side">
            Building <strong>SurveyOps</strong> on the side.
          </span>
        </div>

        <div className="hero-actions">
          <a className="btn-primary" href="#projects">View work</a>
          <a className="btn-outline" href="#contact">Get in touch</a>
        </div>
      </div>

      <div className="hero-scroll">Scroll</div>
    </section>
  );
}
