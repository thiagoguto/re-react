import React from "react";
export const Checkout = ({retorno}) => {
  var boleto = JSON.parse(sessionStorage.getItem('user'));
  return <>
  {console.log("boleto", boleto)}
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
                {/* <Link to="/" className="login-logo">
                  <img
                    src={require("../assets/img/logo.png")}
                    alt=""
                    className="uk-logo"
                  />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="uk-container uk-flex uk-flex-center">
            <div
              className="uk-card uk-card-default uk-card-body uk-width-1-1@xs uk-width-4-5@s uk-width-4-5@m uk-margin-large-bottom"
              style={{ marginTop: -70 }}
            >
              {/* <div className={ this.state.mensagem !== '' ? "uk-alert-warning uk-padding-small uk-margin-bottom" : "uk-hidden" } uk-alert="">
                <button className="uk-alert-close" uk-close="" />
                <p className="uk-text-center uk-margin-remove">{ this.state.mensagem }</p>
              </div> */}
              <form>
                <fieldset className="uk-fieldset">
                  <legend className="uk-text-center uk-width-1-1">
                    Selecione a forma de pagamento.
                  </legend>

                  <div className="uk-grid uk-grid-small uk-padding" uk-grid="">
                    <div className="uk-width-1-2 uk-flex uk-flex-center">
                      <div className="uk-margin">
                        <div className="uk-inline uk-width-1-1">
                          { boleto.paymentBill[0].transactions[0].boleto ?
                          <a href={boleto.paymentBill[0].transactions[0].boleto} target="_blank" rel="noopener noreferrer"> 
                          <img alt="" className="img-boleto" src={require("../assets/img/boleto.jpg")} />
                          </a>
                          : '' }
                        </div>
                      </div>
                      </div>
                      <div className="uk-width-1-2 uk-flex uk-flex-center">
                      <div className="uk-margin">
                        <div className="uk-inline uk-width-1-1">
                        <a href={boleto.paymentBill[0].link} target="_blank" rel="noopener noreferrer"> 
                          <img alt="" className="img-boleto" src={require("../assets/img/cartao-credito.jpg")} />
                          </a>
                        </div>
                      </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          </>
};