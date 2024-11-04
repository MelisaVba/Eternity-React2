import PropTypes from "prop-types";
import GalleryItem from "./GalleryItem";


function Gallery() {
  return (
    <main>
      <div className="videoppal">
        <iframe className="video" src="https://www.youtube-nocookie.com/embed/-gTS9J87W9k?si=u1AYuL3zogrEfELk&amp;controls=0" title="YouTube video player"
          style={{ border: "none" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"         referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
        ></iframe>
      </div>

      <section>
        <div className="title">
          <h4>Innovación Robótica: Asistencia Diaria y Exploración Espacial</h4>
        </div>

        <article>
        {galleryslides.map((slide, index) => (
          <GalleryItem
          active={index === 0}
            key={index}
            imageSrc={slide.image}
            
          />

        )) }

        </article>
      </section>
    </main>
  );
}

Gallery.propTypes = {
  galleryslides: PropTypes.array.isRequired,
};

export default Gallery;


