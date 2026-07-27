import { business } from "../../utils/constants.js";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner section-shell">
        <div className="contact__copy">
          <p className="contact__eyebrow">Ready for better comfort?</p>
          <h2 id="contact-title">
            Talk with the
            <br />
            <span>Comfort Service team.</span>
          </h2>
          <p className="contact__lead">
            Call for heating and cooling service, installation information, or
            details about available financing options.
          </p>
          <div className="contact__actions">
            <a className="contact__call" href={business.phoneHref}>
              <span aria-hidden="true">☎</span>
              <span>
                <small>Call Comfort Service</small>
                <strong>{business.phoneDisplay}</strong>
              </span>
            </a>
            <a className="contact__financing" href={business.phoneHref}>
              Ask about financing
            </a>
          </div>
        </div>

        <aside className="contact__card">
          <span className="contact__pin" aria-hidden="true">
            ●
          </span>
          <p>Visit the office</p>
          <h3>{business.name}</h3>
          <address>
            {business.addressLine1}
            <br />
            {business.addressLine2}
          </address>
          <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
            Get directions
            <span aria-hidden="true">↗</span>
          </a>
          <div className="contact__promise">
            <strong>Family-owned HVAC service</strong>
            <small>Serving customers from Canutillo, Texas.</small>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
