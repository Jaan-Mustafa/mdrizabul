import { contactData } from '../../data/contact';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__social">
            {contactData.social.github && (
              <a
                href={contactData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                GitHub
              </a>
            )}
            {contactData.social.linkedin && (
              <a
                href={contactData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
            {contactData.social.twitter && (
              <a
                href={contactData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Twitter"
              >
                Twitter
              </a>
            )}
            {contactData.social.youtube && (
              <a
                href={contactData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="YouTube"
              >
                YouTube
              </a>
            )}
          </div>

          <div className="footer__info">
            <p className="footer__copyright">
              © {currentYear} MD Rizabul. All rights reserved.
            </p>
            <p className="footer__built">
              Built with React + TypeScript + Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
