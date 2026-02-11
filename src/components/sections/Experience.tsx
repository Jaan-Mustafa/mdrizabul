import { experiences } from '../../data/experience';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="experience__title">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline__item">
              <div className="timeline__marker">
                <div className="timeline__year">{exp.period.split(' - ')[0]}</div>
                <div className="timeline__dot"></div>
                {index < experiences.length - 1 && <div className="timeline__line"></div>}
              </div>

              <div className="timeline__content">
                <div className="timeline__header">
                  <div className="timeline__logo">
                    {exp.logo ? (
                      <img src={exp.logo} alt={exp.company} />
                    ) : (
                      <span className="timeline__logo-text">
                        {exp.company.charAt(0)}
                      </span>
                    )}
                  </div>
                  
                  <div className="timeline__info">
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company">{exp.company}</p>
                    <p className="timeline__period">{exp.period}</p>
                  </div>
                </div>

                <div className="timeline__description">
                  {exp.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="timeline__highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}

                {exp.links && exp.links.length > 0 && (
                  <div className="timeline__links">
                    {exp.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline__link"
                      >
                        {link.text} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
