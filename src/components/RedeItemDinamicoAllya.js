import React from "react";
import {Link} from "react-router-dom";

const RedeItemEstaticoAllya = ({ data }) => (
  <div className="item">
    <Link to="" className="uk-link-reset">
    <div className="uk-card uk-card-default uk-height-1-1 uk-flex uk-flex-middle uk-flex-center">
      <div className="uk-card-media-top uk-text-center">
        {data.image.logo !== "https://s3.amazonaws.com/colaboradores-live/NoLogoAvailable.gif" ? 
        <img src={data.image.logo} alt="" /> :
        <img src={require('../assets/img/semimagem.jpg')} alt="" />
      }
        <h4
          style={{ color: "#555" }}
          className="uk-margin-remove uk-text-small uk-text-uppercase uk-padding-small"
        >
          {data.name}
        </h4>
      </div>
    </div>
    </Link>
  </div>
);
export default RedeItemEstaticoAllya;
