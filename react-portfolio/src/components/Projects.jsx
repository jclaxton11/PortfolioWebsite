import { projects } from './data';

export default function Projects({ appIndex }) {
  return (
    <section id="projects">
      <div className="section-heading reveal">
        <span className="mono-label">04 — Projects</span>
        <h2>Selected work.</h2>
        <p>A mix of professional builds, side projects, and coursework.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => {
          const imageSrc =
            project.images && project.images.length > 0
              ? project.images[appIndex % project.images.length]
              : null;

          return (
            <article
              key={project.id}
              className={`project-card reveal delay-${(i % 3) + 1}${project.featured ? ' featured' : ''}`}
            >
              <div className="project-body">
                <div className="project-name">{project.title}</div>
                <p className="project-desc">{project.description}</p>

                {project.bullets && (
                  <ul className="project-bullets">
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}

                <div className="project-footer">
                  {project.tags && (
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                  <div className="project-links">
                    {project.links?.map((l) => (
                      <a key={l.href} className="project-link" href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} ↗
                      </a>
                    ))}
                    {project.link && (
                      <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.linkLabel} ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {project.featured && imageSrc && (
                <div className="phone-mock phone-mock--lg">
                  <img src={imageSrc} alt={`${project.title} screenshot`} />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
