import { projects } from './data';

export default function Projects({ appIndex }) {
  return (
    <section id="projects" className="projects">
      <div className="section-heading">
        <h2>Projects</h2>
        <p>Selected work that blends product polish with technical depth.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => {
          const hasImages = project.images && project.images.length > 0;
          const imageSrc = hasImages
            ? project.images[appIndex % project.images.length]
            : null;

          return project.link ? (
            <article
              key={project.title}
              className={`project-highlight${imageSrc ? '' : ' project-highlight--text-only'}`}
            >
              {imageSrc ? (
                <div className="phone-mock">
                  <img src={imageSrc} alt={`${project.title} screenshot`} />
                </div>
              ) : null}
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a className="text-link" href={project.link}>
                  {project.linkLabel}
                </a>
              </div>
            </article>
          ) : (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
