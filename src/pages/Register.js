import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
            </div>
          </div>
        </div>
        <div className="uk-container uk-flex uk-flex-center">
          <div
            className="uk-card uk-card-default uk-card-body uk-width-1-1@xs uk-width-4-5@s uk-width-4-5@m uk-margin-large-bottom"
            style={{ marginTop: -70 }}
          >
            <div v-if="mensagem.msg" className="mensagem.cl" uk-alert="">
              <button className="uk-alert-close" uk-close="" />
              <p className="uk-text-center">mensagem</p>
            </div>
            <form>
              <fieldset className="uk-fieldset">
                <legend className="uk-text-center">
                  Preêncha os campos abaixo para criar sua conta.
                </legend>

                <div className="uk-grid uk-grid-small" uk-grid="">
                  <div className="uk-width-1-2">
                    <div className="uk-margin">
                      <span>Dados pessoais</span>
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: user" />
                        <input
                          v-model="usuario.field_nome.value"
                          className="uk-input"
                          type="text"
                          placeholder="nome completo"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: move" />
                        <input
                          v-model="usuario.field_cpf.value"
                          className="uk-input"
                          type="text"
                          v-mask="'###.###.###-##'"
                          placeholder="CPF"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          uk-icon="icon: receiver"
                        />
                        <input
                          v-model="usuario.field_telefone.value"
                          className="uk-input"
                          type="text"
                          v-mask="'(##) #####-####'"
                          placeholder="Telefone"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: mail" />
                        <input
                          v-model="usuario.mail.value"
                          className="uk-input"
                          type="email"
                          placeholder="e-mail"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: lock" />
                        <input
                          v-model="usuario.pass.value"
                          className="uk-input"
                          type="password"
                          placeholder="senha"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: lock" />
                        <input
                          v-model="pass_confirm"
                          className="uk-input"
                          type="password"
                          placeholder="confirmar senha"
                        />
                      </div>
                    </div>
                    <div className="uk-margin uk-flex uk-flex-center">
                      <a
                        target="_blank"
                        className="uk-button uk-button-primary uk-button-small"
                        href="./files/termo_adesao.pdf"
                      >
                        Termo de adesão
                      </a>
                    </div>
                  </div>
                  <div className="uk-width-1-2">
                    <div className="uk-margin">
                      <span>Endereço</span>
                      <div className="uk-inline uk-width-1-1">
                        <input
                          v-model="usuario.endereco.field_cep.value"
                          className="uk-input"
                          type="text"
                          placeholder="CEP"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <input
                          v-model="usuario.endereco.field_rua.value"
                          className="uk-input"
                          type="text"
                          placeholder="Rua"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <input
                          v-model="usuario.endereco.field_numero.value"
                          className="uk-input"
                          type="number"
                          placeholder="Numero"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <input
                          v-model="usuario.endereco.field_bairro.value"
                          className="uk-input"
                          type="text"
                          placeholder="Bairro"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <input
                          v-model="usuario.endereco.field_cidade.value"
                          className="uk-input"
                          type="text"
                          placeholder="Cidade"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <input
                          v-model="usuario.endereco.field_estado.value"
                          className="uk-input"
                          type="text"
                          placeholder="Estado"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <input
                          v-model="usuario.endereco.field_complemento.value"
                          className="uk-input"
                          type="text"
                          placeholder="Complemento"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uk-margin uk-flex uk-flex-between">
                  <label className="uk-text-small">
                    <input
                      className="uk-checkbox"
                      v-model="aceite"
                      type="checkbox"
                    />{" "}
                    Eu lí e aceito os termos contidos no termo de adesão.
                  </label>
                </div>
                <div className="uk-margin uk-flex uk-flex-between">
                  <button
                    disabled="usuario.pass.value !== pass_confirm || !usuario.field_cpf.value || !usuario.field_telefone.value || !usuario.mail.value || !usuario.field_nome.value || !aceite || usuario.endereco.field_cep.value.length != 8 ||!usuario.endereco.field_rua.value || !usuario.endereco.field_numero.value || !usuario.endereco.field_bairro.value || !usuario.endereco.field_cidade.value || !usuario.endereco.field_estado.value"
                    type="button"
                    className="uk-button uk-button-primary uk-width-1-1"
                  >
                    Criar Conta
                  </button>
                </div>
              </fieldset>
              <hr className="uk-divider-icon" />
              <div className="uk-text-center">
                <p>Já tem uma conta?</p>
                <Link
                  to="/login"
                  className="uk-button uk-button-small uk-button-default"
                >
                  Entrar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
