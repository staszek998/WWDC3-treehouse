import React, { Component } from "react";
import envato from "../../images/partners/envato.png";
import wordpress from "../../images/partners/wordpress.png";
import tuts from "../../images/partners/tuts.png";
import microlancer from "../../images/partners/microlacer.png";

class Partners extends Component {
  render() {
    return (
      <div className="partners">
        <div className="container">
          <img src={envato} alt="Envato logo" className="partners__image" />
          <img
            src={wordpress}
            alt="WordPress logo"
            className="partners__image"
          />
          <img src={tuts} alt="tuts+ logo" className="partners__image" />
          <img
            src={microlancer}
            alt="microlancer logo"
            className="partners__image"
          />
        </div>
      </div>
    );
  }
}

export default Partners;
