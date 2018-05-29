import React, { Component } from "react";
import Nav from "./sections/Nav";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import LatestProject from "./sections/LatestProject";
import CultureAndValues from "./sections/Culture&Values";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Intro />
        <LatestProject />
        <CultureAndValues />
      </div>
    );
  }
}

export default Main;
