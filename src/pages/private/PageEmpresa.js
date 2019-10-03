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
    fetch(`https://backend.allya.com.br/api/Establishments/${id}?filter={"include":{"relation":"addresses"}}`, {
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
    {console.log(this.props.match.params.id)}
    {console.log(sessionStorage.getItem("userLocal"))}
    <div className="uk-cover-container uk-margin-bottom">
      <canvas width="400" height="200" />
      <img
        src={require("../../assets/img/bg-card.png")}
        alt=""
        uk-cover=""/>
      
      <div className="uk-overlay-primary uk-position-cover" />
      <div className="title-section uk-position-cover uk-flex uk-flex-middle uk-margin-bottom">
        <div className="uk-container uk-width-1-1 uk-flex uk-flex-middle uk-margin-top">
          <div className="uk-width-1-5">
            <div className="uk-padding">

           <img src={ empresa.image !== undefined ? empresa.image.logo : '' } alt="" />
            </div>
          </div>
          <div className="uk-width-auto">
          <h2 className="uk-light uk-text-center uk-margin-remove">
            { empresa.name }
            <span className="icon icon-colab-new-tab" />
          </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="uk-container uk-flex uk-flex-center">
        <div
          className="uk-width-1-1@xs  uk-width-1-1 uk-margin-large-bottom"
          
          >
            <div className="uk-container">

          <div className="uk-grid-small" uk-grid="">
            <div className="uk-width-2-3" >
            <div>
              <div className="uk-background-cover uk-panel uk-flex uk-flex-center uk-flex-middle uk-margin" uk-height-match="target: > div > img">
                <div>
                  <img className="uk-width-expand" src={ empresa.image !== undefined ? empresa.image.cover : '' } alt="" />
                </div>
              </div> 
              <div className="uk-text-center">
                <h3 className="uk-h2">{empresa.name}</h3>
              </div>
              <h4 className="uk-text-bold"> Localização </h4>
              { empresa.addresses ? empresa.addresses.map(res => <div key={res.id}><b>{res.nameUnit}</b> <br />{res.street}, {res.number} - {res.neighborhood}<br /> {res.county} - CEP: {res.cep}<hr className="uk-divider-small" /></div>) : ''}

            </div>
              </div> 
              <div className="uk-width-1-3" >
                <h4 className="uk-text-bold"> Oferta </h4>
                <div className="uk-card uk-card-body uk-card-default uk-border-top">
                  <h3>{empresa.offer !== undefined ? empresa.offer.title : ''}</h3>
                  <hr className="uk-divider-small" />
                  {empresa.offer !== undefined ? <div dangerouslySetInnerHTML={{ __html: empresa.offer.term }}></div> : ''}
                </div>
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