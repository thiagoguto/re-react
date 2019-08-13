import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <div className="uk-cover-container uk-margin-bottom login">
          <canvas height="300" />
          <img
            src={require("../assets/img/bg-login.jpeg")}
            alt=""
            uk-cover=""
          />
          <div className="uk-overlay-primary uk-position-cover" />
          <div className="title-section uk-position-cover uk-flex uk-flex-middle uk-margin-bottom">
            <div className="uk-container uk-light">
              <Link to="/" className="login-logo">
                <img
                  src={require("../assets/img/logo.png")}
                  alt=""
                  className="uk-logo"
                />
              </Link>
              <h2>
                Entrar
                <span className="icon icon-colab-new-tab" />
              </h2>
            </div>
          </div>
        </div>
        <div className="uk-container uk-width-1-1@xs uk-width-3-5@s uk-width-2-5@m uk-margin-large-bottom">
          <div
            className="uk-card uk-card-default uk-card-body"
            style={{ marginTop: -70 }}
          >
            <div v-if="mensagem.msg" className="mensagem.cl" uk-alert="">
              <button className="uk-alert-close" uk-close="" />
              <p className="uk-text-center">mensagem</p>
            </div>
            <form>
              <fieldset className="uk-fieldset">
                <legend>Digite seus dados para entrar</legend>

                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon" uk-icon="icon: user" />
                    <input
                      className="uk-input"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <span className="uk-form-icon" uk-icon="icon: lock" />
                    <input
                      className="uk-input"
                      type="password"
                      placeholder="Senha"
                    />
                  </div>
                </div>
                <div className="uk-margin uk-flex uk-flex-between">
                  <button
                    disabled=" !usuario.name || !usuario.pass"
                    type="button"
                    className="uk-button uk-button-primary uk-width-1-1"
                  >
                    Entrar
                  </button>
                </div>
              </fieldset>
              <hr className="uk-divider-icon" />
              <div className="uk-text-center">
                <p>Ainda não tem uma conta?</p>
                <Link
                  to="/registrar"
                  className="uk-button uk-button-small uk-button-secondary"
                >
                  Criar conta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
