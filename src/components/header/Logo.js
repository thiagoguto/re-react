import React from "react";
import { Link } from "react-router-dom";

const Logo = link => { return link === '/' ?
  <Link to="/" className="uk-link-reset">
    <img
      src={require("../../assets/img/logo.png")}
      alt=""
      className="uk-logo"
    />
  </Link>
    :
    <Link to="/app" className="uk-link-reset">
    <img
      src={require("../../assets/img/logo.png")}
      alt=""
      className="uk-logo"
    />
  </Link>};

export default Logo;
