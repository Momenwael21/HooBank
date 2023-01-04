import React from "react";
import { AiFillStar } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

const featureFs = () => {
  return (
    <section className="featureFs" id="features">
      <div className="container">
        <div className="row">
          <div
            className="col-sm-12 col-lg-6"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <div className="main-desc">
              <h1 className="title">
                You do the business, we'll handle the money.
              </h1>
              <p className="desc">
                With the right credit card, you can improve your financial life
                by building credit, earning rewards and saving money. But with
                hundreds of credit cards on the market.
              </p>
              <a href="/#" className="started">
                Get Started
              </a>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-6"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <div className="features">
              <div className="feature">
                <div className="icon">
                  <AiFillStar fontSize={35} />
                </div>
                <div className="feat-desc">
                  <div className="title">Rewards</div>
                  <p className="desc">
                    The best credit cards offer some tantalizing combinations of
                    promotions and prizess
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="icon">
                  <RiSecurePaymentFill fontSize={35} />
                </div>
                <div className="feat-desc">
                  <div className="title">100% Secured</div>
                  <p className="desc">
                    We take proactive steps make sure your information and
                    transactions are secure.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="icon">
                  <FaTelegramPlane fontSize={35} />
                </div>
                <div className="feat-desc">
                  <div className="title">Balance Transfer</div>
                  <p className="desc">
                    A balance transfer credit card can save you a lot of money
                    in interest charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default featureFs;
