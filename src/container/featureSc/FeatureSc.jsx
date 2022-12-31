import React from "react";
import {
  paypal,
  netflix,
  dribbble,
  manulife,
  playStore,
  appStore,
} from "./imports";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { BsFillCheckCircleFill } from "react-icons/bs";

const FeatureSc = () => {
  return (
    <section className="featureSc">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="cards">
              <div className="card-paypal">
                <div className="paypal">
                  <div className="logo">
                    <img src={paypal} alt="paypal-logo" />
                  </div>
                  <div className="name">
                    <h4>Paypal</h4>
                    <p>Checkout</p>
                  </div>
                </div>
                <div className="total">
                  <div className="price">
                    <p>Total</p>
                    <h5>$210</h5>
                  </div>
                  <p className="button">Change</p>
                </div>
                <p className="button-grad">Make Payment</p>
              </div>
              <div className="transactions">
                <h3 className="title">Last Transaction</h3>
                <div className="transaction">
                  <div className="company">
                    <div className="logo">
                      <img src={dribbble} alt="company_logo" />
                    </div>
                    <div className="details">
                      <h5 className="name">Dribbble Pro</h5>
                      <p className="date">15 Days ago</p>
                    </div>
                  </div>
                  <div className="value">
                    <IoMdArrowDropdown fontSize={30} className="down" />
                    <div className="price">-$250,93</div>
                  </div>
                </div>
                <div className="transaction">
                  <div className="company">
                    <div className="logo">
                      <img src={netflix} alt="company_logo" />
                    </div>
                    <div className="details">
                      <h5 className="name">Netflix</h5>
                      <p className="date">4 Days ago</p>
                    </div>
                  </div>
                  <div className="value">
                    <IoMdArrowDropdown fontSize={30} className="down" />
                    <div className="price">-$250,93</div>
                  </div>
                </div>
                <div className="transaction">
                  <div className="company">
                    <div className="logo">
                      <img src={manulife} alt="company_logo" />
                    </div>
                    <div className="details">
                      <h5 className="name">Manulife Cash</h5>
                      <p className="date">4 Days ago</p>
                    </div>
                  </div>
                  <div className="value">
                    <IoMdArrowDropup fontSize={30} className="up" />
                    <div className="price">+$250,93</div>
                  </div>
                </div>
              </div>
              <div className="payment-success">
                <BsFillCheckCircleFill fontSize={25} className="icon" />
                <p>Great! Your Payment is succesfully.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="details">
              <h1 className="title">
                Easily control your <br /> billing & invoicing.
              </h1>
              <p className="desc">
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
              </p>
              <div className="stores">
                <a href="/#">
                  <img src={playStore} alt="store-logo" />
                </a>
                <a href="/#">
                  <img src={appStore} alt="store-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSc;
