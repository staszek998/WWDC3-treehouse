import React, { Component } from "react";

class Quotation extends Component {
  render() {
    return (
      <div
        className={`quotation ${
          this.props.type == 1 ? "quotation--first" : "quotation--second"
        }`}
      >
        <div
          className="quotation__image"
          style={{ backgroundImage: `url(${this.props.imgUrl})` }}
        />
        <div className="quotation__text">
          <span className="text__body">{this.props.text}</span>
          <span className="text__author">{this.props.author}</span>
        </div>
      </div>
    );
  }
}

export default Quotation;
