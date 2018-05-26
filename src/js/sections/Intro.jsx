import React, { Component } from "react";
import iconHeart from "../../images/intro/icon-heart.png";
import iconMobile from "../../images/intro/icon-mobile.png";
import iconGraph from "../../images/intro/icon-graph.png";
import Service from "../components/intro/Service";
import ButtonGreen from "../components/ButtonGreen";
import ListItem from "../components/intro/ListItem";
const shortLorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel modi, officia perferendis molestias possimus aliquam minus non cupiditate quia placeat velit harum excepturi libero, voluptatem quidem. Vero, laborum.";

class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <div className="container intro__professional-services">
          <span className="section-title">PROFESSIONAL SERVICES</span>
          <span className="section-subtitle">
            Lorem ipsum dolor sit amet consectetur
          </span>
          <div className="services">
            <Service
              imgSrc={iconHeart}
              imgAlt="Heart icon"
              title="BEAUTIFUL DESIGNS"
              description={shortLorem}
            />
            <Service
              imgSrc={iconMobile}
              imgAlt="Phone icon"
              title="RESPONSIVE WEB"
              description={shortLorem}
            />
            <Service
              imgSrc={iconGraph}
              imgAlt="Graph icon"
              title="MARKETING TOOLS"
              description={shortLorem}
            />
          </div>
        </div>
        <div className="intro__just-relax">
          <div className="just-relax__gear" />
          <div className="just-relax__content">
            <span className="section-title">
              JUST RELAX &<br />
              LET US DO THE HEAVY LIFTING
            </span>
            <span className="section-subtitle just-relax__subtitle">{shortLorem}</span>
            <ListItem itemText="Initial Setup & Customisations" />
            <ListItem itemText="Regular Updates" />
            <ListItem itemText="Round The Clock Support" />
            <ButtonGreen text="LEARN MORE" />
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
