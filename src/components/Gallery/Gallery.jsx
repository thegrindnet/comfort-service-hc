import { useEffect, useState } from "react";
import { galleryItems } from "../../utils/constants.js";
import "./Gallery.css";

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedItem =
    selectedIndex === null ? null : galleryItems[selectedIndex];

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("modal-open", selectedIndex !== null);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("modal-open");
    };
  }, [selectedIndex]);

  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="section-shell">
        <div className="gallery__heading">
          <div>
            <p>Heating, cooling &amp; comfort</p>
            <h2 id="gallery-title">
              Service in
              <br />
              <span>every detail.</span>
            </h2>
          </div>
          <div>
            <p className="gallery__intro">
              Explore the equipment, installation work, and home-comfort services
              represented in this gallery.
            </p>
            <p className="gallery__disclosure">
              Illustrative images—replace with actual Comfort Service project
              photos when available.
            </p>
          </div>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <button
              className="gallery__item"
              type="button"
              key={item.src}
              aria-label={`Enlarge: ${item.alt}`}
              aria-haspopup="dialog"
              onClick={() => setSelectedIndex(index)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span>{item.label}</span>
              <i aria-hidden="true">↗</i>
            </button>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="gallery__modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.alt}
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="gallery__modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="gallery__modal-close"
              type="button"
              aria-label="Close enlarged image"
              onClick={() => setSelectedIndex(null)}
            >
              ×
            </button>
            <img src={selectedItem.src} alt={selectedItem.alt} />
            <p>{selectedItem.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
