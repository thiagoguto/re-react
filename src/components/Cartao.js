import React from "react";
import { Link } from "react-router-dom";

const Cartao = () => (
  <section
    id="cartao"
    className="uk-background-cover uk-background-cover uk-light"
    style={{ backgroundColor: "rgb(52, 110, 101)" }}
  >
    <div className="uk-container uk-container-large">
      <div
        uk-grid=""
        className="uk-section uk-child-width-1-1@s uk-grid uk-grid-stack"
      >
        <div className="uk-first-column">
          <div
            uk-height-viewport="offset-bottom: true"
            className="uk-background-contain uk-height-1-1 uk-width-1-1 uk-panel uk-flex uk-flex-center uk-flex-bottom"
          >
            <img
              alt=""
              src={require("../assets/img/bg-mulher.png")}
              className="uk-visible@m"
            />
            <img
              alt=""
              src={require("../assets/img/bg-cartao.jpg")}
              className="uk-hidden@m"
            />
            <div className="uk-position uk-position-absolute uk-margin-button-large">
              <Link
                to="/registrar"
                className="uk-button uk-button-large uk-button-secondary uk-margin-large-bottom uk-box-shadow-large"
              >
                Peça seu cartão
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Cartao;
