import React from "react";

const CartaoVirtual = ({dados} )=> {
  return (
  <div id="modal-example" uk-modal="">
    <div className="uk-flex uk-flex-center uk-flex-middle">

    <div className="cartao uk-flex uk-flex-column uk-flex-center uk-text-center  uk-background-cover uk-light" data-src={require("../../assets/img/bg-cartao-virtual.png")} uk-img="">
    <button className="uk-modal" type="button" uk-close=""></button>
  <h3 className="titular">
  {dados.field_nome[0].value}
  </h3>
  <h2 className="numero-card">
  {dados.uuid[0].value.replace(/[^0-9]/g,"").replace(/-/g,"").replace(/(\d{5})(\d{5})(\d{5})(\d{5})/g,"$1 $2 $3 $4")}
  </h2>
    </div>
</div>
</div>)
}
export default CartaoVirtual;
