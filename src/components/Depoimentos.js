import React from "react";

const Depoimentos = data => {
  const depoimentos = data.data.dados;
  return (
    <section
      id="depoimentos"
      className="uk-section uk-background-cover uk-light"
      style={{ backgroundColor: "rgb(42, 97, 88)" }}
    >
      <div className="uk-container uk-container-expand">
        <div className="uk-container">
          <h2 className="uk-text-center uk-text-uppercase uk-margin-remove-bottom">
            Depoimentos
          </h2>
          <p className="uk-text-center uk-margin-large-bottom">
            Confira nossos depoimentos e faça parte você também!!
          </p>
          <div
            uk-grid=""
            className="uk-section uk-child-width-1-1@s uk-child-width-1-3@m uk-margin-large-bottom uk-grid"
          >
            {depoimentos.map(item => (
              <div key={item.id}>
                <div className="uk-card">
                  <div className="uk-card-media-top uk-flex uk-flex-center">
                    <img
                      src={item.img.url}
                      alt={item.title}
                      className="uk-border-rounded"
                    />
                  </div>
                  <div className="uk-card-body uk-text-center">
                    <div className="uk-light">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.body.value }}
                      />
                    </div>
                    <h3 className="uk-card-title uk-margin-remove">
                      {item.title}
                    </h3>
                    <h4 className="uk-margin-remove">{item.prof}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Depoimentos;
