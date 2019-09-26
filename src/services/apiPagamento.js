import React, { Component } from "react";

class Pagamento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: "",
      pagamento: ""
    };
  }
  render() {
    return (
      <div>
        <h1>api pagamento</h1>
      </div>
    );
  }
}

export default Pagamento;
