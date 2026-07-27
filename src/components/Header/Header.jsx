import logo from "../../assets/images/comfort-service-logo.png";
import { business, navigationLinks } from "../../utils/constants.js";
import Navigation from "../Navigation/Navigation.jsx";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__inner section-shell">
        <a className="header__logo-link" href="#home" aria-label={`${business.name} home`}>
          <img
            className="header__logo"
            src={logo}
            alt={`${business.name} Heating and Cooling`}
          />
        </a>

        <Navigation links={navigationLinks} />

        <a className="header__call" href={business.phoneHref}>
          <span aria-hidden="true">☎</span>
          <span>
            <small>Call Comfort Service</small>
            <strong>{business.phoneDisplay}</strong>
          </span>
        </a>
      </div>
    </header>
  );
}

export default Header;
