import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

class RecuperarSenha extends Component {
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
    this.makeRequestPass = this.makeRequestPass.bind(this);
  }
  requestPass = () => {
    return {
      method: "POST",
      body: JSON.stringify({ name: this.state.user }),
      headers: new Headers({
        "Content-type": "Application/json"
      })
    };
  };
  
  makeRequestPass() {
    if (this.state.user !== "") {
      fetch(API.requestPass, this.requestPass())
        .then(resposta => {
          if(resposta.ok){
            this.setState({
              msgError: "Instruções foram enviadas para o seu endereço de e-mail.",
              msgCor: "success"
            })
          } else {
            if (resposta.status === 500) {
              throw new Error("Email não cadastrado");
            }
            if (resposta.status === 400) {
              throw new Error("Email não cadastrado");
            }
          }
        })
        // .then(res => {
        //   sessionStorage.setItem("userID", parseInt(res.current_user.uid));
        //   sessionStorage.setItem("token", res.csrf_token);
        //   this.criaUsuarioLocal();
        //   if (sessionStorage.getItem("token") === true) {
        //     this.authenticated = true;
        //   } else {
        //     this.authenticated = false;
        //   }
        //   this.props.history.push("/app");
        // })
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
  criaUsuarioLocal(){
    fetch(API.user)
    .then(data => data.json())
      .then(res=>{
        sessionStorage.setItem('userLocal', JSON.stringify(res));
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
                  <legend>Digite seu endereço email</legend>

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
                  
                  <div className="uk-margin uk-flex uk-flex-between">
                    <button
                      disabled={!this.state.user}
                      type="button"
                      onClick={this.makeRequestPass}
                      className="uk-button uk-button-primary uk-width-1-1"
                    >
                      Recuperar Senha
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RecuperarSenha;
