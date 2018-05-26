import React, { Component } from "react";
import approveSign from "../../../images/intro/approve-sign.png";

class ListItem extends Component {
  render() {
    return (
      <div className="just-relax__list-item">
        <img src={approveSign} alt="Approve sign" />
        <span>{this.props.itemText}</span>
      </div>
    );
  }
}

export default ListItem;
