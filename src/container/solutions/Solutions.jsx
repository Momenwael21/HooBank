import React from "react";
import { TbScan } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";

import { apple, paypal, shopify, graph, visa } from "./imports";

const Solutions = () => {
  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <div className="row">
          <div
            className="col-sm-12 col-lg-6"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <div className="description">
              <h1 className="title">
                Find a better card deal <br /> in few easy steps.
              </h1>
              <p className="desc">
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
              </p>
              <a href="/#" className="started">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="cards">
              <div className="content">
                <div
                  className="circles-back"
                  data-aos="zoom-in-up"
                  data-aos-duration="600"
                >
                  <div className="circle1">
                    <div className="circle2">
                      <div className="circle3"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="scan-card"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <div className="icon">
                    <TbScan fontSize={25} />
                  </div>
                  <h5>Scan Credit Cards</h5>
                  <p>
                    Scan yourcredit card in <br /> 4 minutes.
                  </p>
                </div>
                <div
                  className="analysis-card"
                  data-aos="fade-left"
                  data-aos-duration="600"
                >
                  <div className="head">
                    <h5 className="title">Online Analysis</h5>
                    <div className="date">
                      <p>
                        1 Month <IoMdArrowDropdown />
                      </p>
                    </div>
                  </div>
                  <div className="statistics">
                    <div className="numbers">
                      <div className="income">
                        <h6>$ 2,334,67</h6>
                        <p>Income</p>
                      </div>
                      <div className="expenses">
                        <h6>$ 5.31M</h6>
                        <p>Expenses</p>
                      </div>
                    </div>
                    <div className="graph">
                      <img src={graph} alt="graph" />
                    </div>
                    <div className="months">
                      <p>Jan</p>
                      <p>Feb</p>
                      <p className="active">Mar</p>
                      <p>Apr</p>
                      <p>May</p>
                      <p>Jun</p>
                      <p>Jul</p>
                    </div>
                  </div>
                </div>
                <div
                  className="method-card"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <div className="head">
                    <h5 className="title">Pay Method</h5>
                    <div className="icon">
                      <IoMdArrowDropdown fontSize={25} />
                    </div>
                  </div>
                  <div className="logos">
                    <div className="paypal logo">
                      <img src={paypal} alt="company_logo" />
                    </div>
                    <div className="apple logo">
                      <img src={apple} alt="company_logo" />
                    </div>
                    <div className="visa logo">
                      <img src={visa} alt="company_logo" />
                    </div>
                    <div className="shopify logo">
                      <img src={shopify} alt="company_logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
