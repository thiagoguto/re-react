import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuTopoAdmin as LinksMenuTopo } from "../../services/linksMenu";
import CartaoVirtual from "../../pages/private/CartaoVirtual";

class MenuTopo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: LinksMenuTopo
    };
    this.logOut = this.logOut.bind(this);
  }
  logOut() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userID");
    sessionStorage.removeItem("userLocal");
    document.location.reload(true);
  }
  render() {
    return (
      <ul className="uk-navbar-nav uk-visible@m">
        {this.state.links.map(item => (
          <li key={item.id}>
            {item.class === "" ? (
              <Link to={item.link} uk-scroll="">
                {item.title}
              </Link>
            ) : (
              <div className="uk-height-1-1 uk-flex uk-flex-middle">
                <Link to={item.link} className={item.class}>
                  {item.title}
                </Link>
              </div>
            )}
          </li>
        ))}
        {this.state.links.map(item => (
          <li key={item.id}>
            {item.class === "" ? (
              <Link to={item.link} uk-scroll="" onClick={this.logOut}>
                <span uk-icon="icon: user" />
                {item.title}
              </Link>
            ) : (
              <div className="uk-height-1-1 uk-flex uk-flex-middle">
                <div className="uk-inline">
                  <button className={`${item.class} uk-button-text`} type="button">
                <span uk-icon="icon: user" />
                  </button>
                  <div uk-dropdown="mode: click">
                    <div className="uk-margin-bottom">
                  <Link to={item.link} uk-scroll="">
                    <span uk-icon="icon: user" className="uk-margin-small-right" />
                    {item.title}
                  </Link>
                    </div>
                    <div className="uk-margin-bottom">
                      <a href="#modal-example" uk-toggle="target: #modal-example">
                        <span uk-icon="icon: credit-card" className="uk-margin-small-right" />
                        Cartão Virtual
                      </a>
                    </div>
                    <div>
                    <CartaoVirtual dados={JSON.parse(sessionStorage.getItem('userLocal'))} />

                    <button
                      onClick={this.logOut}
                      className="uk-button uk-button-small uk-button-danger"
                      >
                      <span uk-icon="icon: sign-out" />
                      sair
                    </button>
                      </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default MenuTopo;
