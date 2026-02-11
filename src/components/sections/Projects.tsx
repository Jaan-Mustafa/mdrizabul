import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects__title">Projects</h2>

        {featuredProjects.length > 0 && (
          <>
            <h3 className="projects__subtitle">Featured</h3>
            <div className="projects__grid projects__grid--featured">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {otherProjects.length > 0 && (
          <>
            <h3 className="projects__subtitle">Other Projects</h3>
            <div className="projects__grid">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="project-card">
      {project.image && (
        <div className="project-card__image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      
      <div className="project-card__content">
        <h4 className="project-card__title">{project.title}</h4>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              GitHub →
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              Live Demo →
            </a>
          )}
          {project.links.article && (
            <a
              href={project.links.article}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              Article →
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Projects;
