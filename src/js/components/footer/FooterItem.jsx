import React, { Component } from "react";

class FooterItem extends Component {
  render() {
    return (
      <div className="footer-item">
        <div
          className="item__image"
          style={{ backgroundImage: `url(${this.props.imgSrc})` }}
        />
        <span className="item__text sans-serif">
          {this.props.text}
          {this.props.twitterPost && (
            <span className="item__time-stamp">
              <br />
              {this.props.timeStamp}
            </span>
          )}
        </span>
      </div>
    );
  }
}

export default FooterItem;
