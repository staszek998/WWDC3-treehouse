import React, { Component } from "react";
import Nav from "./sections/Nav";
import Header from "./sections/Header";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
      </div>
    );
  }
}

export default Main;
