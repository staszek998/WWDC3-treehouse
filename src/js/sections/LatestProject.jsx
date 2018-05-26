import React, { Component } from "react";
import Feature from "../components/latest-project/Feature";
import iconBasket from "../../images/latest-project/icon-basket.png";
import iconLaptop from "../../images/latest-project/icon-laptop.png";
import iconLock from "../../images/latest-project/icon-lock.png";
const shortLorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel modi, officia perferendis molestias possimus aliquam minus non cupiditate quia placeat velit harum excepturi libero, voluptatem quidem. Vero, laborum.";

class LatestProject extends Component {
  render() {
    return (
      <section className="latest-project">
        <div className="container">
          <h2 className="section-title">LATEST PROJECT</h2>
          <h4 className="section-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
          <div className="latest-project__content">
            <h5 className="latest-project__heading">DEVELOPING A FRAMEWORK</h5>
            <p className="latest-project__paragraph">
              {shortLorem} {shortLorem}
            </p>
            <Feature imgSrc={iconBasket} imgAlt='Basket icon' title='E-Commerce ready' description='Repudiandae vel modi, officia perferendis molestias.' />
            <Feature imgSrc={iconLaptop} imgAlt='Laptop icon' title='Powerful SEO Features' description='Repudiandae vel modi, officia perferendis molestias.'/>
            <Feature imgSrc={iconLock} imgAlt='Lock icon' title='Secure Encryption' description='Repudiandae vel modi, officia perferendis molestias.'/>
            <p className="latest-project__paragraph">{shortLorem}</p>
            <a href="#">VIEW DETAILS</a>
          </div>
        </div>
      </section>
    );
  }
}

export default LatestProject;
