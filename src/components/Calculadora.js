import React, { Component } from "react";

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cinema: 6,
      calculaVantagem: "valor de vantagens",
      calculoDados: this.props.data.dados,
      particular: ""
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    // this.state.props.data = this.state.props.data(this);
  }
  pegaValorPlano(event) {
    this.setState({
      event
    });
  }
  onHandleChange(event) {
    this.setState({
      calculaVantagem: event.target.value
    });
  }
  render() {
    return (
      <section className="uk-section">
        <div className="uk-container">
          <div uk-grid="">
            <div className="uk-width-1-1">
              <h2>
                Simule a sua <b>economia</b>
              </h2>
              <p>
                Somos seu aliado para conseguir parcerias de maneira
                personalizada para você
              </p>
            </div>
            <div className="uk-width-1-1@s uk-width-2-3@m">
              <input
                value={this.state.calculaVantagem}
                onChange={event => this.onHandleChange(event)}
              />
              <h1>{this.state.calculaVantagem}</h1>
              {this.state.calculoDados.map(res => (
                <div className="uk-margin" key={res.id}>
                  <label className="uk-h5">{res.title}</label>
                  <div className="uk-flex uk-flex-around">
                    <div className="uk-width-1-5 uk-margin-right">
                      <span className="uk-h4"> R$ {res.particular}</span>
                    </div>
                    <div className="uk-width-expand">
                      <input
                        className="uk-range"
                        max="200"
                        min="0"
                        value={res.particular}
                        onChange={event => this.pegaValorPlano(event)}
                        name={res.title}
                        type="range"
                        step="0.5"
                      />
                    </div>
                    {/* {{ ((simulador[0].particular * 17) + (simulador[1].particular / 4) + (simulador[2].particular / 4) + (simulador[3].particular / 5) + (simulador[4].particular / 5) + (simulador[5].particular / 10)) | currency}} */}
                  </div>
                </div>
              ))}
            </div>
            <div className="uk-width-1-1@s uk-width-1-3@m">
              <div className="uk-card uk-card-body uk-card-default uk-card-primary uk-flex uk-flex-middle uk-height-1-1">
                <div>
                  <p>
                    Utilizando nossas parcerias no dia-a-dia, você poderá
                    economizar...
                  </p>
                  <strong className="uk-h2">{""}</strong>
                  <p>E veja que aqui o seu dinheiro rende mais!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculadora;
