import React, { Component } from "react";
import Header from "../../components/Header";
import API from "../../services/api";
import RedeItemAllya from "../../components/RedeItemDinamicoAllya";
import Loading from "../../components/Loading";

class Categoria extends Component {
  constructor(props){
    super(props);
    this.state = {
      allya: '',
      pesquisa: '',
      cidade: 'location=-19.8157,-43.9542'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleChange (evt){
    this.setState({pesquisa: evt.target.value});
  }
  handleSelect (evt){
    this.setState({cidade: evt.target.value});
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
      fetch(API.allya+this.state.cidade+API.co+API.li+API.ca+categoria, header)
      .then(res=> res.json())
      .then(res=> {
        this.setState({
          allya: res.data
        })
      })
    }
    if(rota === "/app/categoria/restaurantes"){
      const categoria = "59fd207f2d84ff11f8edcaee"
      fetch(API.allya+this.state.cidade+API.co+API.li+API.ca+categoria, header)
      .then(res=> res.json())
      .then(res=> {
        this.setState({
          allya: res.data
        })
      })
    }
    if(rota === "/app/categoria/cursos"){
      const categoria = "59fd207f2d84ff11f8edcaf1"
      fetch(API.allya+this.state.cidade+API.co+API.li+API.ca+categoria, header)
      .then(res=> res.json())
      .then(res=> {
        this.setState({
          allya: res.data
        })
      })
    }
    if(rota === "/app/categoria/diversao"){
      const categoria = "59fd207f2d84ff11f8edcaef"
      fetch(API.allya+this.state.cidade+API.co+API.li+API.ca+categoria, header)
      .then(res=> res.json())
      .then(res=> {
        this.setState({
          allya: res.data
        })
      })
    }
    if(rota === "/app/categoria/online"){
      const categoria = '59fd207f2d84ff11f8edcaf9'
      fetch(API.allya+this.state.cidade+API.co+API.li+API.ca+categoria, header)
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
            style={{ marginTop: -70 }} uk-grid="">
            <div className="uk-width-1-2">
            <form className="uk-search uk-search-default uk-width-1-1">

            <select className="uk-select uk-width-2-3" onChange={this.handleSelect}>
                <option value="location=-19.8157,-43.9542">Belo Horizonte</option>
                <option value="location=-19.7672,-43.8524">Santa Luzia</option>
                <option value="location=-19.9386,-44.0529">Contagem</option>
                <option value="location=-19.6934,-43.9137">Vespasiano</option>
            </select>
            { this.state.cidade }
            <button class="uk-button uk-button-default uk-width-1-3" >Filtrar</button>
            </form>
        </div>
            <div className="uk-width-1-2">
              <form className="uk-search uk-search-default uk-width-1-1">
                <span className="uk-search-icon-flip" uk-search-icon=""></span>
                <input className="uk-search-input" value={this.state.pesquisa} onChange={this.handleChange}  type="search" placeholder="Pesquisar..." />
              </form>
            </div>
            <div className="uk-child-width-1-5" uk-grid="">
              { this.state.allya === '' ? <Loading />  : this.state.allya.filter( res => { return res.name.toLowerCase().indexOf(this.state.pesquisa) >= 0 } ).map( res => <RedeItemAllya key={res._id} rota={imagem}  data={res} /> ) }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Categoria;
