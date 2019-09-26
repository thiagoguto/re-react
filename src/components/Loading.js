import React from "react";

const Loading = () => (
  <div
    className="uk-container uk-container-small uk-flex uk-flex-center uk-flex-middle uk-width-1-1 uk-height-1-1"
    uk-height-viewport="expand: true"
  >
    <div className="uk-text-primary uk-padding-small" uk-spinner="ratio: 0.7">
      {"   "} Carregando {"  "}
    </div>
  </div>
);
export default Loading;
