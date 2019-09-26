import React from "react";

const RedeItemEstatico = ({ data }) => (
  <div className="item">
    <div className="uk-card uk-card-default uk-height-1-1 uk-flex uk-flex-middle uk-flex-center">
      <div className="uk-card-media-top uk-text-center">
        <img src={data.img.url} alt="" />
        <h4
          style={{ color: "#555" }}
          className="uk-margin-remove uk-text-small uk-text-uppercase uk-padding-small"
        >
          {data.title}
        </h4>
      </div>
    </div>
  </div>
);
export default RedeItemEstatico;
