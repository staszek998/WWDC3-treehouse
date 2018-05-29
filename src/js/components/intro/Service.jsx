import React, { Component } from "react";

class Service extends Component {
  render() {
    return (
      <div className="services__wrapper">
        <div
          className="services__image"
          style={{ backgroundImage: `url(${this.props.imgSrc})` }}
        />
        <span className="services__title">{this.props.title}</span>
        <p className="services__description">{this.props.description}</p>
      </div>
    );
  }
}

export default Service;
