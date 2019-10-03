import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      msgError: "",
      msgCor: ""
    };
    this.userBind = this.userBind.bind(this);
    this.passBind = this.passBind.bind(this);
    this.makeLogin = this.makeLogin.bind(this);
  }
  
  criaUsuarioLocal(id){
    console.log("foi ativado", API.APIURL+'/user/'+id+'?_format=json')
    fetch('https://api.rebeneficios.ml/user/'+id+'?_format=json')
    .then(data => data.json())
      .then(res=>{
        sessionStorage.setItem('userLocal', JSON.stringify(res));
        });
  }
  dataLogin = () => {
    return {
      method: "POST",
      body: JSON.stringify({ name: this.state.user, pass: this.state.pass }),
      headers: new Headers({
        "Access-control-allow-origin": "*",
        "Content-Type":"application/json",
        "Accept": "*/*",
            })
    };
  };
  
  makeLogin() {
    if (this.state.user !== "" && this.state.pass !== "") {
      fetch(API.login, this.dataLogin())
        .then(resposta => {
          console.log("res", resposta)
          if (resposta.ok) {
            this.setState({ msgError: "logado", msgCor: "success" });
            return resposta.json();
          } else {
            if (resposta.status === 500) {
              throw new Error("Email ou senha inválidos");
            }
            if (resposta.status === 400) {
              throw new Error("Email ou senha inválidos");
            }
          }
        })
        .then(res => {
          sessionStorage.setItem("userID", parseInt(res.current_user.uid));
          sessionStorage.setItem("token", res.csrf_token);
          this.criaUsuarioLocal(parseInt(res.current_user.uid));
          if (sessionStorage.getItem("token") === true) {
            this.authenticated = true;
          } else {
            this.authenticated = false;
          }
          this.props.history.push("/app");
          console.log("res", res)
        })
        .catch(({ message, response }) => {
          this.setState({ msgError: message, msgCor: "warning" });
          console.log(message, response);
        });
    }
  }
  userBind(event) {
    this.setState({
      user: event.target.value
    });
  }
  passBind(event) {
    this.setState({
      pass: event.target.value
    });
  }
  
  render() {
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
              <div
                className={
                  this.state.msgError === ""
                    ? "uk-hidden"
                    : `uk-alert-${this.state.msgCor} uk-padding-small uk-margin`
                }
                uk-alert=""
              >
                <button className="uk-alert-close" uk-close="">
                  {""}
                </button>
                <p className="uk-text-center uk-margin-remove">
                  {this.state.msgError}
                </p>
              </div>
              <form>
                <fieldset className="uk-fieldset">
                  <legend>Digite seus dados para entrar</legend>

                  <div className="uk-margin">
                    <div className="uk-inline uk-width-1-1">
                      <span className="uk-form-icon" uk-icon="icon: user" />
                      <input
                        className="uk-input"
                        value={this.state.user}
                        onChange={this.userBind}
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
                        value={this.state.pass}
                        onChange={this.passBind}
                        type="password"
                        placeholder="Senha"
                      />
                    </div>
                  </div>
                  <div className="uk-margin">
                    <button
                      disabled={!this.state.user || this.state.pass.length <= 5}
                      type="button"
                      onClick={this.makeLogin}
                      className="uk-button uk-button-primary uk-width-1-1"
                    >
                      Entrar
                    </button>
                    <div className="uk-width-1-1 uk-text-center uk-margin-top">
                    <Link to="/recuperar-senha"className="uk-text-link" >Recuperar Senha</Link>
                    </div>
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
  }
}

export default Login;
