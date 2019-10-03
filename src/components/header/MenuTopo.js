import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuTopo as LinksMenuTopo } from "../../services/linksMenu";

class MenuTopo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: LinksMenuTopo
    };
  }
  render() {
    return (
      <ul className="uk-navbar-nav uk-visible@m">
        {console.log("psss")}
        {this.state.links.map(item => (
          <li key={item.id}>
            {item.class === "" ? (
              <Link to={item.link} uk-scroll="">
                {item.title}
              </Link>
            ) : (
              <div className="uk-height-1-1 uk-flex uk-flex-middle">
                <Link to={item.link} className={item.class}>
                  {item.title}
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default MenuTopo;
