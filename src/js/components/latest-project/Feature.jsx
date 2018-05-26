import React, { Component } from "react";

class Feature extends Component {
  render() {
    return (
      <div className="latest-project__feature">
        <div className="feature__image">
          <img src={this.props.imgSrc} alt={this.props.imgAlt} />
        </div>
        <div className="feature__wrapper">
          <span className="feature__title">{this.props.title}</span>
          <span className="feature__description">{this.props.description}</span>
        </div>
      </div>
    );
  }
}

export default Feature;
