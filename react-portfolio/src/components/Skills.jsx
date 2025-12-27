import { skills } from './data';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-heading">
        <h2>Skills</h2>
        <p>A toolkit across mobile, backend, and product engineering.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
