import React, { Component } from "react";
import logo from "../../images/logo.png";

class Nav extends Component {
  render() {
    return (
      <div className="container nav">
        <div className="nav__logo">
          <img src={logo} alt="Treehouse logo" />
          <span>TREEHOUSE</span>
        </div>
        <nav>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">BLOG</a>
          <a href="#">PORTFOLIO</a>
          <a href="#">CONTACT</a>
        </nav>
      </div>
    );
  }
}

export default Nav;
