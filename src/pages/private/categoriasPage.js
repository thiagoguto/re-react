import React, { Component } from "react";
import Header from "../../components/Header";
import {Link} from "react-router-dom";


class Categorias extends Component {
  constructor(props){
    super(props);
    this.state = {
      categorias: [
        {
          id: 3,
          img: "farmacias.jpeg",
          titulo:"Farmácias",
          url: "/app/categoria/farmacias"
        },
        {
          id: 4,
          img: "restaurantes.jpeg",
          titulo:"Restaurantes",
          url: "/app/categoria/restaurantes"
        },
        {
          id: 1,
          img: "cursos.jpeg",
          titulo:"Cursos",
          url: "/app/categoria/cursos"
        },
        {
          id: 2,
          img: "diversao.jpeg",
          titulo:"Diversão",
          url: "/app/categoria/diversao"
        },
        {
          id: 5,
          img: "online.jpeg",
          titulo:"Online",
          url: "/app/categoria/online"
        },
      ]
    }
  }
  listaCategorias(){
    fetch(
      "https://backend.allya.com.br/api/Establishments/exploreLocation?location=-23.6644134,-46.5078915&companyId=02fa7bf04bf845a680a6eb97&limit=12&categories=59fd207f2d84ff11f8edcaf9",
      {
        headers: {
          Authorization: localStorage.allya
        }
      }
    ).then(res => {
        return res.json();
      }).then(item => {
        this.setState({
          allya: item.data
        });
      });
  }
  render() {
    var vUser = JSON.parse(sessionStorage.getItem('userLocal'));
    return (
      <>
        <Header />
        {console.log(this)}
        <div className="uk-cover-container uk-margin-bottom">
          <canvas width="400" height="200" />
          <img
            src={require("../../assets/img/bg-card.png")}
            alt=""
            uk-cover=""/>
          
          <div className="uk-overlay-primary uk-position-cover" />
          <div className="title-section uk-position-cover uk-flex uk-flex-middle uk-margin-bottom">
            <div className="uk-container uk-width-1-1">
              <h2 className="uk-light uk-text-center">
                Bem Vindo {' '}
                {console.log("vUser", vUser)}
                { vUser !== null  ? vUser.field_nome[0].value : '' }
                <span className="icon icon-colab-new-tab" />
              </h2>
            </div>
          </div>
        </div>
        <div className="uk-container uk-flex uk-flex-center">
            <div
              className="uk-card uk-card-default uk-card-body uk-width-1-1@xs  uk-width-1-1 uk-margin-large-bottom"
              style={{ marginTop: -70 }}
              >
              <div className="uk-child-width-1-2" uk-grid="">
                {this.state.categorias.map(res=>
                <div key={res.id}>
                  <Link to={res.url}>
                    <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage: `url(${require('../../assets/img/'+res.img)})`}}>
                      <div className="uk-overlay uk-overlay-primary uk-position-cover">
                        <div className="uk-position-center">
                          <h3 className="uk-h2">{res.titulo}</h3>
                        </div>
                      </div>
                    </div> 
                  </Link>
                </div>
                  )}

              </div>
            </div>
          </div>
      </>
    );
  }
}

export default Categorias;
