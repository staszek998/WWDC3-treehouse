import React, { Component } from "react";
import Nav from "./sections/Nav";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import LatestProject from "./sections/LatestProject";
import CultureAndValues from "./sections/Culture&Values";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Partners from "./sections/Partners";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Intro />
        <LatestProject />
        <CultureAndValues />
        <Clients />
        <Contact />
        <Partners />
      </div>
    );
  }
}

export default Main;
