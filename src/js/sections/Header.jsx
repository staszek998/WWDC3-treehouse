import React, { Component } from "react";
import ButtonGreen from "../components/ButtonGreen";

class Header extends Component {
  render() {
    return (
      <header className="header__background">
        <div className="container header">
          <span className="header__title">
            CREATIVE DIGITAL<br />SOLUTIONS
          </span>
          <span className="header__text">
            Lorem ipsum dolor sit amet consectetur
          </span>
          <ButtonGreen text="VIEW PORTFOLIO" />
        </div>
      </header>
    );
  }
}

export default Header;
