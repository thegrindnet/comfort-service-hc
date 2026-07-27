import heroImage from "../../assets/images/hvac-technician-hero.webp";
import { business } from "../../utils/constants.js";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src={heroImage}
        alt="HVAC technician servicing an outdoor air-conditioning system near a Southwest home"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__inner section-shell">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Canutillo heating &amp; cooling
            <span aria-hidden="true" />
          </p>
          <h1 className="hero__title" id="hero-title">
            Comfort that
            <br />
            shows up in
            <br />
            <span className="hero__title-accent hero__title-accent--cold">one</span>{" "}
            <span className="hero__title-accent hero__title-accent--hot">day.</span>
          </h1>
          <p className="hero__description">
            One-day installations, financing options, and family-owned service
            focused on quality work.
          </p>
          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href={business.phoneHref}>
              <span aria-hidden="true">☎</span>
              <span>
                <strong>Call now</strong>
                <small>{business.phoneDisplay}</small>
              </span>
            </a>
            <a className="hero__button hero__button--secondary" href="#financing">
              Financing options
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <aside className="hero__badge" aria-label="Fast, clean, professional service">
          <span>Fast</span>
          <i aria-hidden="true" />
          <span>Clean</span>
          <i aria-hidden="true" />
          <span>Professional</span>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
