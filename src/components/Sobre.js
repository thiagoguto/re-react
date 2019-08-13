import React from "react";

const Sobre = data => {
  const sobre = data.data;
  return (
    <section id="quem-somos" className="uk-section">
      <div className="uk-container">
        <div
          uk-grid=""
          className="uk-card uk-grid-collapse uk-child-width-1-2@s uk-grid"
        >
          <div className="uk-first-column">
            <div className="uk-card-body">
              <h2>{sobre.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: sobre.body.value }} />
            </div>
          </div>
          <div className="uk-card-media-right uk-cover-container">
            <img
              src={sobre.img.link.url}
              alt={sobre.title}
              uk-cover=""
              className="uk-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
