import React, { Component } from "react";
import FooterItem from "../components/footer/FooterItem";
import facebookLogo from "../../images/footer/facebook.png";
import twitterLogo from "../../images/footer/twitter.png";
import pinterestLogo from "../../images/footer/pinterest.png";
import googleLogo from "../../images/footer/google.png";
import email from "../../images/footer/email.png";
import iphone from "../../images/footer/iphone.png";
import location from "../../images/footer/location.png";
import media from "../../images/footer/media.png";
import news from "../../images/footer/news.png";
import photo from "../../images/footer/photo.png";

const locationText = (
  <span>
    Promenada street 5/7
    <br />
    Flat 26
    <br />
    00-778 Warsaw
    <br />
    Poland
  </span>
);

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__up">
          <div className="container">
            <div className="footer__column">
              <span className="column__header sans-serif">CONTACT US</span>
              <FooterItem
                imgSrc={location}
                imgAlt={"Location pin icon"}
                text={locationText}
              />
              <FooterItem
                imgSrc={iphone}
                imgAlt={"Phone icon"}
                text="+48 667 882 721"
              />
              <FooterItem
                imgSrc={email}
                imgAlt={"Envelope icon"}
                text="stanislaw.gregor@outlook.com"
              />
            </div>
            <div className="footer__column">
              <span className="column__header sans-serif">LATEST POSTS</span>
              <FooterItem
                imgSrc={news}
                imgAlt={"News icon"}
                text="Lorem ipsum dolor sit amet consectetur adipisicing"
              />
              <FooterItem
                imgSrc={photo}
                imgAlt={"Photo icon"}
                text="Lorem ipsum dolor sit amet consectetur adipisicing"
              />
              <FooterItem
                imgSrc={news}
                imgAlt={"News icon"}
                text="Lorem ipsum dolor sit amet consectetur adipisicing"
              />
              <FooterItem
                imgSrc={news}
                imgAlt={"News icon"}
                text="Lorem ipsum dolor sit amet consectetur adipisicing"
              />
              <FooterItem
                imgSrc={media}
                imgAlt={"Play button icon"}
                text="Lorem ipsum dolor sit amet consectetur adipisicing"
              />
            </div>
            <div className="footer__column">
              <span className="column__header sans-serif">LATEST TWEETS</span>
              <FooterItem
                imgSrc={twitterLogo}
                imgAlt={"Twitter logo"}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel modi, officia perferendis molestias possimus aliquam minus non cupiditate quia placeat velit harum excepturi libero, voluptatem quidem. Vero, laborum."
                twitterPost={true}
                timeStamp="12.04.2018"
              />
              <FooterItem
                imgSrc={twitterLogo}
                imgAlt={"Twitter logo"}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel modi, officia perferendis molestias possimus aliquam minus non cupiditate quia placeat velit harum excepturi libero, voluptatem quidem. Vero, laborum."
                twitterPost={true}
                timeStamp="23.05.2018"
              />
            </div>
          </div>
        </div>
        <div className="footer__down">
          <div className="container">
            <span className="footer__copyright">
              Copyright &copy; 2018 Stanisław Gregor
            </span>
            <div className="footer__logos">
              <div className="logo-wrapper">
                <img src={twitterLogo} alt="Twitter logo" className="logo" />
              </div>
              <div className="logo-wrapper">
                <img src={facebookLogo} alt="Facebook logo" className="logo" />
              </div>
              <div className="logo-wrapper">
                <img
                  src={pinterestLogo}
                  alt="Pinterest logo"
                  className="logo"
                />
              </div>
              <div className="logo-wrapper">
                <img src={googleLogo} alt="Google+ logo" className="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
