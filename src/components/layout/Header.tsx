import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'experience', label: 'Experience', path: '/experience' },
    { id: 'projects', label: 'Projects-', path: '/projects' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <span className="header__name">Md Rizabul</span>
          </Link>

          <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="header__nav-item">
                  <Link
                    to={item.path}
                    className={`header__nav-link ${isActive(item.path) ? 'header__nav-link--active' : ''}`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="header__mobile-toggle-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
