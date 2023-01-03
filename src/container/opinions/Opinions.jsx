import React from "react";

import OpinionCard from "../../components/opinionCard/OpinionCard";
import herman from "../../assets/herman.png";
import steve from "../../assets/steve.png";
import kenn from "../../assets/kenn.png";

const Opinions = () => {
  return (
    <section className="opinions">
      <div className="container">
        <div className="row head">
          <div className="col-sm-12 col-md-6">
            <h1 className="title">
              What people are <br /> saying about us
            </h1>
          </div>
          <div className="col-sm-12 col-md-6 paragraph">
            <p className="desc">
              Everything you need to accept card payments <br /> and grow your
              business anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="row body">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <OpinionCard
              text={
                "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
              }
              photo={herman}
              name={"Herman Jensen"}
              job={"Founder & Leader"}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <OpinionCard
              text={
                "Money makes your life easier. If you're lucky to have it, you're lucky."
              }
              photo={steve}
              name={"Steve Mark"}
              job={"Founder & Leader"}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <OpinionCard
              text={
                "It is usually people in the money business, finance, and international trade that are really rich."
              }
              photo={kenn}
              name={"Kenn Gallagher"}
              job={"Founder & Leader"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opinions;
