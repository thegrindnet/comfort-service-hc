import { business, services } from "../../utils/constants.js";
import "./Services.css";

function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="section-shell">
        <div className="services__heading">
          <div>
            <p className="services__eyebrow">Heating &amp; cooling support</p>
            <h2 id="services-title">
              Home comfort
              <br />
              <span>done right.</span>
            </h2>
          </div>
          <p className="services__intro">
            From diagnosing an AC problem to installing a new comfort system, the
            Comfort Service team explains the work and keeps customers informed.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="service-card__icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href={business.phoneHref}>
                Call about this service
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
