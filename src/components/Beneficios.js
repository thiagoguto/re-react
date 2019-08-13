import React from "react";
import { Link } from "react-router-dom";

const Beneficios = data => {
  const beneficios = data.data.dados;
  return (
    <section id="beneficios" className="uk-section uk-background-muted">
      <div className="uk-container">
        <h2 className="uk-text-center uk-text-uppercase uk-margin-large">
          Benefícios
        </h2>
        <div
          uk-grid=""
          className="uk-grid uk-grid-small uk-child-width-1-1@xs uk-child-width-1-3@s uk-child-width-1-4@m"
        >
          {beneficios.map(item => (
            <div key={item.id}>
              <Link
                to=""
                uk-toggle={`target: #modal-${item.id}`}
                className="uk-link-reset"
              >
                <div
                  className="uk-background-blend-multiply uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle"
                  style={{
                    backgroundImage: `url(${item.img.link.url})`,
                    backgroundColor: `${item.cor}`
                  }}
                >
                  <h3 className="uk-h2 uk-position uk-text-uppercase uk-light uk-text-bold uk-position-bottom-left uk-padding-small">
                    {item.title}
                  </h3>
                </div>
              </Link>
              <div id={`modal-${item.id}`} uk-modal="" className="uk-modal">
                <div className="uk-modal-dialog uk-modal-body">
                  <button
                    type="button"
                    uk-close=""
                    className="uk-modal-close-outside uk-close uk-icon"
                  />
                  <h2 className="uk-modal-title">{item.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: item.body.value }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
