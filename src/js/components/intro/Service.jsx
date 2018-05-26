import React, { Component } from "react";

class Service extends Component {
  render() {
    return (
      <div className="services__wrapper">
        <img
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
          className="services__image"
        />
        <span className="services__title">{this.props.title}</span>
        <p className="services__description">{this.props.description}</p>
      </div>
    );
  }
}

export default Service;
