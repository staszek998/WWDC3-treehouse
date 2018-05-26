import React, { Component } from "react";
import Nav from "./sections/Nav";
import Header from "./sections/Header";
import Intro from "./sections/Intro";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Intro />
      </div>
    );
  }
}

export default Main;
