import React, { Component } from "react";

const shortLorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel modi, officia perferendis molestias possimus aliquam minus non cupiditate quia placeat velit harum excepturi libero, voluptatem quidem. Vero, laborum.";

class CultureAndValues extends Component {
  render() {
    return (
      <div className="culture-and-values">
        <div className="container">
          <h2 className="section-title sans-serif">CULTURE & VALUES</h2>
          <h4 className="section-subtitle sans-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
          <div className="culture__wrapper">
            <div className="culture__images">
              <div className="images__circle">
                <img src="" alt="" className="images__image" />
              </div>
              <div className="images__hr" />
              <div className="images__circle">
                <img src="" alt="" className="images__image" />
              </div>
              <div className="images__hr" />
              <div className="images__circle">
                <img src="" alt="" className="images__image" />
              </div>
            </div>
            <div className="culture__description">
              <div className="description__wrapper">
                <div className="description__title sans-serif">
                  WORK-LIFE BALANCE
                </div>
                <div className="description__text sans-serif">{shortLorem}</div>
              </div>
              <div className="description__wrapper">
                <div className="description__title sans-serif">
                  QUALITY OVER QUANTITY
                </div>
                <div className="description__text sans-serif">{shortLorem}</div>
              </div>
              <div className="description__wrapper">
                <div className="description__title sans-serif">
                  DELIVERY EXPERIENCE
                </div>
                <div className="description__text sans-serif">{shortLorem}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CultureAndValues;
