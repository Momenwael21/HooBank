import React from "react";
import { card1, card2, card3, hand } from "./imports";
import { TbDiscount2 } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";

const Landing = () => {
  return (
    <section className="landing">
      <div className="hand">
        <img src={hand} alt="robot_hand" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="discount">
              <TbDiscount2 className="icon" />
              <p className="discount-desc">
                <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
              </p>
            </div>
            <div className="main-desc">
              <div className="title">
                <h1>The Next</h1>
                <h1 className="grad">Generation</h1>
                <h1>Payment Method</h1>
                <div className="started">
                  <p>
                    Get <BsArrowUpRight fontSize={20} className="icon" /> <br />{" "}
                    Started
                  </p>
                </div>
              </div>
              <div className="desc">
                Our team of experts uses a methodology to identify the credit
                cards most likely to fit your needs. We examine annual
                percentage rates, annual fees.
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="imagination">
              <div className="balls">
                <div className="ball1"></div>
                <div className="ball2"></div>
                <div className="ball3"></div>
              </div>
              <div className="card-detail">
                <img className="card-1" src={card1} alt="card-layer" />
                <img className="card-2" src={card2} alt="card-layer" />
                <img className="card-3" src={card3} alt="card-layer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
