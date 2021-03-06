import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import {Checkout} from "../pages/Checkout";
import { Dashboard } from "../pages/private/dashboard";
import Categorias from "../pages/private/categoriasPage";
import Categoria from "../pages/private/categorias";
import RecuperarSenha from "../pages/RecuperarSenha";
import PageEmpresa from "../pages/private/PageEmpresa";
import CartaoVirtual from "../pages/private/CartaoVirtual";

// import { Container } from './styles';

export default class services extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/recuperar-senha" component={RecuperarSenha} />
        <Route path="/registrar" component={Register} />
        <Route path="/app/perfil/:id" render={ props => <CartaoVirtual {...props} /> } />
        <Route path="/checkout/:id" render={props => <Checkout {...props} />} />
        <Route path="/app/empresa/:id"  render={props => <PageEmpresa {...props} />}  />
        <Dashboard path="/app" exact component={Categorias} />
        <Dashboard path="/app/categoria/:id" component={Categoria} />
      </Router>
    );
  }
}
