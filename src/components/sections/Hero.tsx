import { heroData } from '../../data/hero';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__name">{heroData.name}</h1>
            <p className="hero__tagline">{heroData.tagline}</p>
            
            <div className="hero__bio">
              {heroData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="hero__social">
              {heroData.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>

          {heroData.profileImage && (
            <div className="hero__image">
              <img
                src={heroData.profileImage}
                alt={heroData.name}
                className="hero__profile-img"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
