import { experiences } from './data';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-heading reveal">
        <span className="mono-label">03 — Experience</span>
        <h2>Where I've worked.</h2>
        <p>Spanning mobile, full-stack, and enterprise logistics tooling.</p>
      </div>

      <div className="timeline">
        {experiences.map((role, i) => (
          <div
            key={role.role + role.company}
            className={`timeline-item reveal delay-${Math.min(i + 1, 3)}`}
          >
            <div className="timeline-dot" />
            <div className="timeline-period">{role.period}</div>
            <div className="timeline-role">{role.role}</div>
            <div className="timeline-company">{role.company}</div>
            <ul className="timeline-bullets">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
