import React, { Component } from "react";
import RedeItemEstatico from "./RedeItemEstatico";
import RedeItemEstaticoAllya from "./RedeItemEstaticoAllya";

class Rede extends Component {
  constructor() {
    super();
    this.state = {
      allya: []
    };
  }
  componentWillMount() {
    const loginAllya = {
      method: "POST",
      body: JSON.stringify({
        email: "alisson@reconsultoriaemseguros.com.br",
        password: "vitolo1988"
      }),
      headers: new Headers({
        "Content-type": "application/json"
      })
    };
    const homeAllya = {
      headers: {
        Authorization: localStorage.allya
      }
    };
    fetch("https://backend.allya.com.br/api/customers/login", loginAllya)
      .then(response => {
        return response.json();
      })
      .then(res => {
        localStorage.setItem("allya", res.accessToken);
      });
    fetch(
      "https://backend.allya.com.br/api/Establishments/exploreLocation?location=-23.6644134,-46.5078915&companyId=02fa7bf04bf845a680a6eb97&limit=12&categories=59fd207f2d84ff11f8edcaf9",
      homeAllya
    )
      .then(res => {
        return res.json();
      })
      .then(item => {
        this.setState({
          allya: item.data
        });
      });
  }

  render() {
    const { dados } = this.props.data;
    return (
      <section className="uk-section uk-section-primary" id="rede">
        <div className="uk-container">
          <div className="title-section">
            <h2>
              Explore
              <b>a rede</b>
              <span className="icon icon-colab-new-tab" />
            </h2>
            <p>
              Já são
              <b>20.000 endereços parceiros</b> e não paramos de crescer
            </p>
          </div>
          <div>
            <ul uk-tab="swiping: false" className="uk-tab">
              <li className="uk-active">
                <a href={"/#"}>Comer & Beber</a>
              </li>
              <li>
                <a href={"/#"}>Lazer</a>
              </li>
              <li>
                <a href={"/#"}>Cursos</a>
              </li>
              <li>
                <a href={"/#"}>Online</a>
              </li>
              <li>
                <a href={"/#"}>Farmácias</a>
              </li>
            </ul>
            <ul className="uk-switcher uk-margin">
              <li className="uk-active">
                <div>
                  <div
                    className="uk-grid uk-child-width-1-2@xs uk-child-width-1-3@s uk-child-width-1-6@m"
                    uk-grid=""
                  >
                    {dados[3].item.dados.map(res => (
                      <RedeItemEstatico key={res.id} data={res} />
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div
                    className="uk-grid uk-child-width-1-2@xs uk-child-width-1-3@s uk-child-width-1-6@m"
                    uk-grid=""
                  >
                    {dados[0].item.dados.map(res => (
                      <RedeItemEstatico key={res.id} data={res} />
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div
                    className="uk-grid uk-child-width-1-2@xs uk-child-width-1-3@s uk-child-width-1-6@m"
                    uk-grid=""
                  >
                    {dados[1].item.dados.map(res => (
                      <RedeItemEstatico key={res.id} data={res} />
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div
                    className="uk-grid uk-child-width-1-2@xs uk-child-width-1-3@s uk-child-width-1-6@m"
                    uk-grid=""
                  >
                    {this.state.allya !== undefined ? this.state.allya.map(res => (
                      <RedeItemEstaticoAllya key={res._id} data={res} />
                    )): null }
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div
                    className="uk-grid uk-child-width-1-2@xs uk-child-width-1-3@s uk-child-width-1-6@m"
                    uk-grid=""
                  >
                    {dados[2].item.dados.map(res => (
                      <RedeItemEstatico key={res.id} data={res} />
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Rede;
