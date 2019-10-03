import React from "react";
import Logo from "./header/Logo";
import MenuTopo from "./header/MenuTopo";
import MenuTopoAdmin from "./header/MenuTopoAdmin";
const Header = () => {
  return (
    <header
      uk-sticky="animation: uk-animation-slide-top; cls-active: uk-navbar-sticky; top: 300"
      className="uk-box-shadow-small bg-branco uk-sticky uk-sticky-fixed"
    >
      <div className="uk-container uk-container-expand">
        <nav uk-navbar="" className="uk-navbar uk-navbar-transparent">
          <div className="uk-navbar-left">
            <div className="uk-navbar-item">
              {
                sessionStorage.getItem("token") ?
              <Logo link="/app/categoria/" /> :
              <Logo link="/" />
            }
            </div>
          </div>
          <div className="uk-navbar-right">
            {sessionStorage.getItem("token") ? <MenuTopoAdmin /> : <MenuTopo />}
            <a
              uk-navbar-toggle-icon=""
              href="#menu"
              uk-toggle="target: #menu"
              className="uk-navbar-toggle uk-hidden@m uk-navbar-toggle-icon uk-icon"
            >
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
