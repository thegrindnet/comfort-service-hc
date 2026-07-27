import { benefits, business } from "../../utils/constants.js";
import "./About.css";

function About() {
  return (
    <section className="about" id="why-us" aria-labelledby="about-title">
      <div className="about__glow" aria-hidden="true" />
      <div className="about__inner section-shell">
        <div className="about__copy">
          <p className="about__eyebrow">Why Comfort Service</p>
          <h2 id="about-title">
            Local service.
            <br />
            <span>Serious comfort.</span>
          </h2>
          <p className="about__lead">
            Customers describe a professional, responsive team that explains the
            process, answers questions, and leaves completed work looking clean.
          </p>
          <a className="about__button" href={business.phoneHref}>
            Call Comfort Service
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="about__benefits">
          {benefits.map((benefit, index) => (
            <article className="about__benefit" key={benefit.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="about__financing section-shell" id="financing">
        <div className="about__financing-icon" aria-hidden="true">
          $
        </div>
        <div>
          <p>Comfort that can fit your budget</p>
          <h3>Financing options are available</h3>
        </div>
        <a href={business.phoneHref}>
          Ask for details
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default About;
