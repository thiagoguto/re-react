import React, { Component } from "react";
class FTN extends Component {
  constructor() {
    super();
    this.state = {
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
        }
      },
      cep: "",
      nome: ""
    };
    this.usuario.endereco.field_rua.value = this.usuario.endereco.field_rua.value.bind(
      this
    );
    this.usuario.endereco.field_bairro.value = this.usuario.endereco.field_bairro.value.bind(
      this
    );
    this.usuario.endereco.field_cep.value = this.usuario.endereco.field_cep.value.bind(
      this
    );
    this.usuario.endereco.field_cidade.value = this.usuario.endereco.field_cidade.value.bind(
      this
    );
    this.usuario.endereco.field_estado.value = this.usuario.endereco.field_estado.value.bind(
      this
    );
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
    event();
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
}

export default new FTN();
