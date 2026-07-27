import { highlights } from "../../utils/constants.js";
import "./Highlights.css";

function Highlights() {
  return (
    <section className="highlights section-shell" aria-label="Comfort Service advantages">
      <div className="highlights__grid">
        {highlights.map((item) => (
          <article className="highlights__item" key={item.title}>
            <span className="highlights__icon" aria-hidden="true">
              {item.icon}
            </span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
