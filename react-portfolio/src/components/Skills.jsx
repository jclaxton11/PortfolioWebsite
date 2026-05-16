import { skills } from './data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-heading reveal">
        <span className="mono-label">05 — Skills</span>
        <h2>Tech I work with.</h2>
        <p>A toolkit across mobile, backend, and product engineering.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className={`skill-card reveal delay-${(i % 3) + 1}`}
          >
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
