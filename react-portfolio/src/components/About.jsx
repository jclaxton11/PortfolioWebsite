import { aboutImages } from './data';

export default function About({ aboutIndex }) {
  return (
    <section id="about">
      <div className="section-heading reveal">
        <span className="mono-label">02 — About</span>
        <h2>A little background.</h2>
      </div>

      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            Born in 2003 in Collinsville, Illinois. Moved to Lincoln, NE in 2021
            to study Software Engineering at UNL, graduating with a{' '}
            <strong>Bachelor of Engineering in Software Engineering</strong> in May 2025.
          </p>
          <p>
            Currently a Software Engineer at <strong>Crete Carrier</strong>, building
            tooling for logistics and transportation operations. Outside of work, I'm
            developing <strong>SurveyOps</strong> — a side project I work on in my
            spare time.
          </p>
          <p>
            Starting a <strong>M.S. in Computer Science at Georgia Tech</strong> (OMSCS)
            in August 2026, specializing in Machine Learning.
          </p>
          <p>
            When I'm not at a keyboard, you'll find me playing guitar, gaming, or
            watching sports.
          </p>

          <div className="about-hobbies">
            <span className="hobby-tag">Guitar</span>
            <span className="hobby-tag">Video Games</span>
            <span className="hobby-tag">Sports</span>
            <span className="hobby-tag">Lincoln, NE</span>
          </div>
        </div>

        <div className="about-photo-wrap reveal delay-1">
          <img
            src={aboutImages[aboutIndex]}
            alt="Jeffrey Claxton"
          />
        </div>
      </div>
    </section>
  );
}
