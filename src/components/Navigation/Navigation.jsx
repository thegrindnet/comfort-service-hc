import { useEffect, useState } from "react";
import { business } from "../../utils/constants.js";
import "./Navigation.css";

function Navigation({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navigation">
      <button
        className="navigation__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`navigation__menu ${isOpen ? "navigation__menu--open" : ""}`}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        {links.map((link) => (
          <a
            className="navigation__link"
            href={link.href}
            key={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          className="navigation__mobile-call"
          href={business.phoneHref}
          onClick={closeMenu}
        >
          Call {business.phoneDisplay}
        </a>
      </nav>
    </div>
  );
}

export default Navigation;
