import logo from "../../assets/images/comfort-service-logo.png";
import { business, navigationLinks } from "../../utils/constants.js";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner section-shell">
        <a className="footer__logo-link" href="#home" aria-label={`${business.name} home`}>
          <img
            className="footer__logo"
            src={logo}
            alt={`${business.name} Heating and Cooling`}
          />
        </a>
        <nav className="footer__links" aria-label="Footer navigation">
          {navigationLinks.slice(1).map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="footer__phone" href={business.phoneHref}>
          {business.phoneDisplay}
        </a>
      </div>
      <div className="footer__bottom section-shell">
        <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        <p>Heating &amp; cooling service in Canutillo, Texas.</p>
      </div>
    </footer>
  );
}

export default Footer;
