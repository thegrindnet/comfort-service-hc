import { testimonials } from "../../utils/constants.js";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section
      className="testimonials"
      id="reviews"
      aria-labelledby="testimonials-title"
    >
      <div className="section-shell">
        <div className="testimonials__heading">
          <p>Customer experiences</p>
          <h2 id="testimonials-title">
            Recommended by
            <br />
            <span>local customers.</span>
          </h2>
          <div className="testimonials__source">
            <strong>6</strong>
            <span>Google reviews supplied by the business</span>
          </div>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <span className="testimonial-card__quote" aria-hidden="true">
                “
              </span>
              {testimonial.title && <h3>{testimonial.title}</h3>}
              <blockquote>{testimonial.text}</blockquote>
              <footer>
                <span aria-hidden="true">{testimonial.name.charAt(0)}</span>
                <div>
                  <strong>{testimonial.name}</strong>
                  <small>Google review</small>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
