import { PHONE_DISPLAY, PHONE_NUMBER, OPENING_HOURS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../data/menuData';
import './Footer.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>KHALIFAH</h3>
            <p>Class to Cuisine</p>
          </div>

          <div>
            <h4 className="footer-heading">Navigate</h4>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="footer-link"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Social</h4>
            <div className="footer-links">
              <a
                className="footer-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-info">
              <a className="footer-link" href={`tel:${PHONE_NUMBER}`}>
                {PHONE_DISPLAY}
              </a>
              <br />
              <span style={{ color: 'rgba(245, 240, 232, 0.4)' }}>{OPENING_HOURS}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Khalifah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
