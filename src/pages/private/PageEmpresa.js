import React from "react";
import Header from "../../components/Header";

class PageEmpresa extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: {}
    }
  }
  componentDidMount(){
    this.carregaItem()
  }
  carregaItem(){
    const id = this.props.match.params.id;
    fetch(`https://backend.allya.com.br/api/Establishments/${id}`, {
      headers: {
        Authorization: localStorage.allya
      }
    })
      .then(res => res.json())
      .then(res => { this.setState({item: res })});
  }
  render(){
    
    const empresa = this.state.item;
    return <>
    <Header />
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
            { empresa.name }
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
            <div className="uk-container">

          <div className="uk-grid-divider" uk-grid="">
            <div className="uk-width-2-3" >
            <div key={empresa.id}>
              <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" >
              <div className="uk-overlay uk-overlay-primary uk-position-cover">
              <div className="uk-position-center">
                  <h3 className="uk-h2">{empresa.name}</h3>
                  </div>
                  </div>
              </div> 
            </div>
              </div> 
              <div className="uk-width-2-3" >
                sidebar
              </div>
            </div>

          </div>
        </div>
      </div>
  </>
  }
  // const [item, setItem] = useState({});

  // const id = props.match.params.id;
  
  // const fetchItem = async () => {
  //   const fetchItem = await fetch(`https://backend.allya.com.br/api/Establishments/${id}`)
  //     .then(res => {
  //       console.log(res);
  //       // const item = await fetchItem.json();
  //     })
  //     return fetchItem;
  };
export default PageEmpresa;