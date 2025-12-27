import { aboutImages } from './data';

export default function About({ aboutIndex }) {
  return (
    <section id="about" className="about">
      <div className="section-heading">
        <h2>About</h2>
        <p>
          From Collinsville to Lincoln — building experiences that feel calm,
          clear, and useful.
        </p>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <img src={aboutImages[aboutIndex]} alt="Jeffrey in life" />
        </div>
        <div className="about-content">
          <h3>Life</h3>
          <p>
            Born in 2003 in Collinsville, Illinois. I moved to Lincoln, NE in 2021 to
            study Software Engineering at UNL and graduated with my Bachelors of Engineering in Software Engineering on May 16th, 2025. Outside of code, I spend time with
            my guitar, video games, and sports.
          </p>
        </div>
      </div>
    </section>
  );
}
