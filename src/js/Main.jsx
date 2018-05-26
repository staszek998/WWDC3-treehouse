import React, { Component } from "react";
import Nav from "./sections/Nav";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import LatestProject from "./sections/LatestProject";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Intro />
        <LatestProject />
      </div>
    );
  }
}

export default Main;
