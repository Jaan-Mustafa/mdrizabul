import { contactData } from '../../data/contact';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
         

          <div className="footer__info">
            <p className="footer__copyright">
              Md Rizabul © 2022-{currentYear}.
            </p>
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
