import { contactData } from '../../data/contact';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact__title">Get In Touch</h2>

        <div className="contact__content">
          <p className="contact__description">
            I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out!
          </p>

          <div className="contact__methods">
            <div className="contact__method">
              <h3 className="contact__method-title">Personal Email</h3>
              <a
                href={`mailto:${contactData.email}`}
                className="contact__email"
              >
                {contactData.email}
              </a>
            </div>

            <div className="contact__method">
              <h3 className="contact__method-title">Professional Email</h3>
              <a
                href="mailto:rizabul.md@clear.in"
                className="contact__email"
              >
                rizabul.md@clear.in
              </a>
            </div>

            {contactData.location && (
              <div className="contact__method">
                <h3 className="contact__method-title">Location</h3>
                <p className="contact__location">{contactData.location}</p>
              </div>
            )}
          </div>

          <div className="contact__social">
            <h3 className="contact__social-title">Connect</h3>
            <div className="contact__social-links">
              {contactData.social.github && (
                <a
                  href={contactData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  GitHub
                </a>
              )}
              {contactData.social.linkedin && (
                <a
                  href={contactData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  LinkedIn
                </a>
              )}
              {contactData.social.twitter && (
                <a
                  href={contactData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  Twitter
                </a>
              )}
              {contactData.social.youtube && (
                <a
                  href={contactData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  YouTube
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
