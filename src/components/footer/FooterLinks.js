import React, { Component } from "react";
import Logo from "../header/Logo";
import { MenuContato, MenuFooter } from "../../services/linksMenu";

class FooterLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuLinks: MenuFooter,
      menuContatos: MenuContato
    };
  }
  render() {
    return (
      <div className="uk-container">
        <div className="uk-section">
          <div uk-grid="" className="uk-grid">
            <div className="uk-width-1-3 uk-first-column">
              <div
                id="block-logo"
                className="block block-system block-system-branding-block"
              >
                <Logo />
              </div>
            </div>
            <div className="uk-width-1-3">
              <ul className="uk-nav uk-light">
                {this.state.menuLinks.map(res => (
                  <li key={res.id}>
                    <a uk-scroll="" href={res.link}>
                      {res.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div
              uk-grid=""
              className="uk-child-width-1-1 uk-grid-small uk-margin-bottom uk-light uk-width-1-3 uk-grid uk-grid-stack"
            >
              {this.state.menuContatos.map(item => (
                <div key={item.id}>
                  <a href={item.link} className={`uk-link-reset ${item.class}`}>
                    <span
                      uk-icon={`icon:${item.icon}; ratio: 1`}
                      className="uk-margin-small-right uk-icon"
                    />
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterLinks;
