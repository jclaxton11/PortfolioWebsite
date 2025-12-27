export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow"></div>

      <div className="hero-content">
        <div className="hero-text">
          <span className="pill">
            Software Engineer · Full-Stack · Mobile
          </span>

          <h1>
            Hello, I’m <span>Jeffrey Claxton</span>.
            <br />
            I build real products people actually use.
          </h1>

          <p>
            Software engineer building production ready mobile
            and web apps, from iOS and React Native frontends, to cloud deployed
            backends, real-time systems, and data pipelines. Currently building
            <strong> Thawe</strong>, a human-first professional networking app.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              View projects
            </a>
            <a className="secondary-btn" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/jeffpicwcircles.png" alt="Jeffrey Claxton" />
        </div>
      </div>

      <div className="hero-strip">
        <div>
          <h3>Focus</h3>
          <p>Mobile & Full-Stack</p>
        </div>
        <div>
          <h3>Currently</h3>
          <p>Building Thawe</p>
        </div>
      </div>
    </section>
  );
}
