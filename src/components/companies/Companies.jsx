import React from "react";

import airbnb from "../../assets/airbnb.png";
import binance from "../../assets/binance.png";
import coinbase from "../../assets/coinbase.png";
import dropbox from "../../assets/dropbox.png";

const Companies = () => {
  return (
    <div className="companies">
      <div className="container">
        <div className="row">
          <div
            className="col-sm-12 col-md-6 col-lg-3"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            <div className="photo">
              <img src={airbnb} alt="company_logo" />
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-3"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <div className="photo">
              <img src={binance} alt="company_logo" />
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-3"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <div className="photo">
              <img src={coinbase} alt="company_logo" />
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-3"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            <div className="photo">
              <img src={dropbox} alt="company_logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
