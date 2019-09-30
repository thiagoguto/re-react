import React, { Component } from "react";
import Header from "../../components/Header";
import API from "../../services/api";
import RedeItemAllya from "../../components/RedeItemDinamicoAllya";
import Loading from "../../components/Loading";

class Categoria extends Component {
  constructor(props){
    super(props);
    this.state = {
      allya: ''
    }
  }
  
  carregaCategoria(rota){
    if(rota){
    const header = {
      headers: {
        Authorization: localStorage.allya
      }
    }
    if(rota === "/app/categoria/farmacias"){
      const categoria ='59fd207f2d84ff11f8edcaf7'
      fetch(API.allya+API.lo+API.co+API.li+API.ca+categoria, header)
      .then(res=> res.json())
      .then(res=> {
        this.setState({
          allya: res.data
        })
      })
    }
    if(rota === "/app/categoria/restaurantes"){
      const categoria = "59fd207f2d84ff11f8edcaee"
      fetch(API.allya+API.lo+API.co+API.li+API.ca+categoria, header)
      .then(res=> res.json())
      .then(res=> {
        this.setState({
          allya: res.data
        })
      })
    }
    if(rota === "/app/categoria/cursos"){
      const categoria = "59fd207f2d84ff11f8edcaf1"
      fetch(API.allya+API.lo+API.co+API.li+API.ca+categoria, header)
      .then(res=> res.json())
      .then(res=> {
        this.setState({
          allya: res.data
        })
      })
    }
    if(rota === "/app/categoria/diversao"){
      const categoria = "59fd207f2d84ff11f8edcaef"
      fetch(API.allya+API.lo+API.co+API.li+API.ca+categoria, header)
      .then(res=> res.json())
      .then(res=> {
        this.setState({
          allya: res.data
        })
      })
    }
    if(rota === "/app/categoria/online"){
      const categoria = '59fd207f2d84ff11f8edcaf9'
      fetch(API.allya+API.lo+API.co+API.li+API.ca+categoria, header)
      .then(res=> res.json())
      .then(res=> {
        this.setState({
          allya: res.data
        })
      })
    }
  }
    // const comerBeber = "59fd207f2d84ff11f8edcaee"
    // const culturaLazer = "59fd207f2d84ff11f8edcaef"
    // const turismo = "59fd207f2d84ff11f8edcaf0"
    // const cursos = "59fd207f2d84ff11f8edcaf1"
    // const saudeEsporte = "59fd207f2d84ff11f8edcaf2"
    // const lojas = "59fd207f2d84ff11f8edcaf3"
    // const profissionais = "59fd207f2d84ff11f8edcaf5"
    // const farmacias = "59fd207f2d84ff11f8edcaf7"
    // const belezaBemEstar = "59fd207f2d84ff11f8edcaf8"
    // const servicos = "59fd207f2d84ff11f8edcaf9"

    
  }

  render() {
    const imagem = this.props.location.pathname
    return (
      <>
      {this.carregaCategoria(this.props.location.pathname)}
        <Header />
        <div className="uk-cover-container uk-margin-bottom">
          <canvas width="400" height="200" />
          { imagem === '/app/categoria/restaurantes' ? <img src={require("../../assets/img/restaurantes.jpeg")} alt="" uk-cover="" /> : '' }
          { imagem === '/app/categoria/diversao' ? <img src={require("../../assets/img/diversao.jpeg")} alt="" uk-cover="" /> : '' }
          { imagem === '/app/categoria/cursos' ? <img src={require("../../assets/img/cursos.jpeg")} alt="" uk-cover="" /> : '' }
          { imagem === '/app/categoria/online' ? <img src={require("../../assets/img/online.jpeg")} alt="" uk-cover="" /> : '' }
          { imagem === '/app/categoria/farmacias' ? <img src={require("../../assets/img/farmacias.jpeg")} alt="" uk-cover="" /> : '' }
          <div className="uk-overlay-primary uk-position-cover" />
          <div className="title-section uk-position-cover uk-flex uk-flex-middle uk-margin-bottom">
            <div className="uk-container uk-width-1-1">
              <h2 className="uk-light uk-text-center">
              { imagem === '/app/categoria/farmacias' ? 'Farmácias' : '' }
              { imagem === '/app/categoria/restaurantes' ? 'Restaurantes' : '' }
              { imagem === '/app/categoria/cursos' ? 'Cursos' : '' }
              { imagem === '/app/categoria/diversao' ? 'Diversão' : '' }
              { imagem === '/app/categoria/online' ? 'Online' : '' }
                <span className="icon icon-colab-new-tab" />
              </h2>
            </div>
          </div>
        </div>
        <div className="uk-container uk-flex uk-flex-center">
          <div className="uk-card uk-card-default uk-card-body uk-width-1-1@xs  uk-width-1-1 uk-margin-large-bottom"
            style={{ marginTop: -70 }} >
            <div className="uk-child-width-1-5" uk-grid="">
              { this.state.allya === '' ? <Loading />  : this.state.allya.map( res => <RedeItemAllya key={res._id} rota={imagem}  data={res} /> ) }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Categoria;
