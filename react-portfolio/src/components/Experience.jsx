import { experiences } from './data';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-heading">
        <h2>Experience</h2>
        <p>Hands-on work spanning mobile, web, and desktop tooling.</p>
      </div>
      <div className="timeline">
        {experiences.map((role) => (
          <article key={role.title} className="timeline-card">
            <h3>{role.title}</h3>
            <ul>
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
