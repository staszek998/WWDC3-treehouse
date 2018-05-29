import React, { Component } from "react";
import Quotation from "../components/clients/Quotation";
import contactPhoto1 from "../../images/clients/client-1.png";
import contactPhoto2 from "../../images/clients/client-2.png";

const shortLorem1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel modi, officia perferendis molestias possimus aliquam minus non.";

const shortLorem2 =
  "Cupiditate quia placeat velit harum excepturi libero, voluptatem quidem. Vero, laborum.";

class Clients extends Component {
  render() {
    return (
      <div className="clients">
        <div className="container">
          <h2 className="section-title">OUR AWESOME CLIENTS</h2>
          <h4 className="section-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h4>
          <Quotation
            type="1"
            text={shortLorem1}
            author="- John & Jane Doe, Founders of MNF"
            imgUrl={contactPhoto1}
          />
          <Quotation
            type="2"
            text={shortLorem2}
            author="- Stacey Banderough, Founder of Axiom"
            imgUrl={contactPhoto2}
          />
        </div>
      </div>
    );
  }
}

export default Clients;
