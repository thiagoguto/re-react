import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensagem: '',
      usuario: {
        field_nome: {
          //name
          value: ""
        },
        field_cpf: {
          //document
          value: ""
        },
        field_telefone: {
          value: ""
        },
        field_plano: {
          value: "1"
        },
        endereco: {
          field_rua: {
            value: ""
          },
          field_numero: {
            value: ""
          },
          field_complemento: {
            value: ""
          },
          field_bairro: {
            value: ""
          },
          field_cep: {
            value: ""
          },
          field_cidade: {
            value: ""
          },
          field_estado: {
            value: ""
          }
        },
        name: {
          //email
          value: ""
        },
        mail: {
          //email
          value: ""
        },
        pass: {
          value: ""
        },
        confirm: {
          value: ""
        }
      }
    };
    this.cepBind = this.cepBind.bind(this);
    this.ruaBind = this.ruaBind.bind(this);
    this.bairroBind = this.bairroBind.bind(this);
    this.cidadeBind = this.cidadeBind.bind(this);
    this.estadoBind = this.estadoBind.bind(this);
    this.complementoBind = this.complementoBind.bind(this);
    this.numeroBind = this.numeroBind.bind(this);
    this.cpfBind = this.cpfBind.bind(this);
    this.nomeBind = this.nomeBind.bind(this);
    this.mailBind = this.mailBind.bind(this);
    this.telefoneBind = this.telefoneBind.bind(this);
    this.passBind = this.passBind.bind(this);
    this.confirmBind = this.confirmBind.bind(this);
  }

  pegaData(){
    var data = new Date();
    var ano = data.getFullYear();
    var mes = data.getMonth();
    var dia = data.getDate();
    if(mes <= 9 && dia <= 9){
      return `${ano}-0${(mes+1)}-0${(dia+2)}`;
    } else if(dia <= 9){
      return `${ano}-${(mes+1)}-0${(dia+2)}`;
    } else if(mes <= 9){
      return `${ano}-0${(mes+1)}-${(dia+2)}`;
    }
  }
  cepBind(event) {
    let cep = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        endereco: {
          ...this.state.usuario.endereco,
          field_cep: {
            value: cep
          }
        }
      }
    });
    if (cep !== "" && cep.length >= 8) {
      return fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => {
          if (response.ok) {
            console.log("ok ", response);
            return response.json();
          }
        })
        .then(data => {
          console.log(data);
          if (data.erro) {
            alert("CEP inválido");
            this.setState({
              usuario: {
                ...this.state.usuario,
                endereco: {
                  ...this.state.usuario.endereco,
                  field_cep: {
                    value: ""
                  }
                }
              }
            });
          } else {
            this.setState({
              usuario: {
                ...this.state.usuario,
                endereco: {
                  ...this.state.usuario.endereco,
                  field_rua: {
                    value: data.logradouro
                  },
                  field_bairro: {
                    value: data.bairro
                  },
                  field_cidade: {
                    value: data.localidade
                  },
                  field_estado: {
                    value: data.uf
                  }
                }
              }
            });
          }
        })
        .catch(({ message, response }) => {
          alert("Erro", message);
          console.log("error ", message, response);
        });
    }
  }
  ruaBind(event) {
    let rua = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        endereco: {
          ...this.state.usuario.endereco,
          field_rua: {
            value: rua
          }
        }
      }
    });
  }
  bairroBind(event) {
    let bairro = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        endereco: {
          ...this.state.usuario.endereco,
          field_bairro: {
            value: bairro
          }
        }
      }
    });
  }
  cidadeBind(event) {
    let cidade = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        endereco: {
          ...this.state.usuario.endereco,
          field_cidade: {
            value: cidade
          }
        }
      }
    });
  }
  estadoBind(event) {
    let estado = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        endereco: {
          ...this.state.usuario.endereco,
          field_estado: {
            value: estado
          }
        }
      }
    });
  }
  complementoBind(event) {
    let complemento = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        endereco: {
          ...this.state.usuario.endereco,
          field_complemento: {
            value: complemento
          }
        }
      }
    });
  }
  numeroBind(event) {
    let numero = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        endereco: {
          ...this.state.usuario.endereco,
          field_numero: {
            value: numero
          }
        }
      }
    });
  }
  cpfBind(event) {
    let cpf = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        field_cpf: {
          value: cpf
        },
        endereco: {
          ...this.state.usuario.endereco
        }
      }
    });
  }
  nomeBind(event) {
    let nome = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        field_nome: {
          value: nome
        },
        endereco: {
          ...this.state.usuario.endereco
        }
      }
    });
  }
  mailBind(event) {
    let mail = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        mail: {
          value: mail
        },
        endereco: {
          ...this.state.usuario.endereco
        }
      }
    });
  }
  telefoneBind(event) {
    let telefone = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        field_telefone: {
          value: telefone
        },
        endereco: {
          ...this.state.usuario.endereco
        }
      }
    });
  }
  passBind(event) {
    let pass = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        pass: {
          value: pass
        },
        endereco: {
          ...this.state.usuario.endereco
        }
      }
    });
  }
  confirmBind(event) {
    let confirm = event.target.value;
    this.setState({
      usuario: {
        ...this.state.usuario,
        confirm: {
          value: confirm
        },
        endereco: {
          ...this.state.usuario.endereco
        }
      }
    });
  }

  registraUsuarioAPI() {}
  registraUsuarioPagamento(e) {
    console.log("aqui entra o evento", e.target.value)
    if ( this.state.usuario.pass.value !== "") {
      fetch(
        "https://app.galaxpay.com.br/webservice/createPaymentBillBoletoAndCustomer",
        {
          method: "POST",
          body: JSON.stringify({
          Auth: {
            galaxId: "5473",  
            galaxHash: "83Mw5u8988Qj6fZqS4Z8K7LzOo1j28S706R0BeFe"
          }, 
          Request: {
            integrationId: `re-cli-${this.state.usuario.field_cpf.value}00`, 
            typeBill: "contract", 
            periodicity: "monthly", 
            payday: this.pegaData(), 
            value: "26.00", 
            quantity: "indeterminated", 
            fineBoleto: "2.50", 
            interestBoleto: "1.25", 
            infoBoleto: 'RE Beneficios clube de vantagens',
            Customer: {
              integrationId: `re-paga-${this.state.usuario.field_cpf.value}`, 
              document: this.state.usuario.field_cpf.value, 
              name: this.state.usuario.field_nome.value, 
              email: this.state.usuario.mail.value, 
              cellphone: this.state.usuario.field_telefone.value, 
              Address: {
                zipCode: this.state.usuario.endereco.field_cep.value,
                street: this.state.usuario.endereco.field_rua.value,
                number: this.state.usuario.endereco.field_numero.value,
                neighborhood: this.state.usuario.endereco.field_bairro.value,
                city: this.state.usuario.endereco.field_cidade.value,
                state: this.state.usuario.endereco.field_estado.value,
                complement: this.state.usuario.endereco.field_complemento.value
              }
            }
          }
        })}).then((data) => data.json())
      .then((res)=> {
        if(res.type === false){
          this.setState({
            mensagem: res.message
          })
        }else {
          this.setState({
            mensagem: res.message
          })
          let link = res.paymentBill[0].integrationId.replace(`.| -`, '');
          sessionStorage.setItem('user', JSON.stringify(res));
          this.props.history.push(`/checkout/${link}`)
        }
      });
    }
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
          <div className="uk-container uk-flex uk-flex-center">
            <div
              className="uk-card uk-card-default uk-card-body uk-width-1-1@xs uk-width-4-5@s uk-width-4-5@m uk-margin-large-bottom"
              style={{ marginTop: -70 }}
            >
              <div className={ this.state.mensagem !== '' ? "uk-alert-warning uk-padding-small uk-margin-bottom" : "uk-hidden" } uk-alert="">
                <button className="uk-alert-close" uk-close="" />
                <p className="uk-text-center uk-margin-remove">{ this.state.mensagem }</p>
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
                            value={this.state.usuario.field_nome.value}
                            onChange={this.nomeBind}
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
                            value={this.state.usuario.field_cpf.value}
                            onChange={this.cpfBind}
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
                            value={this.state.usuario.field_telefone.value}
                            onChange={this.telefoneBind}
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
                            value={this.state.usuario.mail.value}
                            onChange={this.mailBind}
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
                            value={this.state.usuario.pass.value}
                            onChange={this.passBind}
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
                            value={this.state.usuario.confirm.value}
                            onChange={this.confirmBind}
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
                            value={this.state.usuario.endereco.field_cep.value}
                            onChange={this.cepBind}
                            className="uk-input"
                            type="text"
                            placeholder="CEP"
                          />
                        </div>
                      </div>
                      <div className="uk-margin">
                        <div className="uk-inline uk-width-1-1">
                          <input
                            value={this.state.usuario.endereco.field_rua.value}
                            onChange={this.ruaBind}
                            className="uk-input"
                            type="text"
                            placeholder="Rua"
                          />
                        </div>
                      </div>
                      <div className="uk-margin">
                        <div className="uk-inline uk-width-1-1">
                          <input
                            value={
                              this.state.usuario.endereco.field_numero.value
                            }
                            onChange={this.numeroBind}
                            className="uk-input"
                            type="number"
                            placeholder="Numero"
                          />
                        </div>
                      </div>
                      <div className="uk-margin">
                        <div className="uk-inline uk-width-1-1">
                          <input
                            value={
                              this.state.usuario.endereco.field_bairro.value
                            }
                            onChange={this.bairroBind}
                            className="uk-input"
                            type="text"
                            placeholder="Bairro"
                          />
                        </div>
                      </div>
                      <div className="uk-margin">
                        <div className="uk-inline uk-width-1-1">
                          <input
                            value={
                              this.state.usuario.endereco.field_cidade.value
                            }
                            onChange={this.cidadeBind}
                            className="uk-input"
                            type="text"
                            placeholder="Cidade"
                          />
                        </div>
                      </div>
                      <div className="uk-margin">
                        <div className="uk-inline uk-width-1-1">
                          <input
                            value={
                              this.state.usuario.endereco.field_estado.value
                            }
                            onChange={this.estadoBind}
                            className="uk-input"
                            type="text"
                            placeholder="Estado"
                          />
                        </div>
                      </div>
                      <div className="uk-margin">
                        <div className="uk-inline uk-width-1-1">
                          <input
                            value={
                              this.state.usuario.endereco.field_complemento
                                .value
                            }
                            onChange={this.complementoBind}
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
                      />
                      Eu lí e aceito os termos contidos no termo de adesão.
                    </label>
                  </div>
                  <div className="uk-margin uk-flex uk-flex-between">
                    <button
                      disabled={
                        !this.state.usuario.pass.value !== !this.state.usuario.confirm.value ||
                        !this.state.usuario.field_nome.value ||
                        !this.state.usuario.field_cpf.value ||
                        !this.state.usuario.mail.value ||
                        !this.state.usuario.field_telefone.value ||
                        !this.state.usuario.endereco.field_cep.value ||
                        !this.state.usuario.endereco.field_rua.value ||
                        !this.state.usuario.endereco.field_cidade.value ||
                        !this.state.usuario.endereco.field_estado.value || 
                        !this.state.usuario.endereco.field_numero.value 
                      }
                      type="button"
                      className="uk-button uk-button-primary uk-width-1-1"
                      onClickCapture={this.registraUsuarioPagamento.bind(this)}
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
  }
}

export default Register;
